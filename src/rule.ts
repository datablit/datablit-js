import { BaseAPI } from './base-api';

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
     * Returns the evaluation result with key, userId, and result
     */
    public async evalRule(request: EvalRuleRequest): Promise<EvalRuleResponse> {
        return this.makeRequest('/api/1.0/rule/eval', {
            method: 'POST',
            body: JSON.stringify(request),
        });
    }
}
