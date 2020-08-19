const initialState = {
  cards: [
    {
      id: 0,
      title: "Card Title",
      subtitle: "Card Subtitle",
      text: `Some quick example text to build on the card title and make up the
    bulk of the card's content.`,
      isEdit: false,
      newEditedValues:[],
    },
    {
      id: 1,
      title: "Card Title",
      subtitle: "Card Subtitle",
      text: `Some quick example text to build on the card title and make up the
    bulk of the card's content.`,
      isEdit: false,
      newEditedValues:[],
    },
    { id: 2,  title:'', subtitle:'', text:'', isEdit: true, newEditedValues:[] },
  ],
  // title: "Card Title",
  // text: `Some quick example text to build on the card title and make up the
  //       bulk of the card's content.`,
  // subtitle: "Card Subtitle",
};

export default initialState;
