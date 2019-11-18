export default function pageReducer1(state = [], action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return null;
    default:
      return state;
  }
}
