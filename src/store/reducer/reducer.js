import initialState from "../initialState";
import { ADD_CARD, SUBMIT_EDIT_CARD, EDIT_CARD } from "../actions/action";

const nextId = (state = initialState) => {
  let maxId = 0;
  for (let key in state.cards) {
    if (state.cards[key].id > maxId) {
      maxId = state.cards[key].id;
    }
  }
  return state.cards.length === 0 ? 0 : maxId + 1;
};

const todoApp = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CARD:
      return { cards: [...state.cards, { id: nextId(state), isEdit: true }] };
    case EDIT_CARD:
      //return editByID(state,action.id);
      return {
        ...state,
        cards: [
          ...state.cards.map((element) => ({
            ...element,
            //isEdit: element.id === action.id,
            isEdit:
              element.isEdit === true
                ? true
                : (element.id === action.id)
                ? true
                : false,
          })),
        ],
      };
    case SUBMIT_EDIT_CARD:
      return state;
    default:
      return state;
  }
};

export default todoApp;
