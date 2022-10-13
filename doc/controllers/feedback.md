# Feedback

```ts
const feedbackController = new FeedbackController(client);
```

## Class Name

`FeedbackController`

## Methods

* [Get Feedback by Id](../../doc/controllers/feedback.md#get-feedback-by-id)
* [Update Feedback by Id](../../doc/controllers/feedback.md#update-feedback-by-id)
* [Get Feedback](../../doc/controllers/feedback.md#get-feedback)
* [Create Feedback](../../doc/controllers/feedback.md#create-feedback)


# Get Feedback by Id

Get feedback by id.

```ts
async getFeedbackById(
  id: string,
  xAPIKEY: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Resource identifier string.<br>**Constraints**: *Pattern*: `^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$` |
| `xAPIKEY` | `string` | Header, Required | Private api key. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback`](../../doc/models/feedback.md)

## Example Usage

```ts
const id = 'c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd';
const xAPIKEY = 'X-API-KEY2';
try {
  const { result, ...httpResponse } = await feedbackController.getFeedbackById(id, xAPIKEY);
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


# Update Feedback by Id

Update feedback by id.

```ts
async updateFeedbackById(
  id: string,
  xAPIKEY: string,
  body: Feedback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Resource identifier string.<br>**Constraints**: *Pattern*: `^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$` |
| `xAPIKEY` | `string` | Header, Required | Private api key. |
| `body` | [`Feedback`](../../doc/models/feedback.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback`](../../doc/models/feedback.md)

## Example Usage

```ts
const id = 'c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd';
const xAPIKEY = 'X-API-KEY2';
const contentType = null;
const body: Feedback = {
  id: null,
  createdAt: null,
  userIP: null,
  tenantId: null,
  userAgent: null,
};

try {
  const { result, ...httpResponse } = await feedbackController.updateFeedbackById(id, xAPIKEY, body);
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


# Get Feedback

Get feedback.

```ts
async getFeedback(
  xAPIKEY: string,
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
| `xAPIKEY` | `string` | Header, Required | Private api key. |
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
const xAPIKEY = 'X-API-KEY2';
const xPAGE = 1;
const xPERPAGE = 10;
const xORDER = 'desc';
const xORDERBY = 'createdAt';
try {
  const { result, ...httpResponse } = await feedbackController.getFeedback(xAPIKEY, None, None, None, None, None, None, None, None, xPAGE, xPERPAGE, xORDER, xORDERBY);
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
  const { result, ...httpResponse } = await feedbackController.createFeedback(body);
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

