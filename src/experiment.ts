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
     * Returns the variant string assigned to the entity
     */
    public async getVariant(expId: string, entityId: string): Promise<string> {
        const queryParams = new URLSearchParams({
            expId,
            entityId
        });

        const response = await this.makeRequest(`/api/1.0/experiment/variant?${queryParams.toString()}`, {
            method: 'GET'
        });
        return response.variant;
    }
}
