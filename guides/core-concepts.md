---
id: core-concepts
title: Core Concepts
sidebar_position: 2
---

**ScalarHub** is an advanced platform for managing taxation, compliance, and business operational workflows. The API comprises several essential controllers, each serving a critical role in the system. Below is an overview of the most relevant controllers, covering their working, role, and importance, followed by endpoint summaries for ease of implementation.

### Accounts

Accounts are ScalarHub's backbone and are responsible for managing businesses or organizations registered on the platform. It is the starting point for configuring tax and compliance settings, centralizing organization-wide configurations, and managing metadata. Linking essential resources like customers and transactions ensures accurate and consolidated workflows, supports creating, updating, and retrieving account data, and provides a central hub for operational clarity and compliance management.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [Accounts API Reference](https://docs.scalarhub.ai/reference/Endpoints/accounts/) | Manages businesses or organizations registered on ScalarHub, centralizing tax and compliance settings and ensuring operational clarity. |

### Customers

The Customers in ScalarHub is designed to store and manage information about individuals or businesses interacting with accounts, ensuring efficient customer management and seamless tax compliance. It is critical in organizing customer-specific data, such as contact details and tax-exempt statuses, while enabling CRUD (Create, Read, Update, Delete) operations on customer profiles. Linking customers to accounts and transactions simplifies tax reporting and ensures compliance through well-structured and organized data, contributing to streamlined workflows and operational clarity.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [Customers API Reference](https://docs.scalarhub.ai/reference/Endpoints/customers/) | Stores and manages customer information, ensuring tax compliance and simplifying workflows by organizing customer-specific data. |


### Transactions

The Transactions controller is responsible for recording all financial activities within the ScalarHub platform, including sales, refunds, and adjustments, to ensure accurate tax compliance and reporting. It plays a vital role in tracking financial transactions linked to customers, accounts, and tax obligations, making it essential for businesses to maintain organized financial records.

This controller processes, retrieves, and updates transaction logs, ensuring detailed and accurate reporting. It helps businesses manage their financial activities while being audit-ready by maintaining a comprehensive record of all transactions. By supporting proper financial management, the Transactions Controller ensures compliance with tax regulations and provides audit transparency.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [Transactions API Reference](https://docs.scalarhub.ai/reference/Endpoints/transactions/) | Tracks financial activities like sales and refunds, ensuring accurate tax reporting and financial management. |


### S_l_Nexus

The S_l_Nexus Controller assists businesses in mapping their operations to jurisdictions with tax obligations, ensuring local compliance. It is critical to define relationships between accounts and tax jurisdictions and facilitate compliance management. The controller tracks, retrieves, and updates tax nexuses, automating compliance workflows and reducing manual efforts. By enabling accurate tax calculations and aligning operations with legal requirements, the S_l_Nexus Controller helps organizations adhere to regional regulations seamlessly. This functionality is essential for maintaining precise reporting and avoiding compliance issues.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [S_l_Nexus API Reference](https://docs.scalarhub.ai/reference/Endpoints/s_l_nexus/) | Links business operations to tax jurisdictions, automating compliance and ensuring accurate tax obligations met. |


### Locations

The Locations controller is essential for managing addresses and jurisdictions within ScalarHub and ensuring accurate tax rate calculations and regulatory compliance. It links location data with accounts, transactions, and tax configurations, facilitating smooth tax workflows.

The Locations controller supports tax compliance by aligning tax rates with regional regulations and enabling the addition, retrieval, and organization of location-related information. Its importance lies in ensuring businesses can meet local tax obligations while maintaining efficient and accurate operations.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [Locations API Reference](https://docs.scalarhub.ai/reference/Endpoints/locations/) | Manages addresses and jurisdictions, facilitating accurate tax rate calculations and ensuring regional tax compliance. |


### Subscriptions

Subscriptions are crucial in managing service plans and billing cycles for ScalarHub accounts, ensuring seamless access to the platform's features. It tracks subscriptions, renewals, and billing details, providing a centralized system for managing ongoing services.

This controller facilitates creating, updating, and monitoring active subscription statuses. Its importance lies in helping businesses manage costs while ensuring uninterrupted service availability, thereby maintaining continuous access to ScalarHub's tools and features.

| **Resource** | **Description** |
|--------------|---------------------------------------------------------------------------------------------------|
| [Subscriptions API Reference](https://docs.scalarhub.ai/reference/Endpoints/subscriptions/) | Manages service plans, billing cycles, and subscription statuses, ensuring continuous access to ScalarHub's tools and features. |






