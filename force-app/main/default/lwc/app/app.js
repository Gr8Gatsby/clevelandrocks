import { LightningElement } from 'lwc';
import {peopleData} from 'c/data';

export default class App extends LightningElement {
    person = peopleData;
}