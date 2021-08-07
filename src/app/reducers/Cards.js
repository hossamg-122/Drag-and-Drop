import Types from "../Actions/Types";


export const allCards = (state =[], action) => {
 
// gets called with all the list of card ,
// then the reducer just store them in redux store as an array named "allCards".
  if (action.type === Types.SET_ALL_CARDS) {
    return action.payload;
  }
  

//gets called with the currently dragged card object, and the target column level name
//then the reducer soft deletes the this card object from the "AllCards" array
//then restore it => then changes the "levelName" key in the element object to be equal to the target column "levelName"
// then push it again to the "allCards" Array .
  else  if (action.type === Types.SWITCH_CARD) {
      var newCard;
      let newArr = state.map((card)=>{
        if (card.id === action.payload.currentDrag.id){
          newCard = card;
          newCard.level = action.payload.targetColumn;
          return false
        }
        else {
          return card
        }
        
      }).filter(card=>card);
      newArr.push(newCard);
      window.localStorage.setItem("draggableCards",JSON.stringify(newArr));
      return  newArr
    // }
  }
  
  // just return the current state 
  else {
    return state;
  }
};


//gets called with the currently dragged card object, 
//then the reducer just store it into redux store as an object "named currenrDrag".
export const currentDrag = (state =null, action) => {
  if (action.type === Types.SET_CURRENT_DRAG_CARD) {
    return action.payload;
  }
  else {
    return state;
  }
};




