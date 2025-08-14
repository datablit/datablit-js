/**
 * @datablit/datablit-js - Analytics Examples
 * 
 * Comprehensive examples for analytics features including:
 * - User identification
 * - Event tracking
 * - Page tracking
 * - E-commerce tracking
 * - Custom events
 */

import datablit from '@datablit/datablit-js';

// ============================================================================
// USER IDENTIFICATION EXAMPLES
// ============================================================================

/**
 * Basic user identification
 */
function basicUserIdentification() {
    console.log('👤 Basic User Identification...');

    // Identify a user with basic traits
    datablit.identify('user123', {
        email: 'user@example.com',
        name: 'John Doe'
    });

    console.log('✅ Basic user identification completed');
}

/**
 * Advanced user identification with comprehensive traits
 */
function advancedUserIdentification() {
    console.log('👤 Advanced User Identification...');

    // Identify with comprehensive user traits
    datablit.identify('user456', {
        // Basic information
        email: 'jane@example.com',
        name: 'Jane Smith',
        firstName: 'Jane',
        lastName: 'Smith',

        // Account information
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

        // Business information
        company: 'Tech Corp',
        jobTitle: 'Product Manager',
        industry: 'Technology',

        // Custom traits
        isNewUser: false,
        hasCompletedOnboarding: true,
        preferredLanguage: 'en',
        timezone: 'America/Los_Angeles'
    });

    console.log('✅ Advanced user identification completed');
}

/**
 * Anonymous user identification
 */
function anonymousUserIdentification() {
    console.log('👤 Anonymous User Identification...');

    // Identify anonymous users (e.g., before login)
    datablit.identify('anonymous_123', {
        device: 'desktop',
        os: 'Windows',
        browser: 'Chrome',
        location: 'US',
        referrer: 'https://google.com',
        landingPage: '/home'
    });

    console.log('✅ Anonymous user identification completed');
}

// ============================================================================
// EVENT TRACKING EXAMPLES
// ============================================================================

/**
 * Page view tracking
 */
function pageViewTracking() {
    console.log('📄 Page View Tracking...');

    // Track page views
    datablit.track('Page Viewed', {
        page: '/dashboard',
        title: 'Dashboard',
        referrer: 'https://google.com',
        url: 'https://app.datablit.com/dashboard'
    });

    datablit.track('Page Viewed', {
        page: '/products',
        title: 'Products',
        referrer: '/dashboard',
        url: 'https://app.datablit.com/products'
    });

    console.log('✅ Page view tracking completed');
}

/**
 * User interaction tracking
 */
function userInteractionTracking() {
    console.log('🖱️ User Interaction Tracking...');

    // Button clicks
    datablit.track('Button Clicked', {
        buttonId: 'signup-button',
        buttonText: 'Sign Up',
        location: 'header',
        page: '/home'
    });

    datablit.track('Button Clicked', {
        buttonId: 'purchase-button',
        buttonText: 'Buy Now',
        location: 'product-card',
        page: '/products/123'
    });

    // Form interactions
    datablit.track('Form Started', {
        formId: 'contact-form',
        formType: 'contact',
        page: '/contact'
    });

    datablit.track('Form Submitted', {
        formId: 'contact-form',
        formType: 'contact',
        page: '/contact',
        formData: {
            hasName: true,
            hasEmail: true,
            hasMessage: true
        }
    });

    // Link clicks
    datablit.track('Link Clicked', {
        linkId: 'pricing-link',
        linkText: 'Pricing',
        linkUrl: '/pricing',
        page: '/home'
    });

    console.log('✅ User interaction tracking completed');
}

/**
 * E-commerce tracking
 */
function ecommerceTracking() {
    console.log('🛒 E-commerce Tracking...');

    // Product views
    datablit.track('Product Viewed', {
        productId: 'prod_123',
        productName: 'Premium Widget',
        category: 'electronics',
        brand: 'WidgetCo',
        price: 99.99,
        currency: 'USD',
        page: '/products/premium-widget'
    });

    // Add to cart
    datablit.track('Product Added to Cart', {
        productId: 'prod_123',
        productName: 'Premium Widget',
        price: 99.99,
        currency: 'USD',
        quantity: 1,
        cartId: 'cart_456'
    });

    // Purchase
    datablit.track('Purchase Completed', {
        orderId: 'order_789',
        productId: 'prod_123',
        productName: 'Premium Widget',
        amount: 99.99,
        currency: 'USD',
        paymentMethod: 'credit_card',
        shippingMethod: 'express',
        tax: 8.99,
        shipping: 5.99,
        discount: 10.00
    });

    // Refunds
    datablit.track('Refund Requested', {
        orderId: 'order_789',
        productId: 'prod_123',
        amount: 99.99,
        currency: 'USD',
        reason: 'defective_product'
    });

    console.log('✅ E-commerce tracking completed');
}

/**
 * Feature usage tracking
 */
function featureUsageTracking() {
    console.log('⚙️ Feature Usage Tracking...');

    // Feature activations
    datablit.track('Feature Used', {
        featureName: 'advanced_search',
        featureCategory: 'search',
        usageCount: 1,
        page: '/search'
    });

    datablit.track('Feature Used', {
        featureName: 'export_data',
        featureCategory: 'data',
        usageCount: 1,
        page: '/dashboard'
    });

    // Feature errors
    datablit.track('Feature Error', {
        featureName: 'advanced_search',
        errorType: 'timeout',
        errorMessage: 'Search request timed out',
        page: '/search'
    });

    console.log('✅ Feature usage tracking completed');
}

/**
 * Custom business events
 */
function customBusinessEvents() {
    console.log('🏢 Custom Business Events...');

    // User lifecycle events
    datablit.track('User Signed Up', {
        signupMethod: 'email',
        referrer: 'google_ads',
        campaign: 'summer_2024',
        page: '/signup'
    });

    datablit.track('User Upgraded', {
        fromPlan: 'basic',
        toPlan: 'premium',
        upgradeReason: 'feature_limit',
        page: '/pricing'
    });

    datablit.track('User Cancelled', {
        plan: 'premium',
        cancellationReason: 'too_expensive',
        page: '/account'
    });

    // Business metrics
    datablit.track('Revenue Generated', {
        amount: 299.99,
        currency: 'USD',
        source: 'subscription_upgrade',
        page: '/pricing'
    });

    console.log('✅ Custom business events completed');
}

// ============================================================================
// BATCH TRACKING EXAMPLES
// ============================================================================

/**
 * Track multiple events in sequence
 */
function batchEventTracking() {
    console.log('📦 Batch Event Tracking...');

    // Simulate user session
    const sessionId = 'session_' + Date.now();

    // Session start
    datablit.track('Session Started', {
        sessionId: sessionId,
        page: '/home',
        referrer: 'https://google.com'
    });

    // User actions during session
    datablit.track('Page Viewed', {
        sessionId: sessionId,
        page: '/products',
        title: 'Products'
    });

    datablit.track('Product Viewed', {
        sessionId: sessionId,
        productId: 'prod_123',
        productName: 'Premium Widget'
    });

    datablit.track('Button Clicked', {
        sessionId: sessionId,
        buttonId: 'add-to-cart',
        productId: 'prod_123'
    });

    datablit.track('Product Added to Cart', {
        sessionId: sessionId,
        productId: 'prod_123',
        quantity: 1
    });

    // Session end
    datablit.track('Session Ended', {
        sessionId: sessionId,
        duration: 300, // 5 minutes
        page: '/cart'
    });

    console.log('✅ Batch event tracking completed');
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

/**
 * Run all analytics examples
 */
async function runAnalyticsExamples() {
    console.log('📊 Datablit Analytics Examples\n');
    console.log('='.repeat(50));

    // Initialize SDK
    try {
        await datablit.init({
            apiKey: 'your-api-key-here',
            enablePageTracking: true,
            batchSize: 20,
            flushInterval: 30000
        });
        console.log('✅ SDK initialized for analytics examples');
    } catch (error) {
        console.error('❌ Failed to initialize SDK:', error.message);
        return;
    }

    // Run all analytics examples
    basicUserIdentification();
    advancedUserIdentification();
    anonymousUserIdentification();

    pageViewTracking();
    userInteractionTracking();
    ecommerceTracking();
    featureUsageTracking();
    customBusinessEvents();
    batchEventTracking();

    console.log('\n' + '='.repeat(50));
    console.log('🎉 All analytics examples completed!');
}

// Export functions for individual testing
export {
    basicUserIdentification,
    advancedUserIdentification,
    anonymousUserIdentification,
    pageViewTracking,
    userInteractionTracking,
    ecommerceTracking,
    featureUsageTracking,
    customBusinessEvents,
    batchEventTracking,
    runAnalyticsExamples
};

// Run examples if this file is executed directly
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', runAnalyticsExamples);
} else {
    runAnalyticsExamples();
}
