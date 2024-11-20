---
sidebar_position: 4
id: cached-usage-responses
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

```http
GET /customers/{customer_id}/usage HTTP/1.1
Cache-Control: max-age=0, private, must-revalidate
```

### Optional Conditional Headers

| Header Key              | Description                                                             |
|-------------------------|-------------------------------------------------------------------------|
| **If-Modified-Since** | Requests data only if it has been modified since the specified date.    |
| **ETag** | Validates the version of cached data with the server.                   |

#### Example Request with Conditional Caching

```http
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

```http
HTTP/1.1 200 OK
Cache-Control: max-age=0, private, must-revalidate
Cache-Updated-At: 2024-11-18T16:30:00Z
Content-Type: application/json
```

#### Example Response for Conditional Request

```http
HTTP/1.1 304 Not Modified
Cache-Control: max-age=0, private, must-revalidate
```

## Performance Considerations

- **Freshness Prioritization** By default, caching ensures that the data served is validated against the latest available records, maintaining accuracy for billing and reporting.

- **Reduced Latency** Conditional requests reduce unnecessary data transfers while maintaining data freshness.
