import { LightningElement, track } from 'lwc';
import { peopleData } from 'c/data';

export default class Search extends LightningElement {
    suggestResults = peopleData;
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