import { data } from './inicial.js';
import { Item } from './Item.js';
function app() {
    data;
    let selector = '.toDoList';
    data.forEach((item) => new Item(item, selector));
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
