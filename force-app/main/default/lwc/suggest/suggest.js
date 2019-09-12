import { LightningElement, api } from 'lwc';

export default class Suggest extends LightningElement {
    @api results = [];

    get hasResults() {
        return this.results.length > 0;
    }
}
