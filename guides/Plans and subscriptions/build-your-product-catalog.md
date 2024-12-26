---
id: build-your-product-catalog
title: Build your product catalog
sidebar_position: 1
---

ScalarHub streamlines subscription management by enabling you to design plans with flexible pricing models, manage multi-user support, and configure billing cycles. It offers a user-friendly interface to handle [subscriptions](https://docs.scalarhub.ai/guides/core-concepts#subscriptions), ensuring an efficient and organized approach to managing accounts and billing details.

## Plan
Plans form the core of the subscription catalog, allowing businesses to offer tailored subscription services. Each plan is defined by critical attributes like its name, description, pricing details, billing mode, and operational status (e.g., Active, Expired). Plans also include start and end dates, which determine their validity periods.

The system supports various plan types, such as **Starter**, **Pro**, and **Enterprise**, designed to cater to multiple customer needs, from small businesses to large enterprises. These plans offer distinct features and capacity limits to match the intended audience.

| Plan        | Description                                                     | Target Audience           |
|-------------|-----------------------------------------------------------------|---------------------------|
| **Starter** | A basic plan offering limited features with low capacity.       | Small businesses, startups |
| **Pro**     | A mid-tier plan with additional features and higher capacity.   | Growing businesses        |
| **Enterprise** | A premium plan with full features and high capacity limits.    | Large enterprises, corporations |             |

Each plan is tailored to meet the unique needs of its target audience, ensuring flexibility and scalability for businesses of all sizes.

### Component Prices
This section offers an in-depth look at the pricing structure for individual components within a subscription plan. It provides flexibility for managing costs and allocating features effectively.

Pricing Components include:
- **List Price**: The baseline price for a component, representing the amount before any discounts or adjustments. For example, the `list_price` in the subscription data field reflects this cost.
- **Effective Price**: The price billed after applying discounts, promotional adjustments, or custom pricing. This is derived from the `effective_price` field within the plan data.
- **Max Users**: The maximum number of users or seats permitted for a particular component. This value is represented by the `max_users` field within the plan details and governs the component allocation for your customers.
- **Billing Cycle**: The frequency with which charges are applied, such as monthly or annually. The `billing_cycle` field in the plan data captures this detail, ensuring customers are charged at the correct interval.

### Standard price models

| **Price Model** | **Description** | **Example** |
|-------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| **Standard Price Models**| Predefined pricing structures that offer standardized features and services across multiple plans. | Basic Plan: $29/month, Premium Plan: $79/month                   |
| **Features** | Functionalities such as dashboards for analytics, tax calculations, and transaction support. | Dashboards for analytics: $10/month, Tax calculations: $15/month, Transaction support: $20/month |
| **Usage Limits** | Predefined thresholds for usage, such as transaction limits or storage caps.                | 1,000 transactions/month: $10, 10GB storage: $5/month             |
| **Templates** | Ready-to-use templates for plans to reduce setup complexity.                                | Template Plan: $10/month for access to predefined features and layouts |


### Plan Phases
Plan Phases in ScalarHub APIs define a subscription's lifecycle and are pivotal for tracking and managing subscription statuses over time. Each plan undergoes phases such as Trial, Active, and Expired, each characterized by specific configurations and features. The Trial phase offers free or discounted usage to attract new users, while the Active phase enables regular billing and full feature access. The Expired phase indicates the plan's inactivity, often including optional grace periods for renewal.

To enhance user experience and transparency, ScalarHub APIs provide visual indicators like status badges (e.g., "Active" or "Expired") and countdowns displaying the remaining days for a given phase. These phases are dynamically calculated based on subscription details, including start date, end date, and billing cycle (monthly or annual). Specific features like feature restrictions during trials, pricing configurations, and maximum users allowed are also managed in each phase.

For subscriptions that reach the Expired phase, ScalarHub offers to guide users through renewing their subscriptions or seeking support. This page includes an intuitive interface with clear options, such as buttons to navigate to the pricing page for renewal or contact support via email or phone.

### Trail 
In Scalarhub, trial periods are an integral part of subscription plans, allowing users to explore services before committing to a full subscription. The trial phases are tailored to include key parameters such as duration and trial-specific features, ensuring a seamless user experience during the trial period. 

Trial configurations enable businesses to define the duration, such as 7 days, 14 days, or custom lengths, allowing flexibility based on business needs. Additionally, specific features can be activated exclusively for the trial phase, giving users a glimpse of the platform's capabilities. Visual indicators are incorporated to enhance usability and engagement, providing clear information about the trial status and expiration date. These indicators are designed for easy tracking by users and administrators, ensuring transparency.

By offering limited-time access without requiring a commitment, trials are a powerful tool for attracting potential customers. They create a low-risk opportunity for users to evaluate the platform's value while businesses gain a chance to convert trial users into long-term subscribers.  

## Billing cycle configuration
The Billing Cycle Configuration in ScalarHub offers flexible billing options tailored to various subscription models, including monthly, quarterly, and annual cycles. Subscription details, such as the billing cycle, are displayed prominently, enabling users to track their payment schedules easily.

The billing cycles work as follows:

- **Monthly**: Charges are made monthly, ensuring regular billing.
- **Quarterly**: Payments are made every three months, offering a more spaced-out billing option.
- **Annual**: A one-time payment is made for the whole year, ideal for long-term commitments.

Payment modes include:

- **In Advance**: Users are billed before the service period begins, ensuring upfront payment.
- **Due on Issue**: Payments are made at the end of the billing cycle, typically after the service is rendered.

Advanced options support:

- **Multi-User Subscriptions**: These cover teams or organizations with a single subscription for multiple users.
- **Net Terms**: Provides payment flexibility with extended deadlines for clients under specific terms.

This structure is supported by ScalarHub, which displays critical information about the user's plan, including the billing cycle type, price, and subscription status. This helps users understand when their next payment is due and facilitates subscription management. The system ensures that a subscription cannot be created without a valid plan and assigns appropriate attributes, like the billing cycle, to the subscription model.

### Invoicing cycle configuration

Scalarhub’s invoicing cycle configuration defines how subscriptions are billed and managed. The system supports two main billing cycles: **ANNUAL** and **MONTHLY**. The **ANNUAL** cycle sets the subscription’s **end date** and **due date** to one year from the **start date**, while the **MONTHLY** cycle sets them one month from the **start date**. Subscriptions are automatically marked as **ACTIVE** and associated with the respective account upon creation.

**Values**:  
- **Billing Cycles**: ANNUAL, MONTHLY  
- **End Date**: 1 year (ANNUAL), 1 month (MONTHLY)  
- **Due Date**: 1 year (ANNUAL), 1 month (MONTHLY)  
- **Subscription Status**: ACTIVE  

This configuration allows flexible billing, ensuring that subscriptions remain active and are renewed based on the selected cycle, while offering transparency for users to track their subscription status and renewal dates.