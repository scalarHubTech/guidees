---
id: creating-subscriptions
title: Creating subscriptions
sidebar_position: 2
---

ScalarHub subscriptions represent a customer's recurring purchase of a service plan tailored to meet diverse business needs.

To create a subscription, customers send a `POST /subscriptions` request. This endpoint allows users to select a plan and submit necessary subscription details.

### Available Plans

| **Plan** | **Description** | **Target Audience** |
|---------------------|---------------------------------------------------|----------------------------------------|
| **Trial Plan** | A 14-day free evaluation to explore ScalarHub features. | Customers evaluating the platform.    |
| **Business Plan** | Features tailored for small to medium enterprises. | Small to medium enterprises.          |
| **Enterprise Plan** | Advanced functionalities for large-scale businesses. | Large-scale enterprises.              |


When creating a subscription, customers must provide details such as:

- `plan_name`: Specifies the chosen plan.
- `start_date`: Indicates when the subscription should begin.
- `billing_cycle`: Configures the preferred billing interval.

Once the payment (if required) is processed, the subscription becomes active. The `service_activation_date` field is set, granting access to the selected plan's features.


### Subscription Timeline

The subscription timeline ensures clarity regarding critical dates and durations:

| **Event** | **API Field** | **Description** |
|----------------------|------------------------------|-------------------------------------------------|
| **Effective Date** | `contract_effective_date` | Marks the subscription's start date.             |
| **Termination Date** | `contract_termination_date` | Indicates the subscription's end date.           |
| **Trial Period** | Derived from `effective_date`| A 14-day evaluation for trial plans.             |
| **Renewals** | `auto_renew` | Automatically renews unless canceled by the user. |
