---
id: configure-payments-and-collection
title: Configure payments and collection
sidebar_position: 3
---

## Managing Accounts

In the ScalarTax system, managing accounts involves associating them with specific subscriptions. Each account is tied to a subscription that governs crucial details such as billing cycles, amounts, and account status (e.g., **Trial**, **Active**). Account details include subscription information and effective dates, determining when payments are processed. Proper setup of accounts and subscriptions is essential for ensuring accurate payment collection, as the subscription status directly affects whether payments are triggered. You can:
- **Create** new accounts by linking them to subscriptions.
- **Retrieve** account details for review or analysis.
- **Update** accounts to modify subscription links, statuses, or effective dates.

## Handling Subscriptions

Each account in ScalarTax is associated with a subscription that defines:
- **Billing Cycle**: Determines the payment frequency (e.g., monthly, yearly).
- **Billing Amount**: Indicates whether the account is active for billing purposes.
- **Contract Dates**: Specify the start and end of the subscription, aligning payments with service periods.

Subscription statuses like "Active" or "Trial" dictate the behavior of payments—whether they are processed or paused based on the subscription's terms.

## Creating and Updating Payments

Payments are closely linked to accounts and subscriptions. Payment records include:
- **Amount**: The billed amount for the subscription.
- **Due Date**: When the payment is expected.
- **Transaction History**: Records of all financial activities related to the account.

Payments can be updated when subscription details change, such as billing or renewal adjustments. This ensures payment records remain accurate and up to date.

## Automated Payment Collection

ScalarTax supports **automated payment collection** to streamline the process. Key features include:
- **Automatic Payment Triggers**: Payments are automatically initiated for subscription activations, renewals, or cancellations.
- **Timely Collections**: Ensures payments are processed efficiently without manual intervention.
- **Subscription-Driven**: Payments are aligned with the terms set in the subscriptions.

## Transaction History

The **transaction history** is a critical component of payment management. It provides:
- Records of payments, refunds, and adjustments.
- Detailed logs of financial activities related to subscriptions and accounts.

This history ensures accurate financial records for audits, customer queries, and reconciliations.

## Configuring Terms
Configuring payment terms ensures timely payment collection and reduces confusion. These terms include:
- **Payment Schedule**: Monthly, quarterly, or annually.
- **Adjustments**: Late fees, discounts, or grace periods.

Subscription terms, such as billing cycles and contract dates, must be configured correctly to ensure clarity for both customers and businesses.

## Collection Behavior

Collection behavior defines payment management based on subscription statuses and account types. Options include:

1. **Automatic Payment Collection**  
 Payments are processed automatically at the start of each billing cycle.

2. **Manual Payment Collection**  
 Payments are manually initiated by users as needed.

3. **Retry Logic for Failed Payments**  
 Rules for handling failed payments, including:
   - Retry attempts.
   - Time intervals between retries.

4. **Grace Periods**  
 Extra time for customers to make payments without penalties.


