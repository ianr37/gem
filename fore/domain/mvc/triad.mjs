
export class MvcTriad {

    constructor(model, view, controller)
    {
        this.model = model;
        model.triad = this;
        this.view = view;
        view.triad = this;
        this.controller = controller;
        controller.triad = this;
    }

    attachTo(parent) {
        parent.appendChild(this.view.root);
    }

}

