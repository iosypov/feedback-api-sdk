
# Feedback Req

## Structure

`FeedbackReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rating` | `number \| undefined` | Optional | Rating of the feedback.<br>**Constraints**: `>= 0` |
| `sentiment` | `boolean \| undefined` | Optional | Sentiment of the feedback. |
| `reasons` | `string[] \| undefined` | Optional | Reasons of the feedback.<br>**Constraints**: *Minimum Items*: `1` |
| `suggestion` | `string \| undefined` | Optional | Suggestion of the feedback. |
| `page` | `string \| undefined` | Optional | Page of the feedback. |
| `category` | `string \| undefined` | Optional | Category of the feedback. |
| `apiOperationId` | `string \| undefined` | Optional | operationId of the API. |
| `tags` | `string[] \| undefined` | Optional | Any list of tags to group feedbacks by. |
| `userId` | `string \| undefined` | Optional | Unique identifier of the user. |

## Example (as JSON)

```json
{
  "rating": null,
  "sentiment": null,
  "reasons": null,
  "suggestion": null,
  "page": null,
  "category": null,
  "apiOperationId": null,
  "tags": null,
  "userId": null
}
```

