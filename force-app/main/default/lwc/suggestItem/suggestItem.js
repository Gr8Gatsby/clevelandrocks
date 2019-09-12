import { LightningElement, api } from 'lwc';

export default class SuggestItem extends LightningElement {
    @api item;

    handleClick(event) {
        console.log('I was clicked');
        this.dispatchEvent(new CustomEvent('suggest', { bubbles: true, composed: true, detail: this.item.slice() }));
    }
}