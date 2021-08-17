
import { readFileSync } from 'fs';

import { ExecutionEnvironment } from '../../fore/domain/index.mjs';
import { createDesktop } from '../../fore/adapters/index.mjs';
import { tasklets } from '../../fore/use-cases/index.mjs';

import { HTMLDocument } from  '../../fore/drivers/testing/index.mjs';

describe('the desktop', () => {

    let desktop = null;
    let workflows = null;
    const jsonFile = './fore/use-cases/workflow-definitions.json';

    beforeAll(() => {
        const jsonString = readFileSync(jsonFile);
        workflows = JSON.parse(jsonString);
    });

    beforeEach(() => {
        const document = new HTMLDocument();
        const parent = document.createElement('body');
        const logo = null;
        const env = new ExecutionEnvironment(document, parent, workflows, tasklets, logo);
        desktop = createDesktop(env);
    });

    it('should exist', () => {
        expect(desktop).toBeDefined(desktop);
    });

    it('should have a div as the root', () => {
        const root = desktop.view.root;
        expect(root.tagName).toEqual('div');
    });

    it('should be attached to the DOM', () => {
        const root = desktop.view.root;
        expect(root.parent.tagName).toEqual('body');
    });

    it('should be able to set the header', () => {
        const phrase = 'Mary had a little lamb';
        desktop.setHeaderText(phrase);
        const headerText = desktop.view.headerText;
        expect(headerText.innerText).toEqual(phrase);
    });

    it('should be able to set the footer', () => {
        const phrase = 'Mary had a little lamb';
        desktop.setFooterText(phrase);
        const footerText = desktop.view.footerText;
        expect(footerText.innerText).toEqual(phrase);
    });

    it('should be able to set the logo', () => {
        const path = '/logo.png';
        desktop.setLogo(path);
        const img = desktop.view.logo;
        expect(img.src).toEqual(path);
    });

    it('should be able to add a command to the menu', () => {
        const legend = 'Test Button';
        const command = 'Test Command';
        const parameters = {a: "A", b: "B"};
        desktop.addNavCommand(legend, command, parameters);
        const menu = desktop.view.menu;
        expect(menu.childCount()).toEqual(1);
        const button = [...menu.children][0];
        expect(button).toBeDefined();
        expect(button.tagName).toEqual('button');
        expect(button.innerText).toEqual(legend);
        expect(button.dataset.command).toEqual(command);
        expect(button.dataset.a).toEqual("A");
        expect(button.dataset.b).toEqual("B");
    });

    xit('should display the home page by default', () => {
        expect(desktop.controller.workflowStack.length).toEqual(1);
    });

});

