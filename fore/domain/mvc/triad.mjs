
export class MvcTriad {

    constructor(model, view, controller)
    {
        this.model = model;
        this.view = view;
        this.controller = controller;
        this.view.model = this.model;
        this.view.controller = this.controller;
        this.controller.model = this.model;
        this.controller.view = this.view;
    }

    attachTo(parent) {
        parent.appendChild(this.view.root);
    }

}

