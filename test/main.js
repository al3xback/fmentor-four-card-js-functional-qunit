import jsdom from 'jsdom';

import {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createSectionEl,
	createMainEl,
	createFooterEl,
} from '../js/util.js';

const { JSDOM } = jsdom;
const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	test("should be able to create element via 'createElement' function", (assert) => {
		const headingOneEl = createElement('h1', 'title', 'Lorem ipsum');
		document.body.appendChild(headingOneEl);

		const isHeadingOneElElExist = !!document.querySelector('.title');
		assert.ok(isHeadingOneElElExist);
	});

	test("should be able to return element attribute data via 'createElementAttribute' function", (assert) => {
		const widthData = createElementAttribute('width', 640);

		const expectedWidthData = {
			name: 'width',
			value: 640,
		};

		assert.deepEqual(widthData, expectedWidthData);
	});

	test("should be able to create header element via 'createHeaderEl' function", (assert) => {
		const headerEl = createHeaderEl();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	test("should be able to create section element via 'createSectionEl' function", (assert) => {
		const sectionEl = createSectionEl();
		document.body.appendChild(sectionEl);

		const isSectionElExist = !!document.querySelector('.section');
		assert.ok(isSectionElExist);
	});

	test("should be able to create main element via 'createMainEl' function", (assert) => {
		const mainEl = createMainEl();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	test("should be able to create footer element via 'createFooterEl' function", (assert) => {
		const footerEl = createFooterEl();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
