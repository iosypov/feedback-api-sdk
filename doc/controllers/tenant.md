# Tenant

```ts
const tenantController = new TenantController(client);
```

## Class Name

`TenantController`

## Methods

* [Create Tenant](../../doc/controllers/tenant.md#create-tenant)
* [Update Tenant by Id](../../doc/controllers/tenant.md#update-tenant-by-id)


# Create Tenant

Create new tenant.

```ts
async createTenant(
  body: Tenant,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Tenant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Tenant`](../../doc/models/tenant.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Tenant`](../../doc/models/tenant.md)

## Example Usage

```ts
const contentType = null;
const body: Tenant = {
  id: null,
  privateApiKey: null,
  email: 'johndoe@gmail.com',
  rapidUser: null,
  active: null,
  createdAt: null,
  updatedAt: null,
};

try {
  const { result, ...httpResponse } = await tenantController.createTenant(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | Unauthorized | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |


# Update Tenant by Id

Update tenant.

```ts
async updateTenantById(
  id: string,
  xAPIKEY: string,
  body: Tenant,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Tenant>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Resource identifier string.<br>**Constraints**: *Pattern*: `^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$` |
| `xAPIKEY` | `string` | Header, Required | Private api key. |
| `body` | [`Tenant`](../../doc/models/tenant.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Tenant`](../../doc/models/tenant.md)

## Example Usage

```ts
const id = 'c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd';
const xAPIKEY = 'X-API-KEY2';
const contentType = null;
const body: Tenant = {
  id: null,
  privateApiKey: null,
  email: 'johndoe@gmail.com',
  rapidUser: null,
  active: null,
  createdAt: null,
  updatedAt: null,
};

try {
  const { result, ...httpResponse } = await tenantController.updateTenantById(id, xAPIKEY, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`BadRequestError`](../../doc/models/bad-request-error.md) |
| 401 | Unauthorized | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 404 | Not found | [`NotFoundError`](../../doc/models/not-found-error.md) |
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |

