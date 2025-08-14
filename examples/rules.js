/**
 * @datablit/datablit-js - Rules Examples
 * 
 * Comprehensive examples for rule evaluation including:
 * - Basic rule evaluation
 * - User segmentation rules
 * - Feature flag rules
 * - Business logic rules
 * - Error handling
 */

import datablit from '@datablit/datablit-js';

// ============================================================================
// BASIC RULE EVALUATION
// ============================================================================

/**
 * Basic rule evaluation with minimal parameters
 */
async function basicRuleEvaluation() {
    console.log('🔍 Basic Rule Evaluation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'fer',
            userId: 'user123',
            params: {
                os_name: 'android'
            }
        });

        console.log('Basic rule result:', result);
        console.log('Rule key:', result.key);
        console.log('User ID:', result.userId);
        console.log('Result:', result.result);

        console.log('✅ Basic rule evaluation completed');
    } catch (error) {
        console.error('❌ Basic rule evaluation failed:', error.message);
    }
}

/**
 * Rule evaluation with comprehensive user context
 */
async function comprehensiveRuleEvaluation() {
    console.log('🔍 Comprehensive Rule Evaluation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'premium_user',
            userId: 'user456',
            params: {
                // User profile
                plan: 'premium',
                accountType: 'business',
                signupDate: '2024-01-15',
                lastLoginDate: '2024-01-20',

                // Demographics
                age: 28,
                gender: 'female',
                location: 'US',
                city: 'San Francisco',
                state: 'CA',
                country: 'US',

                // Device information
                device: 'mobile',
                os: 'iOS',
                browser: 'Safari',
                os_name: 'ios',

                // Usage patterns
                isLoggedIn: true,
                isNewUser: false,
                hasCompletedOnboarding: true,
                usageCount: 150,

                // Business context
                company: 'Tech Corp',
                jobTitle: 'Product Manager',
                industry: 'Technology',

                // Custom parameters
                preferredLanguage: 'en',
                timezone: 'America/Los_Angeles',
                campaign: 'summer_2024'
            }
        });

        console.log('Comprehensive rule result:', result.result);
        console.log('✅ Comprehensive rule evaluation completed');
    } catch (error) {
        console.error('❌ Comprehensive rule evaluation failed:', error.message);
    }
}

// ============================================================================
// USER SEGMENTATION RULES
// ============================================================================

/**
 * Premium user segmentation
 */
async function premiumUserSegmentation() {
    console.log('👑 Premium User Segmentation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'premium_user',
            userId: 'user789',
            params: {
                plan: 'premium',
                totalSpent: 5000,
                orderCount: 25,
                accountAge: 365, // days
                isActive: true
            }
        });

        console.log('Is premium user:', result.result);
        console.log('✅ Premium user segmentation completed');
    } catch (error) {
        console.error('❌ Premium user segmentation failed:', error.message);
    }
}

/**
 * New user segmentation
 */
async function newUserSegmentation() {
    console.log('🆕 New User Segmentation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'new_user',
            userId: 'user101',
            params: {
                signupDate: '2024-01-15',
                isNewUser: true,
                hasCompletedOnboarding: false,
                usageCount: 5,
                accountAge: 7 // days
            }
        });

        console.log('Is new user:', result.result);
        console.log('✅ New user segmentation completed');
    } catch (error) {
        console.error('❌ New user segmentation failed:', error.message);
    }
}

/**
 * Geographic segmentation
 */
async function geographicSegmentation() {
    console.log('🌍 Geographic Segmentation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'us_user',
            userId: 'user202',
            params: {
                location: 'US',
                country: 'US',
                state: 'CA',
                city: 'San Francisco',
                timezone: 'America/Los_Angeles'
            }
        });

        console.log('Is US user:', result.result);
        console.log('✅ Geographic segmentation completed');
    } catch (error) {
        console.error('❌ Geographic segmentation failed:', error.message);
    }
}

/**
 * Device segmentation
 */
async function deviceSegmentation() {
    console.log('📱 Device Segmentation...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'mobile_user',
            userId: 'user303',
            params: {
                device: 'mobile',
                os: 'iOS',
                browser: 'Safari',
                os_name: 'ios',
                screenWidth: 375,
                screenHeight: 812
            }
        });

        console.log('Is mobile user:', result.result);
        console.log('✅ Device segmentation completed');
    } catch (error) {
        console.error('❌ Device segmentation failed:', error.message);
    }
}

// ============================================================================
// FEATURE FLAG RULES
// ============================================================================

/**
 * Feature flag for premium features
 */
async function premiumFeatureFlag() {
    console.log('⭐ Premium Feature Flag...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'show_premium_features',
            userId: 'user404',
            params: {
                plan: 'premium',
                hasCompletedOnboarding: true,
                usageCount: 50,
                isActive: true
            }
        });

        console.log('Show premium features:', result.result);
        console.log('✅ Premium feature flag completed');
    } catch (error) {
        console.error('❌ Premium feature flag failed:', error.message);
    }
}

/**
 * Feature flag for beta features
 */
async function betaFeatureFlag() {
    console.log('🧪 Beta Feature Flag...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'show_beta_features',
            userId: 'user505',
            params: {
                isBetaTester: true,
                plan: 'premium',
                hasOptedInBeta: true,
                usageCount: 100
            }
        });

        console.log('Show beta features:', result.result);
        console.log('✅ Beta feature flag completed');
    } catch (error) {
        console.error('❌ Beta feature flag failed:', error.message);
    }
}

/**
 * Feature flag for A/B testing
 */
async function abTestFeatureFlag() {
    console.log('🔬 A/B Test Feature Flag...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'new_ui_experiment',
            userId: 'user606',
            params: {
                experimentGroup: 'treatment',
                plan: 'premium',
                location: 'US',
                device: 'desktop'
            }
        });

        console.log('Show new UI:', result.result);
        console.log('✅ A/B test feature flag completed');
    } catch (error) {
        console.error('❌ A/B test feature flag failed:', error.message);
    }
}

// ============================================================================
// BUSINESS LOGIC RULES
// ============================================================================

/**
 * High value customer rule
 */
async function highValueCustomerRule() {
    console.log('💰 High Value Customer Rule...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'high_value_customer',
            userId: 'user707',
            params: {
                totalSpent: 10000,
                orderCount: 50,
                averageOrderValue: 200,
                customerLifetimeValue: 15000,
                plan: 'premium',
                accountAge: 730 // 2 years
            }
        });

        console.log('Is high value customer:', result.result);
        console.log('✅ High value customer rule completed');
    } catch (error) {
        console.error('❌ High value customer rule failed:', error.message);
    }
}

/**
 * Churn risk rule
 */
async function churnRiskRule() {
    console.log('⚠️ Churn Risk Rule...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'churn_risk',
            userId: 'user808',
            params: {
                lastLoginDate: '2024-01-01',
                daysSinceLastActivity: 30,
                usageCount: 5,
                plan: 'basic',
                hasSupportTickets: true,
                satisfactionScore: 3
            }
        });

        console.log('Is at churn risk:', result.result);
        console.log('✅ Churn risk rule completed');
    } catch (error) {
        console.error('❌ Churn risk rule failed:', error.message);
    }
}

/**
 * Upsell opportunity rule
 */
async function upsellOpportunityRule() {
    console.log('📈 Upsell Opportunity Rule...');

    try {
        const result = await datablit.rule.evalRule({
            key: 'upsell_opportunity',
            userId: 'user909',
            params: {
                plan: 'basic',
                usageCount: 80,
                featureUsage: {
                    advanced_search: 25,
                    export_data: 15,
                    custom_reports: 0
                },
                accountAge: 180,
                totalSpent: 500
            }
        });

        console.log('Is upsell opportunity:', result.result);
        console.log('✅ Upsell opportunity rule completed');
    } catch (error) {
        console.error('❌ Upsell opportunity rule failed:', error.message);
    }
}

// ============================================================================
// BATCH RULE EVALUATION
// ============================================================================

/**
 * Evaluate multiple rules for a single user
 */
async function batchRuleEvaluation() {
    console.log('📦 Batch Rule Evaluation...');

    const userId = 'batch_user_123';
    const userParams = {
        plan: 'premium',
        location: 'US',
        device: 'mobile',
        os_name: 'android',
        usageCount: 75,
        accountAge: 90
    };

    try {
        // Evaluate multiple rules
        const rules = [
            { key: 'premium_user', description: 'Premium User' },
            { key: 'us_user', description: 'US User' },
            { key: 'mobile_user', description: 'Mobile User' },
            { key: 'show_premium_features', description: 'Show Premium Features' },
            { key: 'high_value_customer', description: 'High Value Customer' }
        ];

        const results = {};

        for (const rule of rules) {
            const result = await datablit.rule.evalRule({
                key: rule.key,
                userId: userId,
                params: userParams
            });

            results[rule.key] = {
                description: rule.description,
                result: result.result
            };
        }

        console.log('Batch rule evaluation results:');
        Object.entries(results).forEach(([key, value]) => {
            console.log(`  ${value.description}: ${value.result}`);
        });

        console.log('✅ Batch rule evaluation completed');
    } catch (error) {
        console.error('❌ Batch rule evaluation failed:', error.message);
    }
}

// ============================================================================
// ERROR HANDLING EXAMPLES
// ============================================================================

/**
 * Handle rule evaluation errors
 */
async function errorHandlingExamples() {
    console.log('⚠️ Error Handling Examples...');

    // Test with invalid rule key
    try {
        await datablit.rule.evalRule({
            key: 'non_existent_rule',
            userId: 'user123'
        });
    } catch (error) {
        console.log('Expected error for non-existent rule:', error.message);
    }

    // Test with invalid API key
    try {
        const tempRule = new (await import('@datablit/datablit-js')).Rule();
        tempRule.setApiKey('invalid-key');
        await tempRule.evalRule({
            key: 'test_rule',
            userId: 'user123'
        });
    } catch (error) {
        console.log('Expected error for invalid API key:', error.message);
    }

    // Test with missing required parameters
    try {
        await datablit.rule.evalRule({
            key: 'fer'
            // Missing userId
        });
    } catch (error) {
        console.log('Expected error for missing userId:', error.message);
    }

    console.log('✅ Error handling examples completed');
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

/**
 * Run all rules examples
 */
async function runRulesExamples() {
    console.log('🔍 Datablit Rules Examples\n');
    console.log('='.repeat(50));

    // Initialize SDK
    try {
        await datablit.init({
            apiKey: 'your-api-key-here',
            apiBaseURL: 'https://console.datablit.com'
        });
        console.log('✅ SDK initialized for rules examples');
    } catch (error) {
        console.error('❌ Failed to initialize SDK:', error.message);
        return;
    }

    // Run all rules examples
    await basicRuleEvaluation();
    await comprehensiveRuleEvaluation();

    await premiumUserSegmentation();
    await newUserSegmentation();
    await geographicSegmentation();
    await deviceSegmentation();

    await premiumFeatureFlag();
    await betaFeatureFlag();
    await abTestFeatureFlag();

    await highValueCustomerRule();
    await churnRiskRule();
    await upsellOpportunityRule();

    await batchRuleEvaluation();
    await errorHandlingExamples();

    console.log('\n' + '='.repeat(50));
    console.log('🎉 All rules examples completed!');
}

// Export functions for individual testing
export {
    basicRuleEvaluation,
    comprehensiveRuleEvaluation,
    premiumUserSegmentation,
    newUserSegmentation,
    geographicSegmentation,
    deviceSegmentation,
    premiumFeatureFlag,
    betaFeatureFlag,
    abTestFeatureFlag,
    highValueCustomerRule,
    churnRiskRule,
    upsellOpportunityRule,
    batchRuleEvaluation,
    errorHandlingExamples,
    runRulesExamples
};

// Run examples if this file is executed directly
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', runRulesExamples);
} else {
    runRulesExamples();
}
