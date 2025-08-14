# @datablit/datablit-js Examples

This directory contains comprehensive examples demonstrating all features of the Datablit JavaScript SDK.

## 📁 Example Files

### 🎯 `index.js` - Complete SDK Usage

**Main example file with all features**

- Initialization and configuration
- Analytics (user identification, event tracking)
- Rules evaluation
- Experiment variant assignment
- Error handling
- Complete user journey example

**Usage:**

```bash
# Run all examples
node examples/index.js

# Or in browser
<script src="examples/index.js"></script>
```

### 📊 `analytics.js` - Analytics Features

**Comprehensive analytics examples**

- User identification (basic, advanced, anonymous)
- Event tracking (page views, user interactions, e-commerce)
- Feature usage tracking
- Custom business events
- Batch event tracking

**Usage:**

```bash
# Run analytics examples only
node examples/analytics.js
```

### 🔍 `rules.js` - Rule Evaluation

**Complete rule evaluation examples**

- Basic rule evaluation
- User segmentation (premium, new user, geographic, device)
- Feature flags (premium, beta, A/B testing)
- Business logic (high value customer, churn risk, upsell)
- Batch rule evaluation
- Error handling

**Usage:**

```bash
# Run rules examples only
node examples/rules.js
```

### 🧪 `experiments.js` - Experiment Variants

**Comprehensive experiment examples**

- Basic variant assignment
- A/B testing scenarios (button color, pricing, landing page)
- Feature flag experiments
- Multi-variant experiments
- Batch variant assignment
- Integration with analytics
- Error handling

**Usage:**

```bash
# Run experiments examples only
node examples/experiments.js
```

## 🚀 Quick Start

### 1. Install the SDK

```bash
npm install @datablit/datablit-js
```

### 2. Run Examples

```bash
# Run all examples
node examples/index.js

# Run specific feature examples
node examples/analytics.js
node examples/rules.js
node examples/experiments.js
```

### 3. Browser Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Datablit SDK Examples</title>
  </head>
  <body>
    <h1>Check console for example output</h1>

    <!-- Include the SDK -->
    <script src="node_modules/@datablit/datablit-js/dist/index.global.js"></script>

    <!-- Include examples -->
    <script src="examples/index.js"></script>
  </body>
</html>
```

## 📋 Example Categories

### Analytics Examples

- **User Identification**: Basic, advanced, and anonymous user identification
- **Event Tracking**: Page views, user interactions, e-commerce, feature usage
- **Custom Events**: Business-specific events and metrics
- **Batch Tracking**: Multiple events in sequence

### Rules Examples

- **Basic Evaluation**: Simple rule evaluation with minimal parameters
- **User Segmentation**: Premium users, new users, geographic, device-based
- **Feature Flags**: Premium features, beta features, A/B testing
- **Business Logic**: High value customers, churn risk, upsell opportunities
- **Batch Evaluation**: Multiple rules for single user

### Experiments Examples

- **Basic Assignment**: Simple variant assignment
- **A/B Testing**: Button colors, pricing, landing pages
- **Feature Flags**: On/off flags and gradual rollouts
- **Multi-Variant**: Complex experiments with multiple variants
- **Batch Assignment**: Multiple users and experiments
- **Integration**: Combining experiments with analytics

## 🔧 Configuration

All examples use the following configuration:

```javascript
await datablit.init({
  apiKey: "your-api-key-here",
  enablePageTracking: true,
  batchSize: 20,
  flushInterval: 30000,
  apiBaseURL: "https://console.datablit.com", // Optional
});
```

## 🛠️ Customization

### Update API Keys

Replace `'your-api-key-here'` with your actual API key in each example file.

### Change Endpoints

Update `apiBaseURL` to point to your environment:

- **Production**: `https://console.datablit.com`
- **Staging**: `https://staging-console.datablit.com`
- **Development**: `https://dev-console.datablit.com`

### Modify Examples

Each example function is exported and can be imported individually:

```javascript
import { basicRuleEvaluation, trackEvents } from "./examples/rules.js";

// Use individual functions
await basicRuleEvaluation();
trackEvents();
```

## 📝 Output

All examples include:

- ✅ Success messages with emojis
- ❌ Error messages with details
- 📊 Console output for debugging
- 🔍 Detailed logging of API responses

## 🎯 Best Practices

1. **Error Handling**: All examples include proper try-catch blocks
2. **Async/Await**: Proper handling of asynchronous operations
3. **Type Safety**: Full TypeScript support with proper interfaces
4. **Modular Design**: Each feature is demonstrated separately
5. **Real-world Scenarios**: Examples based on actual use cases

## 🔗 Related Documentation

- [Main README](../README.md) - SDK documentation and API reference
- [Package.json](../package.json) - Dependencies and build configuration
- [Source Code](../src/) - SDK implementation details
