
# Tenant

Tenant object.

## Structure

`Tenant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique identifier of the tenant. |
| `privateApiKey` | `string` | Required | Private API Key. |
| `email` | `string` | Required | Email of the user. |
| `domains` | `string[] \| undefined` | Optional | Allowed domains. |
| `rapidUser` | `string` | Required | Name of the user. |
| `active` | `boolean` | Required | Status of the tenant. |
| `createdAt` | `string` | Required | Date of the tenant creation. |
| `updatedAt` | `string` | Required | Date of the feedback update. |

## Example (as JSON)

```json
{
  "id": "5ab55a78-4a16-11ed-b878-0242ac120002",
  "privateApiKey": "d7c8d4ca-4a22-11ed-b878-0242ac120002",
  "email": "johndoe@gmail.com",
  "rapidUser": "mustang36",
  "active": true,
  "createdAt": "01/01/2020 00:00:00",
  "updatedAt": "01/01/2020 00:00:00"
}
```

