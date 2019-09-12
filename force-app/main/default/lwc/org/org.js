import { LightningElement } from 'lwc';
import { peopleData } from 'c/data.js';
import { registerSearchEvent } from 'c/searchEventAttacher.js';

export default class Org extends LightningElement {

	@track autoCompeteResults;

	connectedCallback() {
		registerSearchEvent('suggest', this.filterAutoSuggest, this);
	}

	filterAutoSuggest(event) {
		let matchingPeople = peopleData.filter(
			person => Object.keys(person).some(
				k => {return person[k].toString().toLowerCase().includes(event.criteria.toLowerCase());}
			)
		);
		this.autoCompeteResults = matchingPeople.map(person => person.name);
	}

}