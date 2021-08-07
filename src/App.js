import React, { Fragment, useEffect } from "react";
import Table from "./Components/Table";

import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(()=>{
    toast.info("Welcom To Drag & Drop");
  },[])
  return ( 
    <Fragment>
      <div style={{minHeight:"75vh"}}>

        {/* to be able to push notification from any comoponent in the Applictaion */}
        <ToastContainer
          position="top-right" 
          autoClose={3500} 
          hideProgressBar={false} 
          newestOnTop={false} 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover
          />

        <Table/>
        
      </div>
    </Fragment>
  );
};

export default App;
