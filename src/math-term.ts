import katex from "katex";

/**
 * Custom Web Component for rendering mathematical expressions using KaTeX.
 * The component observes changes to its text content and updates the rendering accordingly.
 *
 * @element math-term
 * @attr {boolean} displayBlockMode - If present, renders the expression in block mode.
 */
class MathTerm extends HTMLElement {
  /** The output container where the math expression is rendered. */
  #outputElement: HTMLDivElement = document.createElement("div");
  /** The element displaying error messages. */
  #errorElement: HTMLSpanElement | null = null;
  /** Observer for detecting changes in the component's text content. */
  #observer: MutationObserver = new MutationObserver(() => this.#renderMath());

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // Add styles to the shadow root
    const style = document.createElement("style");
    style.textContent = MathTerm.styles;
    this.shadowRoot!.append(style);
    // Create the output element
    this.outputElement.id = "math-container";
    this.shadowRoot!.append(this.outputElement);
  }

  /** Called when the element is added to the DOM. Starts observing content changes. */
  connectedCallback(): void {
    this.#renderMath();
    this.observer.observe(this, { childList: true, subtree: true });
  }

  /** Called when the element is removed from the DOM. Stops observing content changes. */
  disconnectedCallback(): void {
    this.observer.disconnect();
  }

  /**
   * Attempts to render the mathematical expression using KaTeX.
   * If rendering fails, an error message is displayed.
   */
  #renderMath(): void {
    const expression = this.textContent?.trim() ?? "";

    if (!expression) {
      this.#showError("No expression provided");
      return;
    }

    try {
      this.#clearError();
      katex.render(expression, this.outputElement, {
        throwOnError: false,
        output: "mathml",
        displayMode: this.hasAttribute("displayBlockMode"),
      });
    } catch (_err) {
      this.#showError("Invalid expression");
    }
  }

  /**
   * Displays an error message when the expression is invalid.
   * @param {string} message - The error message to display.
   */
  #showError(message: string): void {
    if (this.errorElement) return;
    this.#errorElement = document.createElement("span");
    this.#errorElement.className = "error";
    this.#errorElement.textContent = message;
    this.shadowRoot!.append(this.#errorElement);
  }

  /** Clears the error message if it is present. */
  #clearError(): void {
    if (!this.errorElement) return;
    this.errorElement.remove();
    this.#errorElement = null;
  }

  public static get styles(): string {
    return /*css*/ `
      #math-container {
        text-align: center;
        transition: transform 0.2s ease-in-out;
      }

      .error {
        display: flex;
        align-items: center;
        color: white;
        background-color: #d32f2f; /* Red */
        border: 1px solid #b71c1c; /* Darker Red */
        padding: 0.6em;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
        margin-top: 0.6em;
        position: relative;
        animation: fadeIn 0.3s forwards;

        &:hover {
          background-color: #c62828;
        }

        &::after {
          content: " ❌";
          font-size: 1.2em;
          margin-left: 0.5em;
        }
    `;
  }

  protected get outputElement() {
    return this.#outputElement;
  }

  protected get errorElement() {
    return this.#errorElement;
  }

  protected get observer() {
    return this.#observer;
  }
}

if (!customElements.get("math-term")) {
  customElements.define("math-term", MathTerm);
} else {
  console.error("MathTerm already defined");
}
