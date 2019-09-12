import { LightningElement } from 'lwc';
import { peopleData } from 'c/data';

export default class Org extends LightningElement {

    //TODO: es6 class to turn data into a tree

    //TODO: auto complete based on key phrase from search team

    //TODO: return results from tree on click event
    setTeamName(key, teamName){
        const result = generateTree(key)
            .map(branch => branch.key)
            .filter(branch => branch.key === key)
            .reduce((acc, cur) => ({
                ...acc,
                ...cur
            }), {});
        result.team = teamName;
    }
}