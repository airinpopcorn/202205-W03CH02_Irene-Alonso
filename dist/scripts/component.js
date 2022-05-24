export class Component {
    //Clase abstracta, solo sirve para que la hereden sus hijos
    template;
    render(selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).innerHTML +=
                this.template;
        }
    }
}
