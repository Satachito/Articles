import {
	FetchText
,	AlertForFetch
,	ExpandTab
} from './SAT/SAT.js'

class
VanillaSource extends HTMLElement {
	constructor() {
		super()
		this.style.display		= 'block'
		this.style.marginTop	= '1rem'
		this.style.color		= 'blue'
		this.innerHTML = `
			<div></div>
			<textarea style="width: 100%; box-sizing: border-box" readonly></textarea>
		`
		this.children[ 0 ].textContent = this.dataset.file
		FetchText( this.dataset.file ).then(
			_ => (
				this.children[ 1 ].value = ExpandTab( _ )
			,	this.children[ 1 ].rows = _.split( '\n' ).length
			)
		).catch( AlertForFetch )
	}
}
customElements.define( 'vanilla-source', VanillaSource )

class
VanillaFrame extends VanillaSource {
	constructor() {
		super()
		this.innerHTML += `<iframe style="border: none" src=${this.dataset.file}></iframe>`
	}
}
customElements.define( 'vanilla-frame', VanillaFrame )

