"use strict";
function app() {
    return console.log('Hola');
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
