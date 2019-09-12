import { LightningElement, track, api } from 'lwc';

export default class SearchCategory extends LightningElement {
	@track _category = 'Name';

	@api
	set category(value) {
		this._category = value;
	}
	
	handleCategoryChange(event) {
		event.preventDefault();

		const categorySelectedEvent = new CustomEvent('categoryselected', { detail: this._category });

		this.dispatchEvent(categorySelectedEvent);
	}

	get options() {
		return [
			{ label: 'Name', value: 'Name' },
			{ label: 'Team', value: 'Team' },
			{ label: 'Title', value: 'Title' },
		];
	}
}