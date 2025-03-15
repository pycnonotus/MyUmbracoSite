import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement, UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";

@customElement('my-button-property-editor-ui')
export default class MyButtonPropertyEditorUIElement extends LitElement implements UmbPropertyEditorUiElement {
    // Internal storage for the serialized value
    private _value: string = '';

    @property({ type: String })
    public get value(): string {
        return this._value;
    }
    public set value(newValue: string | object) {
        const oldValue = this._value;
        if (typeof newValue !== "string") {
            this._value = JSON.stringify(newValue);
        } else {
            this._value = newValue;
        }
        try {
            const data =
                typeof newValue === "string"
                    ? JSON.parse(newValue || "{}")
                    : newValue || {};
            this.buttonEnabled = !!data.buttonEnabled;
            this.buttonText = data.buttonText || "";
            this.selectedContent = data.selectedContent || null;
        } catch (e) {
            console.error("Error parsing value:", e);
        }
        this.requestUpdate("value", oldValue);
    }

    @property({ type: Boolean })
    public buttonEnabled = false;

    @property({ type: String })
    public buttonText = "";

    // The selected content node (if any)
    @property({ type: Object })
    public selectedContent: any = null;

    // Optional property to hold validation errors
    @property({ type: Array })
    private _validationErrors: string[] = [];

    static styles = css`
    :host {
      display: block;
      padding: 1rem;
      font-family: Arial, sans-serif;
    }
    .form-field {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .required {
      color: red;
    }
    .error-messages {
      color: red;
      margin-top: 0.5rem;
    }
  `;

    render() {
        return html`
            <!-- Checkbox to enable/disable button settings -->
            <div class="form-field">
                <label for="button-toggle">Button Enabled</label>
                <uui-checkbox
                        id="button-toggle"
                        .checked=${this.buttonEnabled}
                        @change=${this._onCheckboxChange}>
                </uui-checkbox>
            </div>

            <!-- Render text input and content picker only if button is enabled -->
            ${this.buttonEnabled
                    ? html`
                        <div class="form-field">
                            <label for="button-text">
                                Button Text <span class="required">*</span>
                            </label>
                            <uui-input
                                    id="button-text"
                                    .value=${this.buttonText}
                                    @input=${this._onTextInput}
                                    required>
                            </uui-input>
                        </div>
                        <div class="form-field">
                            <label>
                                Button Content <span class="required">*</span>
                            </label>
                            <div class="flex-container">
                                <umb-input-content
                                        .min=${1}
                                        .max=${1}
                                        .selection=${this.selectedContent}
                                        @change=${this._onContentChange}
                                        required>
                                </umb-input-content>
                            </div>
                        </div>
                    `
                    : ""}
            ${this._validationErrors.length
                    ? html`
            <div class="error-messages">
              ${this._validationErrors.map(
                            (error) => html`<p>${error}</p>`
                    )}
            </div>
          `
                    : ""}
        `;
    }

    private _onCheckboxChange(e: CustomEvent) {
        const target = e.target as HTMLInputElement;
        this.buttonEnabled = target.checked;
        this._updateValue();
        console.log("Button enabled:", this.buttonEnabled);
    }

    private _onTextInput(e: Event) {
        const target = e.target as HTMLInputElement;
        this.buttonText = target.value;
        this._updateValue();
        console.log("Button text:", this.buttonText);
    }

    private _onContentChange(e: CustomEvent & { target: any }) {
        // Assume the picker exposes the selection in a property called 'selection'
        this.selectedContent = e.target.selection;
        this._updateValue();
        console.log("Selected content:", this.selectedContent);
    }

    // Validate the required fields. Returns true if valid, false otherwise.
    public validate(): boolean {
        this._validationErrors = [];
        if (this.buttonEnabled) {
            if (!this.buttonText || this.buttonText.trim() === "") {
                this._validationErrors.push("Button text is required.");
            }
            if (!this.selectedContent) {
                this._validationErrors.push("Content selection is required.");
            }
        }
        this.requestUpdate();
        return this._validationErrors.length === 0;
    }

    // Serialize the current state and dispatch a change event.
    private _updateValue() {
        const newValue = JSON.stringify({
            buttonEnabled: this.buttonEnabled,
            buttonText: this.buttonText,
            selectedContent: this.selectedContent,
        });
        this._value = newValue;
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-button-property-editor-ui": MyButtonPropertyEditorUIElement;
    }
}
