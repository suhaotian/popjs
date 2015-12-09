'use strict'

function pop() {
	this.doc = document
	this.body = this.doc.body
	this.container = this.doc.createElement('div')
	return this
}

var p = pop.prototype

p.alert = function (msg) {
	var tpl = '<div>' + msg+ '</div>'
	this.container.innerHTML = tpl
	return this
}

p.toast = function (msg) {
	
}

p.confrim = function () {
	
}

p.prompt = function () {
	
}

p.show = function () {
	if (this.doc.body.contains(this.container)) {
		this.container.style.display = "block"
	} else {
		this.doc.body.appendChild(this.container)
	}
	return this
}

p.hide = function () {
	this.container.style.display = "none"
	return this
}

p.destroy = function () {
	this.doc.body.removeChild(this.container)
	return this
}

