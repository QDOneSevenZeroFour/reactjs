import {createStore} from "redux";
const store = createStore((state = {
  name: "qd",
  skill: "ps",
  interest: ["css", "js"]
}, action) => {
  switch (action.type) {
    case "SETNAME":
      return Object.assign({}, state, {name: action.name});
      break;
    default:
      return state;
  }
})
export default store;
