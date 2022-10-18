
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

