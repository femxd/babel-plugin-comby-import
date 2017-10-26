# babel-plugin-comby-import

基于babel-plugin-import 1.4.0，增加支持主题库配置

----

## Usage

```bash
npm install babel-plugin-comby-import --save-dev
```

Via `.babelrc` or babel-loader.

```javascript
{
  "plugins": [["comby-import", options]]
}
```

### options

`options` can be object.

```javascript
{
  "libraryName": "antd",
  "style": true,   // or 'css'
}
```

```javascript
{
  "libraryName": "comby-lib-mobile",
  "libraryDirectory": "components",  // default: lib
  "camel2DashComponentName": false,  // default: true
  "styleLibraryName": "comby-lib-mobile-theme",
  "styleDirectory": "src", //default: dist
}
```

```javascript
{
  "libraryName": "comby-lib-mobile",
  "styleLibraryPath": "/code/comby-lib-mobile/theme/src"
}
```

`options` can be an array.

For Example: 

```javascript
[
  {
    "libraryName": "antd",
    "libraryDirectory": "lib",   // default: lib
    "style": true
  },
  {
    "libraryName": "antd-mobile"
  },
]
```

### style

- `["import", { "libraryName": "antd" }]`: import js modularly
- `["import", { "libraryName": "antd", "style": true }]`: import js and css modularly (LESS/Sass source files)
- `["import", { "libraryName": "antd", "style": "css" }]`: import js and css modularly (css built files)

