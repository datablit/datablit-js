import { v4 as uuidv4 } from 'uuid';
import { EventType, Event } from './types/event';
import { InitConfig } from './types/initConfig';
import { Rule } from './rule';
import { Experiment } from './experiment';

export class Datablit {
    private static instance: Datablit;
    private queue: Event[] = [];
    private userId: string | null = null;
    private anonymousId: string;
    private endpoint = "https://event.datablit.com/v1/batch";
    private apiKey = ""
    private batchSize = 20;
    private flushInterval = 30000;
    private flushTimer: any;
    private context: Record<string, any> = {}
    public rule: Rule;
    public experiment: Experiment;

    private constructor() {
        this.anonymousId = this.getAnonymousId();
        this.restoreQueue();
        this.startFlushTimer();
        this.rule = new Rule();
        this.experiment = new Experiment();
    }

    public static getInstance(): Datablit {
        if (typeof window === "undefined") {
            return Datablit.instance;
        }
        if (!Datablit.instance) {
            Datablit.instance = new Datablit();
        }
        return Datablit.instance;
    }

    public async init(config: InitConfig) {
        this.apiKey = config.apiKey;
        this.endpoint = config.endpoint || this.endpoint;

        // Set API key for Rule and Experiment classes
        this.rule.setApiKey(config.apiKey);
        this.experiment.setApiKey(config.apiKey);

        // Configure API endpoints
        if (config.apiBaseURL) {
            this.rule.setBaseEndpoint(config.apiBaseURL);
            this.experiment.setBaseEndpoint(config.apiBaseURL);
        }

        const userAgentData = (navigator as any).userAgentData
            ? await (navigator as any).userAgentData.getHighEntropyValues(["architecture", "bitness", "brands",
                "mobile", "model", "platform", "platformVersion", "uaFullVersion"])
            : null;
        // Get version from package.json or use fallback
        const getVersion = (): string => {
            try {
                // Try to read from package.json (works in Node.js)
                if (typeof require !== 'undefined') {
                    return require('../package.json').version;
                }
            } catch {
                // Fallback for browser builds
            }
            return '1.0.0'; // Fallback version
        };

        this.context = {
            userAgentData: userAgentData,
            library: {
                name: "@datablit/datablit-js",
                version: getVersion()
            }
        };
        if (config.batchSize) this.batchSize = config.batchSize;
        if (config.flushInterval) {
            this.flushInterval = config.flushInterval;
            this.startFlushTimer();
        }

        if (config.enablePageTracking) this.setupPageTracking()
    }

    public identify(userId: string, traits: Record<string, any> = {}): void {
        if (!this.apiKey) {
            throw new Error("Datablit is not initialized. Call Datablit.init({ apiKey: 'your-key' }) before using identify.");
        }
        this.userId = userId;
        localStorage.setItem("datablit_user_id", userId);
        let event = this.getDefaultEvent()
        event.context = {}
        event.type = EventType.identify
        event.traits = traits
        this.addInQueue(event)
    }

    public track(eventName: string, properties: Record<string, any> = {}): void {
        if (!this.apiKey) {
            throw new Error("Datablit is not initialized. Call Datablit.init({ apiKey: 'your-key' }) before using track.");
        }
        let event = this.getDefaultEvent()
        event.type = EventType.track
        event.event = eventName
        event.properties = properties
        this.addInQueue(event)
    }

    private getAnonymousId(): string {
        let id = localStorage.getItem("datablit_anonymous_id");
        if (!id) {
            id = uuidv4()
            localStorage.setItem("datablit_anonymous_id", id);
        }
        return id;
    }

    private trackPageView(): void {
        let event = this.getDefaultEvent()
        event.type = EventType.track
        event.event = "Page View"
        event.properties = {
            url: window.location.href,
            title: document.title,
            referrer: document.referrer,
        }
        this.addInQueue(event)
    }

    private setupPageTracking(): void {
        window.addEventListener("DOMContentLoaded", () => this.trackPageView());
        window.addEventListener("popstate", () => this.trackPageView());
    }

    private addInQueue(payload: Event) {
        this.queue.push(payload);
        this.saveQueue();

        if (this.queue.length >= this.batchSize) {
            this.flush();
        }
    }

    private getDefaultEvent(): Event {
        return {
            anonymousId: this.anonymousId,
            userId: this.userId || localStorage.getItem("datablit_user_id"),
            messageId: uuidv4(),
            type: EventType.invalid,
            context: {
                ...this.context,
                userAgent: navigator.userAgent,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
                locale: navigator.language,
                page: {
                    path: window.location.pathname,
                    referrer: document.referrer,
                    search: window.location.search,
                    title: document.title,
                    url: window.location.href,
                }
            },
            originalTimestamp: new Date().toISOString(),
        }
    }

    private flush(): void {
        if (this.queue.length === 0) return;
        const req = { "batch": [...this.queue], "sentAt": new Date().toISOString() };
        this.queue = [];
        this.saveQueue();

        fetch(this.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "apiKey": this.apiKey },
            body: JSON.stringify(req),
            keepalive: true,  // Ensures request completes even during page navigation
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().catch(() => ({})).then((errorResponse) => {
                        if (response.status >= 500 || response.status === 429) {
                            throw new Error("Retry: Server issue or rate limit reached");
                        } else {
                            console.warn("[Datablit]: Skipping event due to client error", response.status, errorResponse);
                            return;
                        }
                    });
                }
            })
            .catch((error) => {
                console.error("[Datablit]: Retry on failure", error);
                this.queue = this.queue.concat(req.batch)
                this.saveQueue();
            });
    }

    private saveQueue(): void {
        if (this.queue.length > 100) {
            return
        }
        localStorage.setItem("datablit_event_queue", JSON.stringify(this.queue));
    }

    private restoreQueue(): void {
        const savedQueue = localStorage.getItem("datablit_event_queue");
        if (savedQueue) {
            this.queue = JSON.parse(savedQueue);
        }
    }

    private startFlushTimer(): void {
        if (this.flushTimer) clearInterval(this.flushTimer);
        this.flushTimer = setInterval(() => this.flush(), this.flushInterval);
    }
}
