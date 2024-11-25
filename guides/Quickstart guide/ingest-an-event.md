---
id: ingest-an-event
title: Ingest an event
sidebar_position: 2
---

### What is an Event?

In ScalarHub, an event represents a significant action or activity performed by a user, customer, or system. Events are the building blocks of ScalarHub's analytics and billing processes. Each event captures detailed information about what happened, when it occurred, and who or what was involved.
Examples of events include:

- A customer signing up for a subscription.
- A user logging into their account.
- Usage activities, such as API requests or resource consumption.

### Types of Events

ScalarHub supports various event types grouped into categories for more straightforward implementation:

**Subscription Events:**
- **subscription_created**: Captures when a customer subscribes to a plan.
- **subscription_canceled**: Logs when a customer cancels their subscription.

**Usage Events:**
- **usage_reported**: Tracks resource usage, such as API calls or data consumption.
- **quota_exceeded**: Indicates when a customer exceeds their allocated quota.

**Billing Events:**
- **invoice_generated**: Logs the generation of a customer invoice.
- **payment_received**: Confirms that the fee for an invoice has been completed.

**Custom Events:** ScalarHub allows you to define custom events to fit unique use cases, using the `event_type` field for categorization.
 
