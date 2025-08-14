export enum EventType {
    invalid = "invalid",
    identify = "identify",
    track = "track"
}

export type Event = {
    anonymousId: string
    userId: string | null
    messageId: string
    type: EventType
    context?: Record<string, any>
    originalTimestamp: string
    event?: string | null,
    properties?: Record<string, any>
    traits?: Record<string, any>
}
