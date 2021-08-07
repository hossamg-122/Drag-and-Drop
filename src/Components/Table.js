import React, { useEffect } from 'react';
import { connect } from "react-redux";
import "./Table.scss";

import Column from './Column';
import {customers} from "../Data/Data";
import {SET_ALL_CARDS} from "../app/Actions/index";

const Table = ({SET_ALL_CARDS}) => {

    useEffect(()=>{
        // hold the last updated data in local storage
        // get All the data from the Data Source
        // then store it , in the redux store 
        if(window.localStorage.getItem("draggableCards")){
            SET_ALL_CARDS(JSON.parse(window.localStorage.getItem("draggableCards")));
        }
        else{
            SET_ALL_CARDS(customers);
            window.localStorage.setItem("draggableCards",JSON.stringify(customers));
        }
    },[SET_ALL_CARDS])

    return (
        <div className="general_cont columns_cont">
           
            <Column
             ColumnHeader={ <span> <i className="fas fa-trash"> </i> &nbsp; new   </span>}
             count={990}
             level="new"
             />

            <Column
             ColumnHeader={ <span> <i className="fas fa-trash"> </i> &nbsp; stage </span>}
             count={990}
             level="stage"
             />

            <Column
             ColumnHeader={ <span> <i className="fas fa-trash"> </i> &nbsp; won   </span>}
             count={990}
             level="won"
             />

            <Column 
             endColumn={true}
             ColumnHeader="Add Column" 
            />
            
        </div>
    );
};



const mapStateToProps = (state) => {
    return { store: state };
};

export default connect(mapStateToProps, {SET_ALL_CARDS})(Table);