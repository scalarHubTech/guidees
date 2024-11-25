---
id: introduction
title: Introduction
sidebar_position: 1
---

In the **ScalarHub** project, invoicing functionality is implemented through a **transaction-centric model**, which replaces traditional invoice generation with a streamlined and dynamic approach to financial tracking. This model leverages the existing transaction structure to record essential billing information, such as amounts, payment methods, dates, and account details, thereby acting as a proxy for invoices. The result is a simplified, efficient, and scalable invoicing workflow that aligns with ScalarHub's commitment to transparency and adaptability.


- **Transaction-Centric Model:** The JSON file highlights several endpoints and detailed capabilities for managing **transactions**, such as creating, retrieving, and updating transaction details. These capabilities align with the description of a transaction-centric model.While traditional invoices are not explicitly mentioned as being replaced, it is reasonable to deduce that the transaction system records billing events effectively.

- **Essential Billing Information:** Transactions in the API capture details like **amounts**, **dates**, and associated **accounts**, which can act as billing proxies.Specific fields such as `billing_cycle`, `billing_amount`, and `subscription_id` in the accounts and subscriptions objects reinforce the idea that financial tracking is transaction-driven.

- **Simplified and Scalable Workflow:** The JSON file's **event-driven approach** (real-time transactions) and robust API architecture imply that this workflow is designed for **scalability and flexibility**, as claimed.

- **API-Centric Workflows:** The documentation showcases a firm reliance on **APIs** for creating and managing transactions. The system supports programmatic access, which aligns with API-centric principles.

- **Granular Data Insights** Transactions and related endpoints include metadata such as **service dates**, **customer IDs**, and **account statuses**. These elements offer detailed and **audit-ready records** of financial operations.