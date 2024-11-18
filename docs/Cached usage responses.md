---
sidebar_position: 4
id: Cached usage responses
---

# Cached Usage Responses

ScalarTax provides API endpoints to query usage data for accounts, customers, and other entities. These endpoints are optimized for performance, allowing applications to efficiently retrieve usage data while supporting caching mechanisms for faster responses.

ScalarTax supports cached responses to improve latency, especially when the latest data is not critical for your use case. This feature helps display historical data or power dashboard visualizations. When fresh data is required, you can fetch it directly from the source.

## Header Semantics

ScalarHub API uses standard HTTP headers to specify caching behavior, ensuring that cached responses are aligned with client requirements.

### Request Headers

| Header Key        | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Cache-Control** | Defines caching rules, including directives for expiration and revalidation of cached responses. |

#### Supported Cache-Control Directives

- **max-age=0**: Ensures the cached response is immediately stale and must be revalidated with the server.
- **private**: Restricts cached data to individual users, preventing shared caching.
- **must-revalidate**: Requires stale cached responses to be revalidated before being served to the client.

#### Example Request Header

"`http
GET /customers/{customer_id}/usage HTTP/1.1
Cache-Control: max-age=0, private, must-revalidate
```

### Optional Conditional Headers

| Header Key              | Description                                                             |
|-------------------------|-------------------------------------------------------------------------|
| **If-Modified-Since** | Requests data only if it has been modified since the specified date.    |
| **ETag** | Validates the version of cached data with the server.                   |

#### Example Request with Conditional Caching

"`http
GET /subscriptions/{subscription_id}/usage HTTP/1.1
Cache-Control: max-age=0, private, must-revalidate
If-Modified-Since: Mon, 18 Nov 2024 10:00:00 GMT
```

### Response Headers

ScalarHub API responses include caching-related headers to indicate the freshness and validity of the returned data.

| Header Key        | Description                                                            |
|-------------------|------------------------------------------------------------------------|
| **Cache-Control** | Echoes the request's caching directives or specifies server-side caching rules. |
| **Cache-Updated-At** | Timestamp in ISO 8601 format indicating the last time the cached data was updated. |

#### Example Response Header

"`http
HTTP/1.1 200 OK
Cache-Control: max-age=0, private, must-revalidate
Cache-Updated-At: 2024-11-18T16:30:00Z
Content-Type: application/json
```

#### Example Response for Conditional Request

"`http
HTTP/1.1 304 Not Modified
Cache-Control: max-age=0, private, must-revalidate
```

## Performance Considerations

- **Freshness Prioritization** By default, caching ensures that the data served is validated against the latest available records, maintaining accuracy for billing and reporting.

- **Reduced Latency** Conditional requests reduce unnecessary data transfers while maintaining data freshness.
# Dry Run Requests

The ScalarTax API provides a **dry run** feature that allows you to test API requests without making any changes to the system. This feature is handy for validating the structure and correctness of a request before executing it in a production environment. It simulates the processing of a request and returns the expected response while ensuring no modifications are made to the system's data.

By performing a dry run, the API will simulate the processing of the request and return an expected result. However, no actual operations will be performed, such as data creation, updates, or deletions. This allows developers to confirm that their requests are structured correctly and will yield the expected responses before executing the actual actions.

### **How Dry Run Works**

- **Simulation**: A dry run processes the request as if it were real but does not persist any changes to the database or system state.
- **Validation**: It lets you preview the potential response, enabling you to identify errors or issues with your request before executing the real action.
- **No Data Modification**: No updates, creations, or deletions will occur during a dry run request.

For example, if you create a new transaction or calculate taxes, the response will indicate the results as if the transaction were completed. However, the underlying data will remain unchanged, providing a safe way to test API behavior without impacting the system.

### **Header Semantics**

To perform a dry run request, include the following header in your API request:

| Header       | Value   |
|--------------|---------|
| `Dry-Run` | `True` |

This header indicates to the ScalarTax API that the request should be simulated and that no changes will be made to the system.

**Example Request**: Creating a Transaction with Dry Run

"`bash
curl --request POST 'https://api.scalartax.ai/v1/transactions' \
--header 'Dry-Run: True' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer <your_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
 "transaction_id": "txn_12345",
 "amount": 1500.00,
 "currency": "USD",
 "tax_code": "TX001",
 "customer_id": "cust_7890"
}'
```

**Response (Dry Run)**

"`json
{
  "transaction_id": "txn_12345",
  "amount": 1500.00,
  "currency": "USD",
  "tax_code": "TX001",
  "customer_id": "cust_7890",
  "status": "simulated",
  "tax_amount": 120.00,
  "total_amount": 1620.00
}
```

This response confirms that the transaction was processed as a dry run. The status is marked as `simulated`, and no changes persisted in the system.


### Response Headers

When a request is sent with the `Dry-Run` header, and the request is successfully processed as a dry run, the response will include the following header and value:

| Key              | Value   |
|-------------------|---------|
| Scalar-Dry-Run    | true    |

This response header confirms that the request was a dry run and that no changes were made to the data.

However, if the `Dry-Run` header is included in the request but, for any reason, the request was not processed as a dry run (for instance, if the request is sent to an unsupported endpoint), the `Scalar-Dry-Run` header will not be present in the response. This absence indicates that the request was executed typically rather than as a dry run.


### **Unsupported Endpoints**

Not all endpoints support the dry run feature. When a request is sent to an unsupported endpoint with the `Dry-Run` header, the API typically ignores the header and processes the request as usual. In such cases, the request will be executed like a standard operation, resulting in actual changes to the data.

**Example of Unsupported Dry Run Request**

"`bash
curl --request PUT 'https://api.scalartax.ai/v1/unsupported-endpoint' \
--header 'Dry-Run: True' \
--header 'Authorization: Bearer <your_token>' \
--data-raw '{"data": "test"}'
```

**Response**:

"`json
{
  "error": "Endpoint not supported for dry run requests"
}
```

