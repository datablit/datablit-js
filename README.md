# @datablit/datablit-js

A comprehensive JavaScript SDK for Datablit analytics, rules, and experiments.

## Installation

```bash
npm install @datablit/datablit-js
```

## Quick Start

```javascript
import datablit from "@datablit/datablit-js";

// Initialize the SDK
await datablit.init({
  apiKey: "your-api-key-here",
});

// Track events
datablit.track("Button Clicked", { buttonId: "signup-button" });

// Identify users
datablit.identify("user123", { email: "user@example.com", plan: "premium" });

// Evaluate rules
const ruleResult = await datablit.rule.evalRule("fer", "1", {
  os_name: "android",
});

console.log("Rule result:", ruleResult); // true or false

// Get experiment variant
const variant = await datablit.experiment.getVariant(
  "01K2JKVXR0J0ZWPX40XY8CAWBS",
  "1"
);

console.log("Variant:", variant); // "control", "variant_a", etc.
```

## Features

### Analytics

- **Event Tracking**: Track user interactions and custom events
- **User Identification**: Associate events with specific users
- **Automatic Page Tracking**: Automatically track page views
- **Batch Processing**: Efficient event batching and retry logic
- **Offline Support**: Events are queued locally when offline

### Rules

- **Rule Evaluation**: Evaluate rules against user context in real-time
- **Context-based Decisions**: Make dynamic decisions based on user attributes

### Experiments

- **A/B Testing**: Get experiment variants for users
- **Context-aware Assignment**: Assign variants based on user context
- **Statistical Analysis**: Built-in support for experiment analysis

## API Reference

### Initialization

```javascript
await datablit.init({
  apiKey: string,                    // Required: Your Datablit API key
  endpoint?: string,                 // Optional: Custom event endpoint
  batchSize?: number,               // Optional: Events per batch (default: 20)
  flushInterval?: number,           // Optional: Flush interval in ms (default: 30000)
  enablePageTracking?: boolean,     // Optional: Auto-track page views (default: false)
  apiBaseURL?: string              // Optional: Custom API base URL for rules/experiments
});
```

### Analytics Methods

#### `datablit.track(eventName, properties)`

Track a custom event.

```javascript
datablit.track("Purchase Completed", {
  productId: "prod_123",
  amount: 99.99,
  currency: "USD",
});
```

#### `datablit.identify(userId, traits)`

Identify a user with traits.

```javascript
datablit.identify("user123", {
  email: "user@example.com",
  name: "John Doe",
  plan: "premium",
});
```

### Rules API

Access rules functionality through `datablit.rule`:

#### `datablit.rule.evalRule(key, userId, params?)`

Evaluate a rule for a given user and context. Returns a boolean indicating the evaluation result.

```javascript
const ruleResult = await datablit.rule.evalRule("fer", "1", {
  os_name: "android",
});

if (ruleResult) {
  console.log("Rule evaluated to true");
} else {
  console.log("Rule evaluated to false");
}
```

### Experiments API

Access experiments functionality through `datablit.experiment`:

#### `datablit.experiment.getVariant(expId, entityId)`

Get experiment variant for a user. Returns the variant string assigned to the entity.

```javascript
const variant = await datablit.experiment.getVariant(
  "01K2JKVXR0J0ZWPX40XY8CAWBS",
  "1"
);

console.log("User is in variant:", variant); // "control", "variant_a", etc.
```

## Advanced Usage

### Error Handling

The SDK provides comprehensive error handling:

```javascript
try {
  const ruleResult = await datablit.rule.evalRule("fer", "1");
} catch (error) {
  console.error("Failed to evaluate rules:", error.message);
}

try {
  const variant = await datablit.experiment.getVariant(
    "01K2JKVXR0J0ZWPX40XY8CAWBS",
    "1"
  );
} catch (error) {
  console.error("Failed to get variant:", error.message);
}

try {
  datablit.track("Event", { data: "value" });
} catch (error) {
  console.error("Failed to track event:", error.message);
}
```

## Architecture

The SDK is built with a modular architecture:

```
src/
├── index.ts          # Main entry point and exports
├── types.ts          # TypeScript type definitions
├── base-api.ts       # Base API class for HTTP requests
├── datablit.ts       # Main Datablit analytics class
├── rule.ts           # Rule evaluation functionality
└── experiment.ts     # Experiment variant assignment
```

## Configuration

### Endpoints

- **Analytics Events**: `https://event.datablit.com/v1/batch`
- **Rules & Experiments**: `https://console.datablit.com/api/1.0/*` (default)
  - Can be customized via `apiBaseURL` configuration

### API Key Authentication

The API key is sent in the request headers:

- Analytics: `apiKey` header
- Rules/Experiments: `apiKey` header

### Browser Support

The SDK supports all modern browsers and includes:

- ES6+ features
- Fetch API
- LocalStorage
- User Agent Data API (when available)

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## License

MIT License - see LICENSE file for details.

## Support

For support and questions, please contact support@datablit.com or visit our documentation at https://datablit.com/docs
