---
id: creating-subscriptions
title: Creating Subscriptions
sidebar_position: 2
---

ScalarHub subscriptions represent a customer's recurring purchase of a service plan designed to cater to diverse business needs. These subscriptions streamline accessing ScalarHub's features and enable organizations to manage their usage effectively.

## Subscription Lifecycle

The subscription lifecycle provides clarity regarding critical dates, events, and the overall lifecycle of a subscription. This helps customers stay informed about their subscription status and billing schedules.

| **Component Prices** | **Term**                            | **Billing Period**                      |
|-----------------------|-------------------------------------|-----------------------------------------|
| **Monthly**           | Charges applied every month.       | Ensures regular billing on a monthly cycle. |
| **Quarterly**         | Payments made every three months.  | Spaced-out billing for medium-term commitments. |
| **Annual**            | One-time payment for the entire year. | Ideal for long-term subscription plans. |


The subscription status is essential in ensuring users are aware of their subscription's lifecycle.

| **Status**      | **Description**                                                                 |
|-----------------|---------------------------------------------------------------------------------|
| **Trial**       | A free or discounted usage period to attract new users. Offers limited features and duration. |
| **Active**      | Regular billing and full feature access. Subscription is in effect, and charges are applied. |
| **Expired**     | Indicates the plan's inactivity, typically after the subscription has ended. It may include grace periods for renewal. |


### Billing Cycle Alignment

ScalarHub provides a highly flexible framework for billing cycle configurations, catering to diverse customer preferences. With options for default and custom billing alignments, the platform ensures streamlined and predictable invoicing schedules. Below are key aspects of billing cycle alignment:

#### Default Billing Cycle

- **Anchor Date**: The 1st of each month.
- **Behavior**: Subscriptions default to billing on the 1st of each month, with prorated charges for partial periods.

**Example**:  
A subscription starting on **March 15, 2024**, with a monthly billing cycle:
- **Initial Period**: March 15 – March 31, 2024 (prorated)
- **Subsequent Periods**:  
  - April 1 – April 30, 2024  
  - May 1 – May 31, 2024  
  - and so on.


#### Custom Billing Cycle Anchor

Customers can define custom billing cycle anchor dates to suit their financial reporting or operational needs. This ensures invoices are consistently aligned with the desired schedule.

- **Flexible Start Dates**: Subscriptions can begin on any day of the month.
- **Proportional Proration**: If the start date falls mid-cycle, the first invoice includes prorated charges for the partial period.

**Example**:  
A subscription starting on **January 15, 2024**, with a **Quarterly Billing Cycle**:
- **Billing Periods**:  
  - January 15 – March 31, 2024  
  - April 1 – June 30, 2024  
  - July 1 – September 30, 2024  
- January 15 – January 31, 2024, Proration applies for the first invoice.

### Cancellation Policy

ScalarHub provides customers with flexible subscription cancellation options to suit their needs. Subscriptions can be canceled immediately or at the end of the current billing cycle. Eligibility for refunds or adjustments depends on the cancellation type, billing cycle, and the unused portion of the subscription.

| **Cancellation Type** | **Behavior**                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Immediate**          | Terminates the subscription instantly. ScalarHub's backend updates the subscription status to `CANCELED`. Prorated refunds (if applicable) depend on the remaining period of the subscription and the plan's billing cycle. |
| **End of Term**        | Cancels the subscription at the end of the current billing cycle, ensuring no further charges. The subscription remains active until its `end_date`. |


## Subscription Price Overrides

ScalarHub enables flexible pricing for specific use cases where subscription prices must be adjusted. Price overrides allow administrators to:
- Modify or replace default pricing for one or more subscription components.
- Set custom rates for a defined term.

**Note**: Price overrides are applied at the subscription level and do not impact the default rates for other customers or plans.


ScalarHub subscriptions ensure a seamless and transparent experience for managing recurring services. Whether you're evaluating the platform, scaling your business, or managing enterprise operations, ScalarHub offers plans and features designed to fit your needs.
