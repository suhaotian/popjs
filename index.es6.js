'use strict'

class pop {
	constructor() {
		this.doc = document
		this.body = this.doc.body
		this.container = this.doc.createElement('div')
	}

	alert () {
		// body...
	}

	toast () {

	}

	confirm () {

	}

	prompt () {

	}

	show () {
		if (this.body.contains(this.container)) {
			this.container.style.display = 'block'
		} else {
			this.body.appendChild(this.container)
		}
	}

	hide () {
		this.container.style.display = 'none'
	}

	destroy () {
		this.body.removeChild(this.container)
	}

	_flush () {										// http://jsbin.com/qenuxojazi
		return this.documentElement.offsetWidth     // force layout render to add CSS 3 transition and animate
	}
}
å