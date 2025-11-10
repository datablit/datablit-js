import { BaseAPI } from './base-api';

// TODO: not being used, can delete these interfaces
export interface EvalRuleRequest {
    key: string;
    userId: string;
    params?: Record<string, any>;
}

export interface EvalRuleResponse {
    key: string;
    userId: string;
    result: boolean;
}

export class Rule extends BaseAPI {
    /**
     * Evaluate a rule for a given user and context
     * Returns the evaluation result as a boolean
     */
    public async evalRule(key: string, userId: string, params?: Record<string, any>): Promise<boolean> {
        const response = await this.makeRequest('/api/1.0/rule/eval', {
            method: 'POST',
            body: JSON.stringify({ key, userId, params }),
        });
        return response.result;
    }
}