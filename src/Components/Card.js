import React, {useState} from 'react';
import { connect } from "react-redux";
import "./Card.scss";

import StarRatingComponent from 'react-star-rating-component';
import {SWITCH_CARD,SET_CURRENT_DRAG_CARD} from "../app/Actions/index";

const Card = (props) => {
    
    const [visible, setVisible] = useState("true");

    const onDragStart = (e)=>{
        // set this card as the cureent drag card in redux store .
        // and give a bit of opacity to be clear that this is the currently dragged card.
        props.SET_CURRENT_DRAG_CARD(props.card)
        setVisible(false);
    };

    const onDragEnd = (e)=>{
        // remove the opacity that "onDragStart" function added to the card , at the dragging start.
        setVisible(true)
    };

    const onDragOver=(e)=>{
        // to prevent the card body from acting like column body , since its its parent and the 
        // the event propagate to it
        e.stopPropagation()
    }
    
    return (
        <div 
          id={props.card.id} 
          className="info_card" 
          draggable="true" 
          style={{opacity:visible? "1":"0.5"}}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          
            <div className="info_card_header">
                <span className="name" >{props.card.name}</span>
                <span className="count" >{props.card.count} &nbsp; <i className="fas fa-trash "> </i></span>
            </div>

            <div className="checkBox">
                <label className="cont">Company
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="cont">individual 
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="select_wrapper">
                <div className="select_cont">
                    <select placeholder="Name" className="card_select">
                    
                        <option>Name</option>
                        <option>Name2</option>
                        <option>Name3</option>
                    </select>
                    <img src={require("../images/updown.png")} alt="up and down Arrow"  className="select_icon"/>
                </div>
                <i className="eye fas fa-eye"></i>
                <i className="plus fas fa-plus-circle"></i> 
            </div>

            <div  className="select_wrapper">
                <div className="select_cont">
                    <select className="card_select">
                        
                        <option>Product</option>
                        <option>Product2</option>
                        <option>Product3</option>
                    </select>
                    <img  src={require("../images/updown.png")} alt="up and down Arrow" className="select_icon"/>
                </div>
                <i className="eye fas fa-eye"></i>
                <i className="plus fas fa-plus-circle"></i> 
            </div>

            <div className="select_wrapper">
                <div className="select_cont">
                    <input value="Expected Revenue" onChange={(e)=>{console.log(e.target.value)}} className="card_select"/>
                </div>
            </div>

            <div className="info_card_bottom">
                <div className="priority">
                    <span>
                        Priority
                    </span>
                    <StarRatingComponent 
                        name="priority" 
                        starCount={5}
                        value={props.card.priority}
                    />
                </div>

                <button className="create_btn ">Create</button>
            </div>
        
        </div>
    );
};

const mapStateToProps = (state) => {
    return { store: state };
};

export default connect(mapStateToProps, {SET_CURRENT_DRAG_CARD, SWITCH_CARD})(Card);