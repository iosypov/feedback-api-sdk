
# Feedback Data

Feedback object.

## Structure

`FeedbackData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rating` | `number \| undefined` | Optional | Rating of the feedback.<br>**Constraints**: `>= 0` |
| `sentiment` | `boolean \| undefined` | Optional | Sentiment of the feedback. |
| `reasons` | `string[] \| undefined` | Optional | Reasons of the feedback.<br>**Constraints**: *Minimum Items*: `1` |
| `suggestion` | `string \| undefined` | Optional | Suggestion of the feedback. |

## Example (as JSON)

```json
{
  "rating": null,
  "sentiment": null,
  "reasons": null,
  "suggestion": null
}
```

