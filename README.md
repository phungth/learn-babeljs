# NOTES

```javascript

"scripts": {
  "build": "babel src -d dist"
}

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 2
      }
    ]
  ]
}
```
