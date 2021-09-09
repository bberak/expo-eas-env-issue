
My eas.json looks like:

```
{
  "build": {
    "release": {},
    "staging": {
      "developmentClient": true,
      "distribution": "internal",
      "env": {
        "ENVIRONMENT": "staging"
      }
    }
  },
  "submit": {
    "release": {}
  }
}
```

> Notice the "ENVIRONMENT" variables is set to "staging"

When I run `eas build --profile staging --platform android` my `app.config.js` throws an error because the "ENVIRONMENT" is undefined.