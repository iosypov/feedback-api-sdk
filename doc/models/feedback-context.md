
# Feedback Context

Feedback object.

## Structure

`FeedbackContext`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `string \| undefined` | Optional | Page of the feedback. |
| `category` | `string \| undefined` | Optional | Category of the feedback. |
| `apiOperationId` | `string \| undefined` | Optional | operationId of the API. |
| `tags` | `string[] \| undefined` | Optional | Any list of tags to group feedbacks by. |
| `userId` | `string \| undefined` | Optional | Unique identifier of the user. |

## Example (as JSON)

```json
{
  "page": null,
  "category": null,
  "apiOperationId": null,
  "tags": null,
  "userId": null
}
```

