[![npm](https://img.shields.io/npm/l/ionic2-material-icons.svg)](https://www.npmjs.com/package/ionic2-material-icons/)
[![npm](https://img.shields.io/npm/dt/ionic2-material-icons.svg)](https://www.npmjs.com/package/ionic2-material-icons)
[![npm](https://img.shields.io/npm/dm/ionic2-material-icons.svg)](https://www.npmjs.com/package/ionic2-material-icons)

# ionic2-material-icons
[Material Icons](https://material.io/icons/) for Ionic 2 Apps

## Usage
Use `md-name` instead of `name` when you want to use a material icon. Icon names can be found on this page: https://material.io/icons/. All names are a single lowercase words, example: `alarm add` would be `alarm_add`.
```
<ion-icon md-name="settings"></ion-icon>
```

## Installation

You can download this repo, then copy the font files and the directive into your app. Or follow these steps:

### Install module from NPM
```shell
npm i --save ionic2-material-icons
```

### Import the module
Import `MaterialIconsModule` into your app's root and shared modules.

```ts
import { MaterialIconsModule } from 'ionic2-material-icons';

@NgModule({
  ...
  imports: [
    ...
    MaterialIconsModule 
  ]
})
```

### Add copy command
Add this code to your `package.json`:
```json
"config": {
  "ionic_copy": "./copy.config.js"
}
```

Create a new file named `copy.config.js` in your app's root directory, and add the following content to it:
```js
module.exports = {
  copyMaterialIcons: {
    src: ['{{ROOT}}/node_modules/ionic2-material-icons/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  }
};
```

