import initialState from "../initialState";
import {
  ADD_CARD,
  SUBMIT_EDIT_CARD,
  EDIT_CARD,
  EDIT_TEXT_CARD,
  DROP,
} from "../actions/action";

const nextId = (state = initialState) => {
  let maxId = 0;
  for (let key in state.cards) {
    if (state.cards[key].id > maxId) {
      maxId = state.cards[key].id;
    }
  }
  return state.cards.length === 0 ? 0 : maxId + 1;
};

const pointerChangeCard = (state = initialState, id, title, subtitle, text) => {
  const newObj = JSON.parse(JSON.stringify(state));

  console.log("-----------------");
  console.log(newObj, id, title);
  console.log("-----------------");

  for (let key in newObj.cards) {
    if (newObj.cards[key].id === id) {
      //newObj.cards[key].title = title
      newObj.cards[key].newEditedValues[0] = title;
      newObj.cards[key].newEditedValues[1] = subtitle;
      newObj.cards[key].newEditedValues[2] = text;
    }
  }

  return newObj;
};

const changeTextAfterDropCard = (state, i_id) => {
  const newObj = JSON.parse(JSON.stringify(state));
  console.log("id = " + i_id, newObj.cards);

  let currentId;

  for (let key in newObj.cards) {
    if (newObj.cards[key].id === i_id) {
      newObj.cards[key].title = newObj.cards[key].newEditedValues[0];
      newObj.cards[key].subtitle = newObj.cards[key].newEditedValues[1];
      newObj.cards[key].text = newObj.cards[key].newEditedValues[2];
      newObj.cards[key].isEdit = false;
    }
  }

  console.log(currentId);
  return newObj;
};

const todoApp = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CARD:
      return {
        cards: [
          ...state.cards,
          {
            id: nextId(state),
            title: "",
            subtitle: "",
            text: "",
            isEdit: true,
            newEditedValues: [],
          },
        ],
      };
    case EDIT_CARD:
      //return editByID(state,action.id);
      return {
        ...state,
        cards: [
          ...state.cards.map((element) => ({
            ...element,
            newEditedValues:
              element.id === action.id
                ? [element.title, element.subtitle, element.text]
                : element.newEditedValues,
            //isEdit: element.id === action.id,
            isEdit: element.id === action.id ? !element.isEdit : element.isEdit,
          })),
        ],
      };
    case EDIT_TEXT_CARD:
      return pointerChangeCard(
        state,
        action.id,
        action.title,
        action.subtitle,
        action.text
      );
    case DROP:
      return {
        ...state,
        cards: [
          ...state.cards.filter((element) =>
            element.id !== action.id ? element : null
          ),
        ],
      };
    case SUBMIT_EDIT_CARD:
      return changeTextAfterDropCard(state, action.id);
    default:
      return state;
  }
};

export default todoApp;
