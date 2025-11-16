import { BaseAPI } from './base-api';

// TODO: not being used, can delete these interfaces
export interface EvalRuleRequest {
    key: string;
    entityId: string;
    params?: Record<string, any>;
}

export interface EvalRuleResponse {
    key: string;
    entityId: string;
    result: boolean;
}

export class Rule extends BaseAPI {
    /**
     * Evaluate a rule for a given entity and context
     * Returns the evaluation result as a boolean
     */
    public async evalRule(key: string, entityId: string, params?: Record<string, any>): Promise<boolean> {
        const response = await this.makeRequest('/api/1.0/rule/eval', {
            method: 'POST',
            body: JSON.stringify({ key, entityId, params }),
        });
        return response.result;
    }
}