export abstract class BaseAPI {
    protected apiKey: string = "";
    protected baseEndpoint: string = "https://console.datablit.com";

    public setApiKey(apiKey: string): void {
        this.apiKey = apiKey;
    }

    public setBaseEndpoint(endpoint: string): void {
        this.baseEndpoint = endpoint;
    }

    protected async makeRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
        if (!this.apiKey) {
            throw new Error("API key is not set. Please initialize the SDK first.");
        }

        const url = `${this.baseEndpoint}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'apiKey': this.apiKey,
                ...options.headers,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`);
        }

        return response.json();
    }
}
