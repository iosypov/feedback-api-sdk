# Credentials

```ts
const credentialsController = new CredentialsController(client);
```

## Class Name

`CredentialsController`

## Methods

* [Create Credentials](../../doc/controllers/credentials.md#create-credentials)
* [Rotate Credentials](../../doc/controllers/credentials.md#rotate-credentials)
* [Delete Credentials](../../doc/controllers/credentials.md#delete-credentials)


# Create Credentials

### Start here by creating your credentials

Be careful to save the private key that is returned. You will not be able to retrieve it again.
You can only have one private key at a time.
Private key is not to be shared with anyone, do not expose it in your frontend code.

```ts
async createCredentials(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Credentials>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Credentials`](../../doc/models/credentials.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await credentialsController.createCredentials();
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
| 401 | Unauthorized | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |


# Rotate Credentials

### Rotate credentials

Generate a new private key and invalidate the current one.
Use this in case your private key is compromised or for security reasons.

```ts
async rotateCredentials(
  xAPIKEY: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Credentials>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string` | Header, Required | Private key. Create a tenant to generate. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Credentials`](../../doc/models/credentials.md)

## Example Usage

```ts
const xAPIKEY = 'X-API-KEY2';
try {
  const { result, ...httpResponse } = await credentialsController.rotateCredentials(xAPIKEY);
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
| 401 | Unauthorized | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |


# Delete Credentials

### Delete credentials

Invalidate your current private key.
You will no longer be able to create or read feedback.

```ts
async deleteCredentials(
  xAPIKEY: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xAPIKEY` | `string` | Header, Required | Private key. Create a tenant to generate. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const xAPIKEY = 'X-API-KEY2';
try {
  const { result, ...httpResponse } = await credentialsController.deleteCredentials(xAPIKEY);
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
| 401 | Unauthorized | [`UnauthorizedError`](../../doc/models/unauthorized-error.md) |
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |

