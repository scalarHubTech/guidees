---
id: configure-your-price
title: Configure your price
sidebar_position: 3
---

## Overview

Configuring your price in ScalarHub involves setting up pricing plans that match your business structure. ScalarHub supports different pricing models, including one-time payments, subscriptions with recurring billing, and customizable billing cycles (monthly, quarterly, annual). Pricing is directly tied to subscriptions and is automatically handled for you, including invoicing, renewals, and billing cycle management.

## Key Features:

- **Flexible Billing Cycles**: ScalarHub empowers you to choose the billing cycle that best suits your business needs. Whether it's monthly, quarterly, or annually, the `SubscriptionService` class is there to calculate the due dates and renewal reminders for you.
- **Multiple Plans**: Create and manage pricing plans with associated features, tiers, and customer segments. The code handles the association of plans with subscriptions.
- **Automatic Billing and Renewals**: ScalarHub takes the hassle out of subscription management. Billing and renewals are automatically handled based on the selected plans and due dates.
- **Integration with Payments**: Although the code does not explicitly manage payment gateways, ScalarHub assumes external integration with payment systems to process transactions.

## Setting Up Your First Plan

### Step 1: Define Your Plan

Setting up your first pricing plan in ScalarHub is a straightforward process. It involves defining the features, pricing, and billing cycle your customers will follow. The following steps will guide you through the process:

1. **Log into ScalarHub**: Access the admin dashboard and go to the "Pricing" section.
2. **Create a New Plan**: Click "Create New Plan" and specify the following details:
   - **Plan Name**: Name your plan (e.g., "Basic", "Premium", "Enterprise").
   - **Billing Cycle**: Choose whether your customers will be billed monthly, quarterly, or annually.
   - **Features**: Specify the features included in the plan (e.g., usage limits, support levels).
   - **Price**: Set the price for the plan.
3. **Set Active Dates**: Define when the plan becomes active and expires.
4. **Save the Plan**: Once the plan is defined, save it to make it available to customers.

### Step 2: Associate with Subscription

Once the plan is set up, it needs to be linked to a subscription for your customers. The subscription automatically handles the billing cycle and renewals.

1. **Select the Plan**: Customers choose their desired plan during signup.
2. **Activate Subscription**: When a customer subscribes, the `create_subscription` method creates an active subscription, linking the customer to their selected plan.


## Additional Pricing Models

For a complete tour of the pricing levers available in the platform, check out the full guide on [managing your product catalog](https://docs.scalarhub.ai/guides/Plans%20and%20subscriptions/build-your-product-catalog).

Let's start using these plans to set up subscriptions for our customers!
