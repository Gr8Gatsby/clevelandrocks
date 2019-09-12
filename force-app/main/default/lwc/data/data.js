var peopleData = [
  {       
    key: 1,
    name: "Michael", 
    title:'CEO',
    team:'', 
    children: [
        {key: 2, name: "Matt", title:'VP', team: "", children: [
          {key: 2, name: "Steve", title:'VP', team: ""}, 
          {key: 3, name: "Trevor", title: "Sales", team: ""}
        ]}, 
        {key: 2, name: "Kirk", title:'VP', team: "", children: [
          {key: 2, name: "Kris", title:'VP', team: ""}, 
          {key: 3, name: "Zach", title: "Sales", team: ""}
        ]}
    ] 
  }
];

export { peopleData };
