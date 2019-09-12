import { LightningElement, track } from 'lwc';

export default class SearchCategory extends LightningElement {
	@track category
	
	changeCateogry(event) {
		event.preventDefault();

		const selectedCategoryEvent = new CustomEvent('selected', { detail: this.category });

		this.dispatchEvent(selectedCategoryEvent);
	}
}