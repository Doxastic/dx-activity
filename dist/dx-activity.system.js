System.register([], function (_export) {
    'use strict';

    var prototype;
    return {
        setters: [],
        execute: function () {
            prototype = Object.create(HTMLElement.prototype);

            _export('default', document.registerElement('dx-activity', {

                prototype: prototype

            }));
        }
    };
});