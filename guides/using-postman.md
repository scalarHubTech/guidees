---
id: using-postman
title: Using Postman
sidebar_position: 5
---

# ScalarHub REST API Collection

### What is an API Collection?
An API Collection for ScalarHub includes pre-configured requests and workflows for interacting with ScalarHub APIs. By importing the ScalarTax API Collection into Postman, developers can quickly test endpoints and understand the API's capabilities.

### Why use an API Collection?
The ScalarHub API Collection simplifies the process of testing and exploring the ScalarTax API. It includes predefined configurations for Authentication, Request payloads, and Sample data

This makes it easy to get started without manual setup.

### Prerequisites
- A ScalarHub account to access the ScalarHub API Key.
- A free [Postman Account](https://identity.getpostman.com/signup).

## Using the ScalarHub REST API Collection

Follow these steps to fork and use the ScalarHub REST API Collection:

### Step 1: Install the Postman app
[Download Postman](https://www.postman.com/downloads/) and install the app. If you already have Postman installed, use **Postman v8** orlater.

**System requirements**: Learn more about the [system requirements](https://support.postman.com/hc/en-us/articles/360026135674-What-are-the-system-requirements-for-using-Postman-) for installing and running Postman.  
**Installation guide**: Learn [how to install the Postman app](https://learning.postman.com/docs/getting-started/installation/installation-and-updates/) on your desktop.


### Step 2: Create a fork
1. Open the Postman native app.Click the top search bar and type **ScalarHub Workspace**. Select the workspace under **Workspaces**.

![workspaceImage](/img/postman_img/workspace.png)

2. Hover over the **ScalarHub REST API Collection**, click the "More options" button, and choose **Create a fork**.
3. Enter a name for your fork and choose a workspace. Click **Fork Collection**.  
   The forked collection will appear in the selected workspace.

### Step 3: Set up the environment
1. After creating the fork, configure the environment:
   - Click the **Quick View** icon in the top-right corner of Postman.
   - In the **Environment** section, click **Add**.
2. Add the following environment variables with their corresponding values:
   - **API_KEY**: Your ScalarHub API key
   - **BASE_URL**: The ScalarHub API base URL (e.g., `https://api.scalarhub.ai`)
3. After adding all the variables, click **Save**.

### Step 4: Invoke the APIs
Once the setup is complete, you can start making API calls:

1. The Scalahub API Reference folder has subfolders for each type of API resource.
2. Expand subfolders to access each resource's available HTTP methods and API endpoints.  
3. Refer to the [Scalarhub API Reference](https://docs.scalarhub.ai/reference/api-reference) for detailed documentation on API behavior.


