import React from "react";
import languageContext from "context/language.js";
import "scss/sandbox.scss";

/*
   ### Sandbox is a pagelayout for testing/practicing purpose ~
    ## Testing and practicing react context
    ## Testing useReducer
*/

function Sandbox() {
  const handleClickBM = (leStore, leDispatch) => {
    leDispatch({type:"BM"})
  }

  const handleClickBI = (leStore, leDispatch) => {
    leDispatch({type:"BI"})
  }
  
  return (
    <languageContext.Consumer>
      {([store, dispatch]) => (
        <div className="sandbox">
          <h1 id="sandbox-welcome"> {store} </h1>

          <button onClick={() => { handleClickBM(store, dispatch) }}  >
            Bahasa Melayu
          </button>
          <br/>
          <button onClick={() => { handleClickBI(store, dispatch) }}  >
            Bahasa Inggeris
          </button>
        </div>
      )}
    </languageContext.Consumer>
  );
}

export default Sandbox;
