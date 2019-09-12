# Creating an Organization Tree Experience

## Overview
This repository is used to help facilitate a classroom exercise to have three teams build an Organization Tree experience. Each team will spend sometime designing their approach and coordinate with the other teams to deliver an integrated solution.

Target design time: 30 minutes
Target development time: 1 hour 15 minutes
Target integration time: 30 minutes

## Rough Design

![Rough Design](https://i.imgur.com/6YMPCw5.png)

## Data
This is a sample data set that can be used for JavaScript approach
```javascript
var peopleData = [
  { key: 1, name: "Stella Smith", title: "CEO" },
  { key: 2, name: "Luke Leonard", title: "VP Marketing/Sales", parent: 1 },
  { key: 3, name: "Meg McDonald", title: "Sales", parent: 2 },
  { key: 4, name: "Peggy Pierce", title: "VP Engineering", parent: 1 },
  { key: 5, name: "Saul Skipton", title: "Manufacturing", parent: 4 },
  { key: 6, name: "Albert Aimes", title: "Marketing", parent: 2 },
  { key: 7, name: "Dotty Dillard", title: "Sales Rep", parent: 3 },
  { key: 8, name: "Lester Little", title: "Project Mgr", parent: 5 },
  { key: 9, name: "April Adams", title: "Events Mgr", parent: 6 },
  { key: 10, name: "Henry Hansel", title: "Engineering", parent: 4 },
  { key: 11, name: "Anita Avery", title: "Process", parent: 5 },
  { key: 12, name: "Suzy Stanley", title: "Software", parent: 10 },
  { key: 13, name: "Lucky Laine", title: "Testing", parent: 10 },
  { key: 14, name: "Marge Mcphee", title: "Hardware", parent: 10 },
  { key: 15, name: "Evan Elpus", title: "Quality", parent: 5 },
  { key: 16, name: "Teresa Tucker", title: "Sales Rep", parent: 3 }
];

export { peopleData };
```

This is a sample dataset that can be used for an HTML declarative approach
```html
<c-person person-key="1" person-name="Stella Smith" person-title="CEO" person-team="" person-boss=""></c-person>
<c-person person-key="2" person-name="Luke Leonard" person-title="VP Marketing/Sales" person-team="" person-boss="1"></c-person>
<c-person person-key="3" person-name="Meg McDonald" person-title="Sales" person-team="" person-boss="2"></c-person>
<c-person person-key="4" person-name="Peggy Pierce" person-title="VP Engineering" person-team="" person-boss="1"></c-person>
<c-person person-key="5" person-name="Saul Skipton" person-title="Manufacturing" person-team="" person-boss="4"></c-person>
<c-person person-key="6" person-name="Albert Aimes" person-title="Marketing" person-team="" person-boss="2"></c-person>
<c-person person-key="7" person-name="Dotty Dillard" person-title="Sales Rep" person-team="" person-boss="3"></c-person>
<c-person person-key="8" person-name="Lester Little" person-title="Project Mgr" person-team="" person-boss="5"></c-person>
<c-person person-key="9" person-name="April Adams" person-title="Events Mgr" person-team="" person-boss="6"></c-person>
<c-person person-key="10" person-name="Henry Hansel" person-title="Engineering" person-team="" person-boss="4"></c-person>
<c-person person-key="11" person-name="Anita Avery" person-title="Process" person-team="" person-boss="5"></c-person>
<c-person person-key="12" person-name="Suzy Stanley" person-title="Software" person-team="" person-boss="10"></c-person>
<c-person person-key="13" person-name="Lucky Laine" person-title="Testing" person-team="" person-boss="10"></c-person>
<c-person person-key="14" person-name="Marge Mcphee" person-title="Hardware" person-team="" person-boss="10"></c-person>
<c-person person-key="15" person-name="Evan Elpus" person-title="Quality" person-team="" person-boss="5"></c-person>
<c-person person-key="16" person-name="Teresa Tucker" person-title="Sales Rep" person-team="" person-boss="3"></c-person>
```

## Teams Overview

| Team Name | Main Goal                                                    |
| --------- | ------------------------------------------------------------ |
| C-ORG     | Orchestrate data and application level events                |
| C-SEARCH  | Provide a category search experience with auto-complete      |
| C-PEOPLE  | Render people information while providing metadata for teams |

### C-ORG Team

The top level org component focuses only on data and orchestration for the entire Org tree, but itself does not render any UI.

User Stories:
* As an orchestration component I will provide `c-search` with autocomplete data
* As an orchestration component I will provide `c-people` with parent/child data for people in an organization
* As an orchestration component I will listen and respond to `Search` events
* As an orchestration component I will update `c-people` data based on `Search` events to re-render the org based on the person returned from search
  * *BONUS* As an orchestration component I will update `c-people` data based on `Search` results for the full path of the user
* As an orchestration component I will update `c-people` data based on `NewTeamMember` events

Components that might be helpful to build:
* `c-org` - The cordination component for an Org
* `c-person` - a component for declaratively putting data inside of the c-org component
* `c-tree` - an ES6 class to help with creating a Tree object from the flat list of data

### C-SEARCH Team

The search team provides a search experience and receives auto-complete data for categories (name, title, team) from the c-org team.

User Stories:
* As an end-user I am able to search for people within an Org based on name, title, and team so that I can filter the organization view
* As an end-user I am able to see search suggestions based on name, title, and team so that I can quickly select a precise search suggestion and see the org tree filter
* *BONUS* As an end-user I am able to pre-select a catagory based on name, title, or team to filter the results based on one category so that I can have 
* As a search component I will notify `c-org` when a user submits a search

Components that might be helpful to build:
* `c-search` - The core component to handle input from an end-user for search terms
* `c-suggest` - This component will render suggestions based off of the people dataset 

HTML Elements that could be useful to use:
* select - For category selection of a search topic (e.g. Name, Title, Team)

### C-PEOPLE Team

The people team provides recursive rendering of a people within an Organizational Hierarchy

User Stories:
* As a user of the org component I will see the org hierarchy, so that I understand employee and boss reporting sturctures
* As a user of the org component I can associate a person with a team, so that I can see people that work with each other across org boundries
* As a person component I will notify `c-org` when a *NewTeamMember* has been added to a team, so that `c-search` can expose this data appropriately in search
* As a person component I will use a known list of teams so that team names are consisten
* *BONUS* As a person component I will create a Team View based on `c-search` results for a team

Components that might be helpful to build:
* `c-people` - A recursive template to render the org hierarchy
* `c-card` - A surface to render core people informaton and have UI that allows for editing a team

HTML elements that could be helpful:
* select - Potentially to have Team names as a drop-down
* input - for team name entry
* button - Maybe to save a team name if using input