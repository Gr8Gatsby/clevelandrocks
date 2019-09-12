import { LightningElement, track } from 'lwc';
import { peopleData } from 'c/data';

export default class Search extends LightningElement {
    @track inputName;
    @track suggestionsHidden = true;

    suggestResults = [];

    handleInput(event) {
        const searchEvent = new CustomEvent('search', {
            detail: event.target.value
        });

        this.suggestResults = peopleData.filter(person => person.name.includes(this.inputName));

        this.dispatchEvent(searchEvent);
        this.suggestionsHidden = false;
    }

    handleSuggest(event) {
        this.inputName = event.detail.name;
        this.suggestionsHidden = true;
    }
}