import { css as a, property as s, customElement as p, LitElement as h, html as c } from "@umbraco-cms/backoffice/external/lit";
var b = Object.defineProperty, m = Object.getOwnPropertyDescriptor, u = (t, n, d, i) => {
  for (var e = i > 1 ? void 0 : i ? m(n, d) : n, l = t.length - 1, r; l >= 0; l--)
    (r = t[l]) && (e = (i ? r(n, d, e) : r(e)) || e);
  return i && e && b(n, d, e), e;
};
let o = class extends h {
  constructor() {
    super(...arguments), this.addButton = !1, this.buttonText = "", this.selectedContentItem = null;
  }
  render() {
    return c`
      <!-- Checkbox: Ask if a button should be added -->
      <uui-checkbox 
        id="add-button-checkbox" 
        label="Add Button?" 
        .checked=${this.addButton}
        @change=${this._onAddButtonChanged}>
      </uui-checkbox>

      <!-- Conditionally show the text input and content picker -->
      ${this.addButton ? c`
        <br />
        <label>Button Text</label>
        <uui-input 
          id="button-text" 
          label="Button Text" 
          .value=${this.buttonText}
          @input=${this._onButtonTextInput}>
        </uui-input>
        <label>Content Picker</label>

<umb-control-group label="Parent Node ID" description="Where the child nodes will be added">
    <input type="text" class="umb-editor umb-textstring" ng-model="rootNodeId" required />
</umb-control-group>
<umb-date-time-picker> </<umb-date-time-picker>

        <umb-content-picker
          id="content-picker"
          label="Select Content"
          single-selection
          .selectedItem=${this.selectedContentItem}
          @change=${this._onContentPickerChange}>
        </umb-content-picker>
      ` : ""}
    `;
  }
  _onAddButtonChanged(t) {
    const n = t.target;
    this.addButton = n.checked, this.addButton || (this.buttonText = "", this.selectedContentItem = null);
  }
  _onButtonTextInput(t) {
    this.buttonText = t.target.value;
  }
  _onContentPickerChange(t) {
    this.selectedContentItem = t.detail.selectedItem;
  }
};
o.styles = [
  a`
      :host {
        display: block;
        margin: 10px;
      }
  
    `
];
u([
  s({ type: Boolean })
], o.prototype, "addButton", 2);
u([
  s({ type: String })
], o.prototype, "buttonText", 2);
u([
  s({ type: Object })
], o.prototype, "selectedContentItem", 2);
o = u([
  p("my-suggestions-property-editor-ui")
], o);
export {
  o as default
};
//# sourceMappingURL=button-editor.js.map
