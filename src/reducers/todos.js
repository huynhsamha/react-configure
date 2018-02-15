import actionTypes from '../actions/action-types';
import uniqid from 'uniqid';

const baseActions = [
  'Find out', 'Learn', 'Practice', 'Review', 'Build prject', 'Guide', 'Present'
];
const baseObjects = [
  'React', 'React Native', 'AngularJS', 'Angular 2', 'Angular 4', 'Angular 5', 'VueJS', 'EmberJS',
  'SQL', 'MySql', 'Postgres SQL', 'SQL Server', 'MSSQL', 'Oracle SQL', 'MongoDB',
  'NodeJS', 'PHP', 'Java', 'C++', 'Python', 'Go', 'Ruby', 'Objective-C', 'Android', 'iOS',
  'C#', 'ASP.net'
];

const todoList = [];

for (let i = 0; i < baseActions.length; i++)
  for (let j = 0; j < baseObjects.length; j++) {
    const num = i * baseActions.length + j;
    const action = baseActions[i];
    const object = baseObjects[j];
    const yyyy = 2015 + j % 4,
      mm = num % 12,
      dd = num * 1999999 % 29;
    const duration = i * 5 + (baseActions.length - i) * 3;
    const dateStart = new Date(yyyy, mm, dd);
    const dateEnd = new Date(dateStart.getTime() + duration * 86400000);
    const process = (num * 199997 + Math.round(Math.random() * 1999997)) % 101;
    todoList.push({
      id: uniqid.time().toUpperCase(),
      content: `${action} ${object}`,
      duration,
      dateStart,
      dateEnd,
      process
    });
  }

const initialState = todoList;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.newTodo];

    case actionTypes.REMOVE_TODO:
      return state.filter(o => o.id !== action.id);

    case actionTypes.DONE_TODO:
      return state.map((o) => {
        if (o.id != action.id) return o;
        return { ...o, done: action.isDone };
      });

    case actionTypes.MODIFY_TODO:
      console.log(action);
      return state.map((o) => {
        if (o.id != action.id) return o;
        return { ...o, ...action.newTodo };
      });

    default:
      return state;
  }
};

export default reducer;
