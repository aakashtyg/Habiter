const habits = [
  {
    id: 1,
    name: 'Workout',
    progress: [
      {
        id: 1,
        date: 'today',
        status: 1, // Status 1 => Done, 0 => Not done, null => No user action
      },
      {
        id: 2,
        date: 'Sat',
        status: 1,
      },
      {
        id: 3,
        date: 'Fri',
        status: null,
      },
      {
        id: 4,
        date: 'Thur',
        status: 0,
      },
      {
        id: 5,
        date: 'Wed',
        status: 0,
      },
      {
        id: 6,
        date: 'Tue',
        status: null,
      },
      {
        id: 7,
        date: 'Mon',
        status: null,
      },
    ],
  },
  {
    id: 2,
    name: 'Reading book',
    progress: [
      {
        id: 1,
        date: 'today',
        status: null,
      },
      { id: 2, date: 'Sat', status: null },
      { id: 3, date: 'Fri', status: 0 },
      { id: 4, date: 'Thur', status: 1 },
      { id: 5, date: 'Wed', status: 1 },
      { id: 6, date: 'Tue', status: 1 },
      { id: 7, date: 'Mon', status: 1 },
    ],
  },
];

export default habits;
