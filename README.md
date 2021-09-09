
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

```
Error: Error reading Expo config at /Users/Boris/Dev/ClickView/expo-eas-env-issue/app.config.js:

Environment "undefined" is not supported. Set the environment variable named "ENVIRONMENT" and try again.
```

> I believe this has something to do with the customized `metro.config.js`