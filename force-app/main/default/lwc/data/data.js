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
