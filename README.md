# Math Term Component

This is a custom web component for rendering mathematical expressions in a web page using [KaTeX](https://katex.org/). It allows you to easily display mathematical equations in your HTML pages. Just write a math expression and is done!

## 📦 Installation

### Using npm
To install the component, run the following command in your project directory:

```sh
npm i math-term
```

## 🚀 Usage

### In the browser

To use the web component, import it in a `script` tag in an HTML file:

```html
<script type="module" src="node_modules/math-term/dist/math-term.js" lang="javascript"></script>
```

Then, in the **body** of the HTML file, add the `math-term` component and provide the mathematical expression attribute:

```html
<math-term>f(x) = \frac{1}{x}</math-term>
```

### Full Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Math component</title>
    <script type="module" src="node_modules/math-term/dist/math-term.js" lang="javascript"></script>
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

