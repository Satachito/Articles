class
Header extends HTMLElement {
	constructor() {
		super()
		this.style.backgroundColor = 'lightgreen'
		this.innerHTML = 'HEADER'
	}
}
customElements.define( 'vanilla-header', Header )

class
Footer extends HTMLElement {
	constructor() {
		super()
		this.style.backgroundColor = 'lightgreen'
		this.innerHTML = 'FOOTER'
	}
}
customElements.define( 'vanilla-footer', Footer )
