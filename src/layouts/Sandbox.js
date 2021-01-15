import React from "react";
import languageContext from "context/language.js";
import "scss/sandbox.scss";

/*
   ### Sandbox is a pagelayout for testing/practicing purpose ~
    ## Testing and practicing react context
    ## Testing both useState and useReducer
*/

function Sandbox() {
  const handleClick = (leStore, setLeStore) => {
    /*
      maybe  this Architecture can be more simplify and improvise
    */
    const updateStore = {
      ...leStore,
      BI: {
        slider: {
          title: "burger cheese!!!!!!!!",
          description: "tasty yummy delicious!!!!!!!",
        },
      },
    };

    setLeStore(updateStore);
  }
  
  return (
    <languageContext.Consumer>
      {([store, setStore]) => (
        <div className="sandbox">
          <h1 id="sandbox-welcome"> WELCOME TO SANDBOX</h1>
          <button onClick={() => { handleClick(store, setStore) }}  >
            CLICK BUTTON!
          </button>
        </div>
      )}
    </languageContext.Consumer>
  );
}

export default Sandbox;
