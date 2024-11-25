---
id: structure-and-lifecycle
title: Structure and lifecycle
sidebar_position: 2
---

# Transactions in ScalarTax

Transactions in ScalarTax are uniquely identified by an **ID**, which is crucial for tracking and referencing specific financial or operational activities. They are closely linked to **accounts** or **users**, establishing clear relationships between the transaction and the entities involved. Key attributes include:

- **Date and time stamps**: Fields like `created_at` and `updated_at` maintain an accurate timeline of the transaction’s lifecycle.  
- **Statuses**: Indicators like `pending`, `completed`, or `failed` represent the current state of the transaction, enabling real-time status tracking.  
- **Metadata**: Information such as billing cycles, billing amounts, and associated products/services provides additional context to each transaction, ensuring comprehensive data capture.

## Life Cycle of a Transaction

- ***Creation of Transactions:** Transactions are created using a **POST request**. The `/transactions` endpoint accepts transaction data, including account references and other essential details, in the request body. While "service IDs" are not explicitly mentioned in the documentation, they may be implied through associated entities.

- **Validation:** Although the documentation does not detail specific validation processes, typical checks include:
Ensuring required fields (e.g., subscription ID, account ID) are present.
Verifying that referenced accounts or subscriptions are valid.

- **Processing and Completion:** Transactions can be updated to reflect their processing status through the `PUT /transactions/:id` endpoint. This allows marking transactions as `completed` or changing their status to reflect progress.

- **Transaction Failure:** The system accounts for error scenarios like invalid requests (`400 Bad Request`) or server issues (`500 Internal Server Error`). While specifics like insufficient funds are not explicitly detailed, such cases are common in transaction APIs.

- **Updating Transactions:** Transactions can be updated using the `PUT /transactions/:id` endpoint. Supported updates include:
Changing the status (e.g., from `pending` to `completed`).
Modifying transaction metadata for clarity or corrections.

- **Immutability After Finalization:**
Immutability after transaction finalization is not explicitly confirmed in the documentation. However, this is a common practice in financial systems to ensure data integrity.


## Types of Transactions

ScalarTax supports multiple transaction types to meet diverse business needs:

1. **Standard Transactions**: Typical user-initiated actions, such as purchases, service activations, or payments.
2. **Refunds**: Reverse previous payments or charges, maintaining traceability to the original transaction.
3. **Recurring Transactions**: Automatically generated based on subscription billing cycles (e.g., monthly or annually), ensuring continuity of services.

### Integration and Management

- **Seamless Integration**: Transactions are tightly integrated with accounts and subscriptions, enabling efficient financial tracking.  
- **Historical Insights**: Developers can retrieve transaction histories for accounts or subscriptions to gain insights into financial performance and user behavior.  
- **Flexibility**: Transaction statuses or metadata can be updated to align with business workflows.  
- **Robust Error Handling**: Consistent response formats and error handling prevent data inconsistencies and ensure smooth system integration.  
