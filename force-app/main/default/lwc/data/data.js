var peopleData = 
  {       
    key: 1,
    name: "Michael", 
    title:'CEO',
    team:'', 
    children: [
        {key: 2, name: "Matt", title:'VP', team: "", children: [
          {key: 3, name: "Steve", title:'VP', team: ""}, 
          {key: 4, name: "Trevor", title: "Sales", team: "", children: [
            {key: 8, name: "This is", title:'VP', team: ""}, 
            {key: 9, name: "Chase", title: "Sales", team: ""} 
          ]}
        ]}, 
        {key: 5, name: "Kirk", title:'VP', team: "", children: [
          {key: 6, name: "Kris", title:'VP', team: ""}, 
          {key: 7, name: "Zach", title: "Sales", team: ""}
        ]}
      ]
  };

export { peopleData };
