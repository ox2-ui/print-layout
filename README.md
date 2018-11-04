### Package is no longer maintaned.

# @ox2/print-layout
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/print-layout.svg?style=flat) -->


Wrapper component for printable page layout.

## Features

* **Dynamic Fonts** Load font dynamicly from google.
* **Global styles** Predefined global styles for print layout.

## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/print-layout --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/print-layout
```

## Usage
```js
import PrintLayout from '@ox2/print-layout/PrintLayout';

const fonts = [
  { importName: 'Baloo+Bhaina', family: 'Baloo Bhaina'},
  { importName: 'Pacifico', family: 'Pacifico'},
  { importName: 'Amatic+SC', family: 'Amatic SC'},
];

<PrintLayout
  bodyFont={'Amatic SC'}
  fonts={fonts}
>
  <h1 style={{fontFamily: 'Baloo Bhaina'}}>Baloo Bhaina - Mist enveloped the ship three hours out from port.</h1>
  <h1 style={{fontFamily: 'Pacifico'}}>Pacifico - Mist enveloped the ship three hours out from port.</h1>
  <h1>Body font - Amatic SC - Mist enveloped the ship three hours out from port.</h1>
</PrintLayout>

```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/print-layout/blob/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/print-layout/blob/master/LICENSE)
