# Creating an Organization Tree Experience

## Overview

## Rough Design

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

### C-SEARCH Team

### C-PEOPLE Team
