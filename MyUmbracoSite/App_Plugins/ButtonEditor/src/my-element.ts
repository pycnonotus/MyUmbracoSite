import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/property-editor";
// Explicitly import the content picker so that the custom element is registered:

@customElement("my-button-property-editor-ui")

export default class MySuggestionsPropertyEditorUIElement extends LitElement implements UmbPropertyEditorUiElement {
  @property({ type: Boolean })
  public addButton = false;

  @property({ type: String })
  public buttonText = "";

  // For a single content item, we'll store it as an object (or null if none selected)
  @property({ type: Object })
  public selectedContentItem: any = null;

  render() {
    return html`
      <!-- Checkbox: Ask if a button should be added -->
      <uui-checkbox 
        id="add-button-checkbox" 
        label="Add Button?" 
        .checked=${this.addButton}
        @change=${this._onAddButtonChanged}>
      </uui-checkbox>

      <!-- Conditionally show the text input and content picker -->
      ${this.addButton ? html`
        <br />
        <label>Button Text</label>
        <uui-input 
          id="button-text" 
          label="Button Text" 
          .value=${this.buttonText}
          @input=${this._onButtonTextInput}>
        </uui-input>
        <label>Content Picker</label>

    
      ` : ""}
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        margin: 10px;
      }
  
    `
  ];

  private _onAddButtonChanged(e: Event) {
    const target = e.target as HTMLInputElement;
    this.addButton = target.checked;
    if (!this.addButton) {
      // Clear the additional fields when unchecked.
      this.buttonText = "";
      this.selectedContentItem = null;
    }
  }

  private _onButtonTextInput(e: InputEvent) {
    this.buttonText = (e.target as HTMLInputElement).value;
  }

  
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button-property-editor-ui': MySuggestionsPropertyEditorUIElement;
  }
}