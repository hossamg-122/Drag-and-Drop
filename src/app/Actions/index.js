import Types from "./Types";

// gets called with all the list of card ,
// then the reducer just store them in redux store as an array named "allCards".
export const SET_ALL_CARDS =  (CardsArray) => {
    return async function (dispatch) {
        dispatch({
            type: Types.SET_ALL_CARDS,
            payload : CardsArray
        });
    };
};

//gets called with the currently dragged card object, 
//then the reducer just store it into redux store as an object "named currenrDrag".
export const SET_CURRENT_DRAG_CARD =  (card) => {
    return async function (dispatch) {
        dispatch({
            type: Types.SET_CURRENT_DRAG_CARD,
            payload : card
        });
      
    };
};

//gets called with the currently dragged card object, and the target column level name
//then the reducer soft deletes the this card object from the "AllCards" array
//then restore it => then changes the "levelName" key in the element object to be equal to the target column "levelName"
// then push it again to the "allCards" Array .
export const SWITCH_CARD =  (currentDrag, targetColumn) => {
    return async function (dispatch) {
        dispatch({
            type: Types.SWITCH_CARD,
            payload : {
                currentDrag:currentDrag,
                targetColumn:targetColumn
            }
        });
    };
};

