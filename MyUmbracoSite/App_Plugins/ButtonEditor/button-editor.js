import { css as d, property as a, customElement as c, LitElement as h, html as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as p } from "@umbraco-cms/backoffice/property-editor";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (t, e, n, i) => {
  for (var o = i > 1 ? void 0 : i ? f(e, n) : e, r = t.length - 1, u; r >= 0; r--)
    (u = t[r]) && (o = (i ? u(e, n, o) : u(o)) || o);
  return i && o && g(e, n, o), o;
};
let s = class extends h {
  constructor() {
    super(...arguments), this._value = "", this.buttonEnabled = !1, this.buttonText = "", this.selectedContent = null;
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
    return b`
            <!-- Checkbox to enable/disable button settings -->
            <div class="form-field">
                <label for="button-toggle">Button Enabled</label>
                <uui-checkbox
                        id="button-toggle"
                        .checked=${this.buttonEnabled}
                        @change=${this._onCheckboxChange}>
                </uui-checkbox>
            </div>

            <!-- Render text input and content picker only if the button is enabled -->
            ${this.buttonEnabled ? b`
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
  // Handler for the content picker's change event.
  _onContentChange(t) {
    this.selectedContent = t.target.selection, this._updateValue(), console.log("Selected content:", this.selectedContent);
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
s.styles = d`
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
    `;
l([
  a({ type: String })
], s.prototype, "value", 1);
l([
  a({ type: Boolean })
], s.prototype, "buttonEnabled", 2);
l([
  a({ type: String })
], s.prototype, "buttonText", 2);
l([
  a({ type: Object })
], s.prototype, "selectedContent", 2);
s = l([
  c("my-button-property-editor-ui")
], s);
export {
  s as default
};
//# sourceMappingURL=button-editor.js.map
