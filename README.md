# Math Term

> Write mathematical expressions in your web page.

**Suported Versions:**
![KaTeX](https://img.shields.io/badge/KaTeX->=0.16.21-blue)

A custom element to render mathematical expressions in a web page using [KaTeX](https://katex.org/). Write in [LaTeX](https://www.latex-project.org/) and enjoy!

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

> [!CAUTION]
> When the LaTeX syntax is incorrect, the expression will be rendered as plain text in red. Make sure to write valid LaTeX expressions.

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

## 💡 Do you want to learn more?

* Get use to write LaTeX expressions with [Overleaf](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes).

## Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

## Technologies Used

<table style="border: none;">
  <tr>
    <td align="center">
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="42" height="42" /><br/>
        <b>TypeScript</b><br/>
      </a>
    </td>
    <td align="center">
      <a href="https://katex.org/" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/31191489?s=200&v=4" alt="KaTeX" width="42" height="42" /><br/>
        <b>KaTeX</b><br/>
      </a>
    </td>
  </tr>
</table>

## License

Released under the [MIT License](/LICENSE) by [@MetalbolicX](https://github.com/MetalbolicX)

