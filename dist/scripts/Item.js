/* eslint-disable no-unused-vars */
import { Component } from './component.js';
export class Item extends Component {
    tarea;
    template;
    constructor(tarea, selector) {
        super();
        this.tarea = tarea;
        this.template = this.createItem();
        this.render(selector);
    }
    createItem() {
        const template = `<div class="toDoList__block">
                    <label class="checkbox">
                        <input type="checkbox" name="" id="" />
                    </label>
                    <div class="toDoList__item">
                        <li class="toDoList__text">${this.tarea.id}</li>
                        <li class="toDoList__text">${this.tarea.name}</li>
                        <li class="toDoList__text">${this.tarea.responsable}</li>
                    </div>
                </div>
                `;
        return template;
    }
}
