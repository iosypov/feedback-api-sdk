
# Feedback Meta Data

Feedback object.

## Structure

`FeedbackMetaData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier of the feedback. |
| `createdAt` | `string` | Required | Date of the feedback creation. |
| `updatedAt` | `string \| undefined` | Optional | Date of the feedback update. |
| `userId` | `string \| undefined` | Optional | Unique identifier of the user. |
| `userIP` | `string` | Required | IP address of the user. |
| `tenantId` | `string` | Required | Unique identifier of the tenant. |
| `userAgent` | `string` | Required | User agent of the device. |
| `page` | `string \| undefined` | Optional | Page of the feedback. |
| `category` | `string \| undefined` | Optional | Category of the feedback. |
| `apiOperationId` | `string \| undefined` | Optional | operationId of the API. |

## Example (as JSON)

```json
{
  "id": "c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd",
  "createdAt": "01/01/2020 00:00:00",
  "userIP": "91.201.190.10",
  "tenantId": "a0b73bce-3217-4c3b-801b-3c202881b240",
  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
}
```

