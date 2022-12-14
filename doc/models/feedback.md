
# Feedback

## Structure

`Feedback`

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
| `id` | `string` | Required | Unique identifier of the feedback. |
| `createdAt` | `string` | Required | Date of the feedback creation. |
| `updatedAt` | `string \| undefined` | Optional | Date of the feedback update. |
| `userIP` | `string` | Required | IP address of the user. |
| `userAgent` | `string` | Required | User agent of the device. |

## Example (as JSON)

```json
{
  "id": "c73bcdcc-2669-4bf6-81d3-e4ae73fb11fd",
  "createdAt": "01/01/2020 00:00:00",
  "userIP": "91.201.190.10",
  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
}
```

