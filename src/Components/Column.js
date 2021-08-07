import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import "./Column.scss";

import Card from './Card';
import {SWITCH_CARD} from "../app/Actions/index";

const Column = (props) => {

// push notification when any card gets moved and mention the target column.    
// use effect gets invoked when ever [props.store.currentDrag] update.
useEffect(()=>{ 
    if(props.store.currentDrag && props.store.currentDrag.level === props.level){
    
  
    setTimeout(()=>{
         toast.success(`"${props.store.currentDrag.name}" Card moved to / sorted in "${props.store.currentDrag.level}" Column `);
     },500)
    
    };
},[props.store.currentDrag, props.level])

// column body reference
const columnBodyRef = React.createRef();

const onDragOver=(e)=>{
    
    // this function (redux action) takes the card id and the targen column
    // and the store reducers manipulate the arrays for us to delete that card from its current column(array).
    // then push it into the target column [array].
    if(props.store.currentDrag){
        props.SWITCH_CARD(props.store.currentDrag, props.level);
    }

    // to force the colun body to scroll to bottom whenever new card gets added to it.
    columnBodyRef.current.scrollTo(0,columnBodyRef.current.scrollHeight);

}

    return (
        <div className= {props.endColumn? "column end_column" : "column" } >
            
            {/* render the column head cell according to the  info in props */}
            <div className="column_header">
                <span className="header_name" >{props.ColumnHeader}</span>
                <span className="header_count">{props.count} </span>     
            </div>

            {/* render all the cards that have a level key === this column level => "new" or "stage" or "win"  */}
            <div ref={columnBodyRef} id={props.level} className="column_body" onDragOver={onDragOver}>
                {props.store.allCards
                .filter(card=>card.level===props.level)
                .map((card, index)=> <Card key={index} card={card}/> )}
            </div>
        
        </div>
    );
};


const mapStateToProps = (state) => {
    return { store: state };
};

export default connect(mapStateToProps, {SWITCH_CARD})(Column);