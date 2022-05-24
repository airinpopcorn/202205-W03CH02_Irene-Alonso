export class Tarea {
    isComplete;
    constructor(
        public id: number,
        public name: string,
        public responsable: string
    ) {
        this.id = id;
        this.name = name;
        this.responsable = responsable;
        this.isComplete = false;
    }
}
