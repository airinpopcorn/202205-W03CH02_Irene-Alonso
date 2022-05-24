import { data } from './inicial.js';
import { Item } from './Item.js';
import { Tarea } from './Tarea.js';

function app() {
    data;
    let selector = '.toDoList';
    data.forEach((item: Tarea) => new Item(item, selector));
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
