import { LightningElement } from 'lwc';

export default class Search extends LightningElement {

    handleInput(event) {
        const searchEvent = new CustomEvent('search', {
            detail: event.target.value
        });

        this.dispatchEvent(searchEvent);
    }
}