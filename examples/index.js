/**
 * @datablit/datablit-js - Complete Usage Examples
 * 
 * This file demonstrates all features of the Datablit JavaScript SDK
 * including analytics, rules, and experiments with proper error handling.
 */

import datablit from '@datablit/datablit-js';

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the SDK with different configurations
 */
async function initializeSDK() {
    console.log('🚀 Initializing Datablit SDK...');

    try {
        // Basic initialization
        await datablit.init({
            apiKey: 'your-api-key-here',
            enablePageTracking: true,
            batchSize: 20,
            flushInterval: 30000,
            apiBaseURL: 'https://console.datablit.com' // Optional: Custom API base URL
        });

        console.log('✅ SDK initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Failed to initialize SDK:', error.message);
        return false;
    }
}

// ============================================================================
// ANALYTICS - USER IDENTIFICATION
// ============================================================================

/**
 * Identify users with traits
 */
function identifyUsers() {
    console.log('\n👤 User Identification Examples...');

    try {
        // Basic user identification
        datablit.identify('user123', {
            email: 'user@example.com',
            name: 'John Doe',
            plan: 'premium',
            signupDate: '2024-01-15'
        });

        // Identify with additional traits
        datablit.identify('user456', {
            email: 'jane@example.com',
            name: 'Jane Smith',
            plan: 'basic',
            location: 'US',
            device: 'mobile',
            isNewUser: true
        });

        console.log('✅ Users identified successfully');
    } catch (error) {
        console.error('❌ Failed to identify users:', error.message);
    }
}

// ============================================================================
// ANALYTICS - EVENT TRACKING
// ============================================================================

/**
 * Track various types of events
 */
function trackEvents() {
    console.log('\n📊 Event Tracking Examples...');

    try {
        // Page view events
        datablit.track('Page Viewed', {
            page: '/dashboard',
            referrer: 'https://google.com',
            title: 'Dashboard'
        });

        // User interaction events
        datablit.track('Button Clicked', {
            buttonId: 'signup-button',
            location: 'header',
            page: '/home'
        });

        datablit.track('Form Submitted', {
            formId: 'contact-form',
            formType: 'contact',
            page: '/contact'
        });

        // E-commerce events
        datablit.track('Product Viewed', {
            productId: 'prod_123',
            productName: 'Premium Widget',
            category: 'electronics',
            price: 99.99,
            currency: 'USD'
        });

        datablit.track('Purchase Completed', {
            orderId: 'order_456',
            productId: 'prod_123',
            amount: 99.99,
            currency: 'USD',
            paymentMethod: 'credit_card'
        });

        // Feature usage events
        datablit.track('Feature Used', {
            featureName: 'advanced_search',
            featureCategory: 'search',
            usageCount: 1
        });

        console.log('✅ Events tracked successfully');
    } catch (error) {
        console.error('❌ Failed to track events:', error.message);
    }
}

// ============================================================================
// RULES - EVALUATION
// ============================================================================

/**
 * Evaluate rules for different scenarios
 */
async function evaluateRules() {
    console.log('\n🔍 Rule Evaluation Examples...');

    try {
        // Basic rule evaluation
        const basicRule = await datablit.rule.evalRule(
            'fer',
            'user123',
            {
                os_name: 'android'
            }
        );

        console.log('Basic rule result:', basicRule);

        // Premium user rule
        const premiumRule = await datablit.rule.evalRule(
            'premium_user',
            'user123',
            {
                plan: 'premium',
                location: 'US',
                device: 'mobile',
                isLoggedIn: true,
                lastLoginDate: '2024-01-20'
            }
        );

        console.log('Premium user rule result:', premiumRule);

        // New user rule
        const newUserRule = await datablit.rule.evalRule(
            'new_user',
            'user456',
            {
                signupDate: '2024-01-15',
                isNewUser: true,
                location: 'CA'
            }
        );

        console.log('New user rule result:', newUserRule);

        // High value customer rule
        const highValueRule = await datablit.rule.evalRule(
            'high_value_customer',
            'user789',
            {
                totalSpent: 5000,
                orderCount: 25,
                plan: 'premium',
                location: 'US'
            }
        );

        console.log('High value customer rule result:', highValueRule);

        console.log('✅ Rules evaluated successfully');
    } catch (error) {
        console.error('❌ Failed to evaluate rules:', error.message);
    }
}

// ============================================================================
// EXPERIMENTS - VARIANT ASSIGNMENT
// ============================================================================

/**
 * Get experiment variants for different users
 */
async function getExperimentVariants() {
    console.log('\n🧪 Experiment Variant Examples...');

    try {
        // Button color experiment
        const buttonExperiment = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user123'
        );

        console.log('Button color experiment:', buttonExperiment);

        // Pricing experiment
        const pricingExperiment = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user456'
        );

        console.log('Pricing experiment:', pricingExperiment);

        // Feature flag experiment
        const featureExperiment = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user789'
        );

        console.log('Feature flag experiment:', featureExperiment);

        console.log('✅ Experiment variants retrieved successfully');
    } catch (error) {
        console.error('❌ Failed to get experiment variants:', error.message);
    }
}

// ============================================================================
// INTEGRATED EXAMPLES
// ============================================================================

/**
 * Complete user journey example
 */
async function completeUserJourney() {
    console.log('\n🛤️ Complete User Journey Example...');

    const userId = 'journey_user_123';

    try {
        // 1. Identify the user
        datablit.identify(userId, {
            email: 'journey@example.com',
            name: 'Journey User',
            plan: 'premium',
            location: 'US'
        });

        // 2. Track page view
        datablit.track('Page Viewed', {
            page: '/product-page',
            productId: 'prod_123'
        });

        // 3. Evaluate rules for personalization
        const personalizationRule = await datablit.rule.evalRule(
            'show_premium_features',
            userId,
            {
                plan: 'premium',
                location: 'US'
            }
        );

        // 4. Get experiment variant
        const expId = '01K2JKVXR0J0ZWPX40XY8CAWBS';
        const experimentVariant = await datablit.experiment.getVariant(expId, userId);

        // 5. Track user actions based on rules and experiments
        if (personalizationRule) {
            datablit.track('Premium Feature Shown', {
                feature: 'advanced_search',
                userId: userId
            });
        }

        if (experimentVariant === 'variant_a') {
            datablit.track('Experiment Variant A Shown', {
                experimentId: expId,
                userId: userId
            });
        }

        // 6. Track conversion
        datablit.track('Purchase Completed', {
            orderId: 'order_789',
            amount: 149.99,
            currency: 'USD',
            userId: userId
        });

        console.log('✅ Complete user journey tracked successfully');
    } catch (error) {
        console.error('❌ Failed to complete user journey:', error.message);
    }
}

// ============================================================================
// ERROR HANDLING EXAMPLES
// ============================================================================

/**
 * Demonstrate proper error handling
 */
async function errorHandlingExamples() {
    console.log('\n⚠️ Error Handling Examples...');

    // Handle initialization errors
    try {
        await datablit.init({
            apiKey: 'invalid-key',
            apiBaseURL: 'https://invalid-endpoint.com'
        });
    } catch (error) {
        console.log('Expected initialization error:', error.message);
    }

    // Handle rule evaluation errors
    try {
        await datablit.rule.evalRule('non_existent_rule', 'user123');
    } catch (error) {
        console.log('Expected rule evaluation error:', error.message);
    }

    // Handle experiment errors
    try {
        await datablit.experiment.getVariant('invalid_experiment_id', 'user123');
    } catch (error) {
        console.log('Expected experiment error:', error.message);
    }

    console.log('✅ Error handling examples completed');
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

/**
 * Run all examples
 */
async function runAllExamples() {
    console.log('🎯 Datablit SDK - Complete Examples\n');
    console.log('='.repeat(50));

    // Initialize SDK
    const initialized = await initializeSDK();
    if (!initialized) {
        console.error('❌ Cannot proceed without SDK initialization');
        return;
    }

    // Run all examples
    identifyUsers();
    trackEvents();
    await evaluateRules();
    await getExperimentVariants();
    await completeUserJourney();
    await errorHandlingExamples();

    console.log('\n' + '='.repeat(50));
    console.log('🎉 All examples completed successfully!');
}

// Export functions for individual testing
export {
    initializeSDK,
    identifyUsers,
    trackEvents,
    evaluateRules,
    getExperimentVariants,
    completeUserJourney,
    errorHandlingExamples,
    runAllExamples
};

// Run examples if this file is executed directly
if (typeof window !== 'undefined') {
    // Browser environment
    window.addEventListener('DOMContentLoaded', runAllExamples);
} else {
    // Node.js environment
    runAllExamples();
}
