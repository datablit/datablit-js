import { BaseAPI } from './base-api';

export interface GetVariantRequest {
    expId: string;
    entityId: string;
}

export interface GetVariantResponse {
    expId: string;
    entityId: string;
    variant: string;
}

export class Experiment extends BaseAPI {
    /**
     * Get experiment variant for a user
     */
    public async getVariant(request: GetVariantRequest): Promise<GetVariantResponse> {
        const queryParams = new URLSearchParams({
            expId: request.expId,
            entityId: request.entityId
        });

        return this.makeRequest(`/api/1.0/experiment/variant?${queryParams.toString()}`, {
            method: 'GET'
        });
    }
}
