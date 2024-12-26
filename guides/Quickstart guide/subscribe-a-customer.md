---
id: subscribe-a-customer
title: Subscribe a Customer
sidebar_position: 4
---

This documentation provides a comprehensive overview of subscribing a customer to a service or plan within ScalarHub. The method includes creating a new customer, provisioning the customer, and managing their subscription lifecycle.

## Creating a New Customer

The process begins with creating new customers and associating them with relevant contact and address information within ScalarHub. The application ensures a reliable customer creation process, guaranteeing that the customer record and associated external address and contact details are created through a seamless transaction process.

During customer creation, all related records, such as addresses, contacts, and tax exemptions, are either successfully created together or rolled back in case of an error. ScalarHub also supports adding metadata, such as the entity ID and user details, for auditing purposes.

ScalarHub's robust error management system ensures a reliable user experience. If an error occurs during the creation process, ScalarHub handles it gracefully by returning specific error messages, thereby ensuring robust error management.


## Provisioning the Customer

Provisioning involves updating or modifying customer details and their associated records within ScalarHub. The application allows updates to customer information, including address, contact, and tax exemption details, ensuring consistency and data integrity.

When updating tax exemption details, the system ensures transparency by modifying the existing record or creating a new one if necessary. The update process also includes auditing fields such as `updated_by_id,` maintaining transparency, and tracking changes made.

For customer deletion, ScalarHub ensures that associated records like external addresses and contacts are decoupled before removing the customer, preventing orphaned records and ensuring data integrity. The transaction ensures that the entire process is executed reliably and consistently.

## Managing Customer Subscriptions

Once a customer is created in ScalarHub, they can be subscribed to a service plan. The subscription process ensures that all relevant details, such as start date, end date, due date, and audit information, are correctly populated for each customer.

Key attributes of the subscription include:

- **Start Date**: The date the subscription begins, typically the current date.
- **End Date**: Dynamically calculated based on the plan's billing cycle (e.g., annual or monthly).
- **Due Date**: Represents the payment due date, dynamically calculated to align with the plan's billing cycle.
- **Status**: Set to "ACTIVE" upon successful creation.

The subscription lifecycle is carefully managed by calculating the end and due dates based on the billing cycle. For annual billing cycles, the end and due dates are set a year from the start date. For other cycles, they are calculated monthly.

ScalarHub will notify the user of the expired status if a subscription expires, ensuring that clear feedback is provided and enhancing the user experience.

:::note
When managing subscriptions, it's crucial to regularly check the subscription status and billing cycle. This practice is essential as it helps prevent expired subscriptions from causing service interruptions, thereby ensuring a seamless user experience.
:::