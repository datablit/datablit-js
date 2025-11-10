/**
 * @datablit/datablit-js - Experiments Examples
 * 
 * Comprehensive examples for experiment variant assignment including:
 * - Basic variant assignment
 * - A/B testing scenarios
 * - Feature flag experiments
 * - Multi-variant experiments
 * - Error handling
 */

import datablit from '@datablit/datablit-js';

// ============================================================================
// BASIC VARIANT ASSIGNMENT
// ============================================================================

/**
 * Basic experiment variant assignment
 */
async function basicVariantAssignment() {
    console.log('🧪 Basic Variant Assignment...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user123'
        );

        console.log('Assigned variant:', variant);

        console.log('✅ Basic variant assignment completed');
    } catch (error) {
        console.error('❌ Basic variant assignment failed:', error.message);
    }
}

/**
 * Variant assignment with different entity types
 */
async function differentEntityTypes() {
    console.log('🧪 Different Entity Types...');

    try {
        // User-based experiment
        const userVariant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user123'
        );

        // Session-based experiment
        const sessionVariant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'session_456'
        );

        // Device-based experiment
        const deviceVariant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'device_789'
        );

        console.log('User variant:', userVariant);
        console.log('Session variant:', sessionVariant);
        console.log('Device variant:', deviceVariant);

        console.log('✅ Different entity types completed');
    } catch (error) {
        console.error('❌ Different entity types failed:', error.message);
    }
}

// ============================================================================
// A/B TESTING SCENARIOS
// ============================================================================

/**
 * Button color A/B test
 */
async function buttonColorABTest() {
    console.log('🎨 Button Color A/B Test...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user123'
        );

        // Apply variant based on assignment
        switch (variant) {
            case 'control':
                console.log('Showing blue button (control)');
                // applyBlueButton();
                break;
            case 'variant_a':
                console.log('Showing green button (variant A)');
                // applyGreenButton();
                break;
            case 'variant_b':
                console.log('Showing red button (variant B)');
                // applyRedButton();
                break;
            default:
                console.log('Showing default button');
            // applyDefaultButton();
        }

        console.log('✅ Button color A/B test completed');
    } catch (error) {
        console.error('❌ Button color A/B test failed:', error.message);
    }
}

/**
 * Pricing A/B test
 */
async function pricingABTest() {
    console.log('💰 Pricing A/B Test...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user456'
        );

        // Apply pricing based on variant
        switch (variant) {
            case 'control':
                console.log('Showing original pricing ($99/month)');
                // showOriginalPricing();
                break;
            case 'variant_a':
                console.log('Showing discounted pricing ($79/month)');
                // showDiscountedPricing();
                break;
            case 'variant_b':
                console.log('Showing premium pricing ($129/month)');
                // showPremiumPricing();
                break;
            default:
                console.log('Showing default pricing');
            // showDefaultPricing();
        }

        console.log('✅ Pricing A/B test completed');
    } catch (error) {
        console.error('❌ Pricing A/B test failed:', error.message);
    }
}

/**
 * Landing page A/B test
 */
async function landingPageABTest() {
    console.log('🏠 Landing Page A/B Test...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user789'
        );

        // Apply landing page variant
        switch (variant) {
            case 'control':
                console.log('Showing original landing page');
                // showOriginalLandingPage();
                break;
            case 'variant_a':
                console.log('Showing new landing page with video');
                // showVideoLandingPage();
                break;
            case 'variant_b':
                console.log('Showing new landing page with testimonials');
                // showTestimonialsLandingPage();
                break;
            default:
                console.log('Showing default landing page');
            // showDefaultLandingPage();
        }

        console.log('✅ Landing page A/B test completed');
    } catch (error) {
        console.error('❌ Landing page A/B test failed:', error.message);
    }
}

// ============================================================================
// FEATURE FLAG EXPERIMENTS
// ============================================================================

/**
 * Feature flag experiment
 */
async function featureFlagExperiment() {
    console.log('🚩 Feature Flag Experiment...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user101'
        );

        // Enable/disable features based on variant
        if (variant === 'control') {
            console.log('Feature flag: OFF (control group)');
            // disableNewFeature();
        } else {
            console.log('Feature flag: ON (treatment group)');
            // enableNewFeature();
        }

        console.log('✅ Feature flag experiment completed');
    } catch (error) {
        console.error('❌ Feature flag experiment failed:', error.message);
    }
}

/**
 * Gradual feature rollout
 */
async function gradualFeatureRollout() {
    console.log('📈 Gradual Feature Rollout...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user202'
        );

        // Gradual rollout based on variant
        switch (variant) {
            case 'control':
                console.log('New feature: 0% rollout (control)');
                // showOldFeature();
                break;
            case 'variant_a':
                console.log('New feature: 25% rollout');
                // showNewFeature();
                break;
            case 'variant_b':
                console.log('New feature: 50% rollout');
                // showNewFeature();
                break;
            case 'variant_c':
                console.log('New feature: 75% rollout');
                // showNewFeature();
                break;
            case 'variant_d':
                console.log('New feature: 100% rollout');
                // showNewFeature();
                break;
            default:
                console.log('New feature: default rollout');
            // showDefaultFeature();
        }

        console.log('✅ Gradual feature rollout completed');
    } catch (error) {
        console.error('❌ Gradual feature rollout failed:', error.message);
    }
}

// ============================================================================
// MULTI-VARIANT EXPERIMENTS
// ============================================================================

/**
 * Multi-variant experiment
 */
async function multiVariantExperiment() {
    console.log('🔬 Multi-Variant Experiment...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user303'
        );

        // Handle multiple variants
        const variantConfig = {
            control: {
                name: 'Control',
                description: 'Original version',
                config: { theme: 'default', layout: 'standard' }
            },
            variant_a: {
                name: 'Variant A',
                description: 'New theme',
                config: { theme: 'modern', layout: 'standard' }
            },
            variant_b: {
                name: 'Variant B',
                description: 'New layout',
                config: { theme: 'default', layout: 'compact' }
            },
            variant_c: {
                name: 'Variant C',
                description: 'New theme + layout',
                config: { theme: 'modern', layout: 'compact' }
            }
        };

        const selectedVariant = variantConfig[variant] || variantConfig.control;
        console.log(`Selected variant: ${selectedVariant.name} - ${selectedVariant.description}`);
        console.log('Variant config:', selectedVariant.config);

        console.log('✅ Multi-variant experiment completed');
    } catch (error) {
        console.error('❌ Multi-variant experiment failed:', error.message);
    }
}

/**
 * Email subject line experiment
 */
async function emailSubjectLineExperiment() {
    console.log('📧 Email Subject Line Experiment...');

    try {
        const variant = await datablit.experiment.getVariant(
            '01K2JKVXR0J0ZWPX40XY8CAWBS',
            'user404'
        );

        // Email subject lines for different variants
        const subjectLines = {
            control: 'Welcome to our platform!',
            variant_a: '🚀 Boost your productivity today!',
            variant_b: 'Join 10,000+ satisfied customers',
            variant_c: 'Limited time offer - 50% off!',
            variant_d: 'Your success story starts here'
        };

        const subjectLine = subjectLines[variant] || subjectLines.control;
        console.log(`Email subject line: "${subjectLine}"`);

        console.log('✅ Email subject line experiment completed');
    } catch (error) {
        console.error('❌ Email subject line experiment failed:', error.message);
    }
}

// ============================================================================
// BATCH VARIANT ASSIGNMENT
// ============================================================================

/**
 * Assign variants to multiple users
 */
async function batchVariantAssignment() {
    console.log('📦 Batch Variant Assignment...');

    try {
        const userIds = ['user505', 'user606', 'user707', 'user808', 'user909'];
        const results = {};

        // Assign variants to multiple users
        for (const userId of userIds) {
            const variant = await datablit.experiment.getVariant(
                '01K2JKVXR0J0ZWPX40XY8CAWBS',
                userId
            );

            results[userId] = variant;
        }

        console.log('Batch variant assignment results:');
        Object.entries(results).forEach(([userId, variant]) => {
            console.log(`  ${userId}: ${variant}`);
        });

        // Count variant distribution
        const distribution = {};
        Object.values(results).forEach(variant => {
            distribution[variant] = (distribution[variant] || 0) + 1;
        });

        console.log('Variant distribution:', distribution);

        console.log('✅ Batch variant assignment completed');
    } catch (error) {
        console.error('❌ Batch variant assignment failed:', error.message);
    }
}

/**
 * Multiple experiments for single user
 */
async function multipleExperimentsForUser() {
    console.log('🔬 Multiple Experiments for Single User...');

    try {
        const userId = 'multi_exp_user_123';
        const experiments = [
            { expId: '01K2JKVXR0J0ZWPX40XY8CAWBS', name: 'Button Color' },
            { expId: '01K2JKVXR0J0ZWPX40XY8CAWBS', name: 'Pricing' },
            { expId: '01K2JKVXR0J0ZWPX40XY8CAWBS', name: 'Feature Flag' }
        ];

        const results = {};

        // Get variants for multiple experiments
        for (const experiment of experiments) {
            const variant = await datablit.experiment.getVariant(
                experiment.expId,
                userId
            );

            results[experiment.name] = variant;
        }

        console.log('Multiple experiment results:');
        Object.entries(results).forEach(([experimentName, variant]) => {
            console.log(`  ${experimentName}: ${variant}`);
        });

        console.log('✅ Multiple experiments completed');
    } catch (error) {
        console.error('❌ Multiple experiments failed:', error.message);
    }
}

// ============================================================================
// ERROR HANDLING EXAMPLES
// ============================================================================

/**
 * Handle experiment errors
 */
async function errorHandlingExamples() {
    console.log('⚠️ Error Handling Examples...');

    // Test with invalid experiment ID
    try {
        await datablit.experiment.getVariant('invalid_experiment_id', 'user123');
    } catch (error) {
        console.log('Expected error for invalid experiment ID:', error.message);
    }

    // Test with invalid API key
    try {
        const tempExperiment = new (await import('@datablit/datablit-js')).Experiment();
        tempExperiment.setApiKey('invalid-key');
        await tempExperiment.getVariant('01K2JKVXR0J0ZWPX40XY8CAWBS', 'user123');
    } catch (error) {
        console.log('Expected error for invalid API key:', error.message);
    }

    // Test with missing required parameters
    try {
        await datablit.experiment.getVariant('01K2JKVXR0J0ZWPX40XY8CAWBS');
    } catch (error) {
        console.log('Expected error for missing entityId:', error.message);
    }

    console.log('✅ Error handling examples completed');
}

// ============================================================================
// INTEGRATION EXAMPLES
// ============================================================================

/**
 * Integrate experiments with analytics
 */
async function integrateWithAnalytics() {
    console.log('🔗 Integrate with Analytics...');

    const userId = 'integration_user_123';

    try {
        // 1. Identify the user
        datablit.identify(userId, {
            email: 'integration@example.com',
            plan: 'premium'
        });

        // 2. Get experiment variant
        const expId = '01K2JKVXR0J0ZWPX40XY8CAWBS';
        const variant = await datablit.experiment.getVariant(expId, userId);

        // 3. Track experiment exposure
        datablit.track('Experiment Viewed', {
            experimentId: expId,
            variant: variant,
            userId: userId
        });

        // 4. Track user actions based on variant
        if (variant === 'variant_a') {
            datablit.track('New Feature Used', {
                feature: 'enhanced_search',
                experimentId: expId,
                variant: variant,
                userId: userId
            });
        }

        // 5. Track conversion
        datablit.track('Purchase Completed', {
            orderId: 'order_123',
            amount: 99.99,
            experimentId: expId,
            variant: variant,
            userId: userId
        });

        console.log('✅ Integration with analytics completed');
    } catch (error) {
        console.error('❌ Integration with analytics failed:', error.message);
    }
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

/**
 * Run all experiments examples
 */
async function runExperimentsExamples() {
    console.log('🧪 Datablit Experiments Examples\n');
    console.log('='.repeat(50));

    // Initialize SDK
    try {
        await datablit.init({
            apiKey: 'your-api-key-here',
            apiBaseURL: 'https://console.datablit.com'
        });
        console.log('✅ SDK initialized for experiments examples');
    } catch (error) {
        console.error('❌ Failed to initialize SDK:', error.message);
        return;
    }

    // Run all experiments examples
    await basicVariantAssignment();
    await differentEntityTypes();

    await buttonColorABTest();
    await pricingABTest();
    await landingPageABTest();

    await featureFlagExperiment();
    await gradualFeatureRollout();

    await multiVariantExperiment();
    await emailSubjectLineExperiment();

    await batchVariantAssignment();
    await multipleExperimentsForUser();

    await errorHandlingExamples();
    await integrateWithAnalytics();

    console.log('\n' + '='.repeat(50));
    console.log('🎉 All experiments examples completed!');
}

// Export functions for individual testing
export {
    basicVariantAssignment,
    differentEntityTypes,
    buttonColorABTest,
    pricingABTest,
    landingPageABTest,
    featureFlagExperiment,
    gradualFeatureRollout,
    multiVariantExperiment,
    emailSubjectLineExperiment,
    batchVariantAssignment,
    multipleExperimentsForUser,
    errorHandlingExamples,
    integrateWithAnalytics,
    runExperimentsExamples
};

// Run examples if this file is executed directly
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', runExperimentsExamples);
} else {
    runExperimentsExamples();
}
