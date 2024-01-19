import { createHeaderEl, createMainEl, createFooterEl } from './util.js';

/* initApp */
const body = document.body;

const headerEl = createHeaderEl();
const mainEl = createMainEl();
const footerEl = createFooterEl();

body.appendChild(headerEl);
body.appendChild(mainEl);
body.appendChild(footerEl);
