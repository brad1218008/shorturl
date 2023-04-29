[TOC]

# Get Short Url By ID

**URL** : `/api/short/:id`

**Method** : `GET`

**Data constraints** : No

**Header constraints** : No

## Success Responses

**Condition** : ID is valid 

**Code** : `200 OK`

```json
{
  "id":"",
  "originUrl":"",
  "createDate":"2023-04-29T06:47:59.769Z"
}
```

## Error Response

**Condition** : ID is invalid.

**Code** : `404 Not Found`


# Create Short Url

**URL** : `/api/short/`

**Method** : `POST`

**Data constraints**

```json
{
    "originUrl": "[required](string)"
}
```

**Data examples**

Partial data is allowed.

```json
{
    "originUrl": "https://google.com"
}
```

## Success Responses

**Condition** : Data provided is valid.

**Code** : `200 OK`

**Content example** : 

```json
{
    "id": "xxxx",
    "originUrl":"https://xxx",
    "createDate":"2023-04-29T06:47:59.769Z"
}
```

# Remove Short Url

**URL** : `/api/short/:id`

**Method** : `DELETE`

**Data constraints** : No

**Header constraints** : No

## Success Responses

**Condition** : ID is valid

**Code** : `204 No Content`