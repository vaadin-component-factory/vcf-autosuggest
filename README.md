# &lt;vcf-autosuggest&gt;

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm version](https://badgen.net/npm/v/@vaadin-component-factory/vcf-autosuggest)](https://www.npmjs.com/package/@vaadin-component-factory/vcf-autosuggest)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadin-component-factoryvcf-autosuggest)

This is the npm version [vcf-autosuggest](https://github.com/vaadin-component-factory/vcf-autosuggest) developed using Polymer 3.

[Live demo ↗](https://vcf-autosuggest.netlify.com)
|
[API documentation ↗](https://vcf-autosuggest.netlify.com/api/#/elements/Vaadin.VcfAutoSuggest)

![screenshot](https://user-images.githubusercontent.com/3392815/67003977-ea44cd80-f0e7-11e9-971c-175bdc31407c.gif)

## Installation

Install `vcf-autosuggest`:

```sh
npm i @vaadin-component-factory/vcf-autosuggest --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-autosuggest';
```

Add `<vcf-autosuggest>` to the page. In attribute `options` you should declare options that will be offered for user to select. All change listener to the element in which you will update `options` appribute.

```html
<vcf-autosuggest id="demo1" label="Choose country" placeholder="Start typing a country name..." options="[[options]]">
</vcf-autosuggest>
```

## Running demo

1. Fork the `vcf-autosuggest` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-autosuggest` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Apache License 2