---
id: login-and-authentication
title: Login and Authentication
sidebar_position: 4
---

The **Scalarhub API** provides secure and flexible login and authentication methods to manage user sessions and ensure API interactions are authorized.

These methods include:

### Password Login

The **Password Login** method authenticates the user using their username and password and generates an authentication token.

#### Request Body

```json
{
  "username": "user@example.com",
  "password": "securePassword"
}
```

#### Response 

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "expires_in": 3600
}

```
