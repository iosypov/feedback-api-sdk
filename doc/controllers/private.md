# Private

```ts
const privateController = new PrivateController(client);
```

## Class Name

`PrivateController`

## Methods

* [Get Feedback](../../doc/controllers/private.md#get-feedback)
* [Get Feedbacks](../../doc/controllers/private.md#get-feedbacks)
* [Health](../../doc/controllers/private.md#health)


# Get Feedback

Get feedback.

```ts
async getFeedback(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Resource identifier string.<br>**Constraints**: *Pattern*: `^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback`](../../doc/models/feedback.md)

## Example Usage

```ts
const id = 'c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd';
try {
  const { result, ...httpResponse } = await privateController.getFeedback(id);
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


# Get Feedbacks

Get feedbacks.

```ts
async getFeedbacks(
  rating?: number[],
  sentiment?: boolean[],
  reasons?: string[],
  userId?: string[],
  userIP?: string[],
  page?: string[],
  category?: string[],
  apiOperationId?: string[],
  xPAGE?: number,
  xPERPAGE?: number,
  xORDER?: XORDEREnum,
  xORDERBY?: XORDERBYEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FeedbackResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rating` | `number[] \| undefined` | Query, Optional | Rating to filter by.<br>**Constraints**: `>= 0` |
| `sentiment` | `boolean[] \| undefined` | Query, Optional | Sentiment to filter by. |
| `reasons` | `string[] \| undefined` | Query, Optional | Reasons to filter by. |
| `userId` | `string[] \| undefined` | Query, Optional | User ID to filter by. |
| `userIP` | `string[] \| undefined` | Query, Optional | IP address to filter by. |
| `page` | `string[] \| undefined` | Query, Optional | Page to filter by. |
| `category` | `string[] \| undefined` | Query, Optional | Category to filter by. |
| `apiOperationId` | `string[] \| undefined` | Query, Optional | Operation to filter by. |
| `xPAGE` | `number \| undefined` | Header, Optional | Page number.<br>**Default**: `1` |
| `xPERPAGE` | `number \| undefined` | Header, Optional | Items per page.<br>**Default**: `50` |
| `xORDER` | [`XORDEREnum \| undefined`](../../doc/models/xorder-enum.md) | Header, Optional | Sort order.<br>**Default**: `XORDEREnum.Desc` |
| `xORDERBY` | [`XORDERBYEnum \| undefined`](../../doc/models/xorderby-enum.md) | Header, Optional | Order by.<br>**Default**: `XORDERBYEnum.CreatedAt` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FeedbackResponse`](../../doc/models/feedback-response.md)

## Example Usage

```ts
const xPAGE = 1;
const xPERPAGE = 10;
const xORDER = 'desc';
const xORDERBY = 'createdAt';
try {
  const { result, ...httpResponse } = await privateController.getFeedbacks(None, None, None, None, None, None, None, None, xPAGE, xPERPAGE, xORDER, xORDERBY);
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


# Health

Check health.

```ts
async health(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await privateController.health();
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
| 429 | Too Many Requests | [`TooManyRequestsError`](../../doc/models/too-many-requests-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](../../doc/models/internal-server-error.md) |

