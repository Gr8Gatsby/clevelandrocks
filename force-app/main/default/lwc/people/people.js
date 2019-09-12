import { LightningElement, api, track } from 'lwc';

export default class People extends LightningElement {
    @api person;
    @track collapsed = true;

    connectedCallback() {
        console.log(this.person);
    }

    handleClick() {
        this.collapsed = !this.collapsed;
    }
}