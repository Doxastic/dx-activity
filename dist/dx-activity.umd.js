(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.dxActivity = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    var prototype = Object.create(HTMLElement.prototype);

    module.exports = document.registerElement('dx-activity', {

        prototype: prototype

    });
});