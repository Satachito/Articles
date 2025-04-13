class
VanillaEscape extends HTMLElement {
	constructor() {
		super()
		this.textContent = this.getAttribute( 'data-html' )
	}
}
customElements.define( 'v-e', VanillaEscape )
