import initialState from "../initialState";
import { ADD_CARD } from "../actions/action";

const nextId = (state = initialState) => {
  let maxId = 0;
  for (let key in state.cards) {
    if (state.cards[key].id > maxId) {
      maxId = state.cards[key].id;
    }
  }
  return state.cards.length === 0 ? 0 : maxId + 1;
};

console.log(nextId());

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return { cards: [...state.cards, { id: nextId(state) }] };

    default:
      return state;
  }
}
