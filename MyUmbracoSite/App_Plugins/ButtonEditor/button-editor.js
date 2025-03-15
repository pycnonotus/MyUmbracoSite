import { css as h, property as r, customElement as b, LitElement as c, html as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as p } from "@umbraco-cms/backoffice/property-editor";
var v = Object.defineProperty, g = Object.getOwnPropertyDescriptor, i = (t, e, n, l) => {
  for (var s = l > 1 ? void 0 : l ? g(e, n) : e, u = t.length - 1, d; u >= 0; u--)
    (d = t[u]) && (s = (l ? d(e, n, s) : d(s)) || s);
  return l && s && v(e, n, s), s;
};
let o = class extends c {
  constructor() {
    super(...arguments), this._value = "", this.buttonEnabled = !1, this.buttonText = "", this.selectedContent = null, this._validationErrors = [];
  }
  get value() {
    return this._value;
  }
  set value(t) {
    const e = this._value;
    typeof t != "string" ? this._value = JSON.stringify(t) : this._value = t;
    try {
      const n = typeof t == "string" ? JSON.parse(t || "{}") : t || {};
      this.buttonEnabled = !!n.buttonEnabled, this.buttonText = n.buttonText || "", this.selectedContent = n.selectedContent || null;
    } catch (n) {
      console.error("Error parsing value:", n);
    }
    this.requestUpdate("value", e);
  }
  render() {
    return a`
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
            ${this.buttonEnabled ? a`
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
                    ` : ""}
            ${this._validationErrors.length ? a`
            <div class="error-messages">
              ${this._validationErrors.map(
      (t) => a`<p>${t}</p>`
    )}
            </div>
          ` : ""}
        `;
  }
  _onCheckboxChange(t) {
    const e = t.target;
    this.buttonEnabled = e.checked, this._updateValue(), console.log("Button enabled:", this.buttonEnabled);
  }
  _onTextInput(t) {
    const e = t.target;
    this.buttonText = e.value, this._updateValue(), console.log("Button text:", this.buttonText);
  }
  _onContentChange(t) {
    this.selectedContent = t.target.selection, this._updateValue(), console.log("Selected content:", this.selectedContent);
  }
  // Validate the required fields. Returns true if valid, false otherwise.
  validate() {
    return this._validationErrors = [], this.buttonEnabled && ((!this.buttonText || this.buttonText.trim() === "") && this._validationErrors.push("Button text is required."), this.selectedContent || this._validationErrors.push("Content selection is required.")), this.requestUpdate(), this._validationErrors.length === 0;
  }
  // Serialize the current state and dispatch a change event.
  _updateValue() {
    const t = JSON.stringify({
      buttonEnabled: this.buttonEnabled,
      buttonText: this.buttonText,
      selectedContent: this.selectedContent
    });
    this._value = t, this.dispatchEvent(new p());
  }
};
o.styles = h`
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
i([
  r({ type: String })
], o.prototype, "value", 1);
i([
  r({ type: Boolean })
], o.prototype, "buttonEnabled", 2);
i([
  r({ type: String })
], o.prototype, "buttonText", 2);
i([
  r({ type: Object })
], o.prototype, "selectedContent", 2);
i([
  r({ type: Array })
], o.prototype, "_validationErrors", 2);
o = i([
  b("my-button-property-editor-ui")
], o);
export {
  o as default
};
//# sourceMappingURL=button-editor.js.map
