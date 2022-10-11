# Public

```ts
const publicController = new PublicController(client);
```

## Class Name

`PublicController`

## Methods

* [Update Feedback](../../doc/controllers/public.md#update-feedback)
* [Create Feedback](../../doc/controllers/public.md#create-feedback)


# Update Feedback

Update feedback.

```ts
async updateFeedback(
  id: string,
  body: Feedback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Resource identifier string.<br>**Constraints**: *Pattern*: `^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$` |
| `body` | [`Feedback`](../../doc/models/feedback.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback`](../../doc/models/feedback.md)

## Example Usage

```ts
const id = 'c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd';
const contentType = null;
const body: Feedback = {
  id: null,
  createdAt: null,
  userIP: null,
  tenantId: null,
  userAgent: null,
};

try {
  const { result, ...httpResponse } = await publicController.updateFeedback(id, body);
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


# Create Feedback

Create new feedback.

```ts
async createFeedback(
  body: Feedback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Feedback`](../../doc/models/feedback.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback`](../../doc/models/feedback.md)

## Example Usage

```ts
const contentType = null;
const body: Feedback = {
  id: null,
  createdAt: null,
  userIP: null,
  tenantId: null,
  userAgent: null,
};

try {
  const { result, ...httpResponse } = await publicController.createFeedback(body);
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

