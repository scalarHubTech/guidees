---
id: modifying-subscriptions
title: Modifying Subscriptions
sidebar_position: 3
---

Scalarhub has powerful support for modifying ongoing subscriptions, allowing you to model complex billing behavior while maintaining granular control of invoicing behavior.

## Subscription Edits

ScalarHub uses a robust structure to manage subscription details and ensure seamless updates. Backend logic ensures the synchronization of subscription data across different components. The interface visually represents critical subscription metrics, providing a comprehensive view of the subscription lifecycle. Status transitions, such as activating or expiring subscriptions, are dynamically managed to ensure accuracy and usability.

### Adding a New Price

ScalarHub makes the process of integrating new pricing into subscription workflows a breeze. With modular UI components for display and backend logic to ensure consistency, updates to pricing seamlessly incorporate into the subscription lifecycle, empowering you to update cost structures and ensure compatibility with billing cycles with ease.

### Removing a Price

When a price is removed, ScalarHub ensures a seamless process. It is unlinked from active subscriptions, and the architecture dynamically filters out invalid or inactive pricing in the data layer and user interface. This prevents disruptions in the subscription process or user interactions, giving you confidence in the system's reliability.

### Changing an Existing Price

Pricing changes are dynamically propagated across ScalarHub, ensuring that recalculations of dependent attributes and updates to the user interface and the backend are always up-to-date. These updates maintain alignment with the subscription billing and lifecycle processes, keeping you informed and in control.

### Changing a Fixed Fee Quantity

ScalarHub facilitates adjustments to fixed quantities, such as user or resource limits, by dynamically updating subscription data and ensuring alignment with related billing cycles. Both backend processes and UI components are designed to reflect these changes accurately, providing a consistent user experience.

### Modifying Adjustments

Adjustments to subscription benefits or features, such as adding or removing features, are managed dynamically within ScalarHub. Backend logic ensures compatibility with the overall plan structure, and features tied to different subscription plans can be updated or expanded seamlessly. This process maintains consistency across billing, user experience, and system operations.

### Add-Ons and Plans

The platform uses a modular approach to handle add-ons and plans. Features are mapped to specific plans, and add-ons can be integrated effortlessly, enhancing the subscription offering without requiring structural changes. ScalarHub dynamically reflects these updates to provide flexibility and scalability.

## Subscription Plan Changes

Plan changes are managed programmatically within ScalarHub to ensure seamless transitions. Updates are synchronized across all relevant systems to avoid discrepancies, and backend processes ensure that billing and subscription terms are adjusted correctly.

### Prorations for In-Advance Fees

ScalarHub accounts for mid-cycle changes by recalculating subscription terms to handle prorations accurately. This ensures that users are charged fairly while aligning with the defined billing cycles, regardless of whether the subscription is monthly or annual.

### Scheduling Plan Changes

ScalarHub allows for the precise scheduling of future subscription updates. Backend logic recalculates relevant dates and attributes, ensuring that scheduled changes occur as intended and require no manual intervention.
