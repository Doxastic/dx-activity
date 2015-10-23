define(['exports', 'module'], function (exports, module) {
    'use strict';

    var prototype = Object.create(HTMLElement.prototype);

    module.exports = document.registerElement('dx-activity', {

        prototype: prototype

    });
});