# Math Term

> Write mathematical expressions in your web page.

![katex](https://img.shields.io/npm/v/math-term?color=blue&label=npm)

A custom element to render mathematical expressions in a web page using [KaTeX](https://katex.org/). Write in [LaTex](https://www.latex-project.org/) and enjoy!

## 📦 Installation

### Using npm
To install the component, run the following command in your project directory:

```sh
npm i math-term
```

If your are creating a project with a bundler like Webpack, Rollup, or Parcel, you can `import` the component in your JavaScript/TypeScript file:

```js
import 'math-term';
```

### Using a CDN

You can also use a CDN to include the component in your project. Add the following script tag to your HTML file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/math-term/dist/math-term.js"></script>
```

or

```html
<script type="module" src="https://unpkg.com/math-term/dist/math-term.js"></script>
```

## 🚀 Usage

In the **body** of the HTML file, add the `math-term` component and provide the mathematical expression. For example:

```html
<math-term>f(x) = \frac{1}{x}</math-term>
```

## Full Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Math component</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/math-term/dist/math-term.js"></script>
  </head>
  <body>
    <math-term>f(x) = \frac{1}{x}</math-term>
  </body>
</html>
```

## ⚙️ Attributes

|Attribute|Type|Description|
|---|---|---|
|displayBlockMode|boolean|If true, renders the math expression in block mode instead of inline mode.|

## 💡 Notes

* Uses KaTeX for rendering.
* Any mathematical expression can be written in LaTeX syntax.

## License

This project is licensed under the MIT License.

