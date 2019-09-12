import { LightningElement, track } from 'lwc';

export default class Search extends LightningElement {

    @track inputName;
    @track suggestionsHidden = true;

    handleInput(event) {
        const searchEvent = new CustomEvent('search', {
            detail: event.target.value
        });

        this.dispatchEvent(searchEvent);
        this.suggestionsHidden = false;
    }

    handleSuggest(event) {
        this.inputName = event.detail.name;
        this.suggestionsHidden = true;
    }
}