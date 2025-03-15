import { css as p, property as i, customElement as c, LitElement as h, html as a } from "@umbraco-cms/backoffice/external/lit";
var b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, s = (e, n, d, u) => {
  for (var t = u > 1 ? void 0 : u ? x(n, d) : n, l = e.length - 1, r; l >= 0; l--)
    (r = e[l]) && (t = (u ? r(n, d, t) : r(t)) || t);
  return u && t && b(n, d, t), t;
};
let o = class extends h {
  constructor() {
    super(...arguments), this.addButton = !1, this.buttonText = "", this.selectedContentItem = null;
  }
  render() {
    return a`
      <!-- Checkbox: Ask if a button should be added -->
      <uui-checkbox 
        id="add-button-checkbox" 
        label="Add Button?" 
        .checked=${this.addButton}
        @change=${this._onAddButtonChanged}>
      </uui-checkbox>

      <!-- Conditionally show the text input and content picker -->
      ${this.addButton ? a`
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
  _onAddButtonChanged(e) {
    const n = e.target;
    this.addButton = n.checked, this.addButton || (this.buttonText = "", this.selectedContentItem = null);
  }
  _onButtonTextInput(e) {
    this.buttonText = e.target.value;
  }
};
o.styles = [
  p`
      :host {
        display: block;
        margin: 10px;
      }
  
    `
];
s([
  i({ type: Boolean })
], o.prototype, "addButton", 2);
s([
  i({ type: String })
], o.prototype, "buttonText", 2);
s([
  i({ type: Object })
], o.prototype, "selectedContentItem", 2);
o = s([
  c("my-button-property-editor-ui")
], o);
export {
  o as default
};
//# sourceMappingURL=button-editor.js.map
