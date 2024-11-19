---
sidebar_position: 3
id: Pagination
---

# Pagination

The ScalarHub API uses query parameters to implement pagination for endpoints that return lists of resources. It lets developers control the number of items per page and navigate through pages. By dividing the data into manageable "pages," the ScalarHub API ensures that users can efficiently retrieve, process, and display data without overwhelming the client or the server.

## Paginated API Responses

List endpoints utilize a standardized format containing the requested list in a `data` response object and some metadata that's useful for pagination in the `pagination` response object.

**Request Example**
```http
GET https://api.scalarhub.ai/scalartax/accounts?page=1&limit=20
```
**Response Example**
```json
{
  "data": [
    {
      "id": "ACC20241004183648519939b6db2044b",
      "name": "scalarhubio",
      "subscription_id": "SUB20241004183648c01fa780b4184f1",
      "created_by_id": "USR2024100418364856b383bf1b774eb",
      "updated_by_id": "USR2024100418364856b383bf1b774eb",
      "effective_date": "2024-10-04T13:06:48.000Z",
      "account_status": "Trial"
    },
    ...
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 20,
    "total_pages": 5,
    "total_records": 100
  }
}

```

A few notes on this returned result:        

- **`current_page`**: The current page being viewed.
- **`per_page`**: The number of records per page.
- **`total_pages`**: Total number of pages available.
- **`total_records`**: Total number of records across all pages.

### Limits

Scalarhub implements a default page size of 20, with a maximum upper bound of 500 items per request. To customize the number of items returned per page, use the `limit` query parameter in a paginated request. For example:

