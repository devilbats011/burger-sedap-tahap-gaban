import "./App.scss";
import "scss/global.scss";
import React, { useReducer } from "react";
import Nav from "layouts/Nav";
import Slider from "layouts/Slider";
import CraveMore from "layouts/CraveMore";
import Footer from "layouts/Footer";
import Sandbox from "layouts/Sandbox";
import languageContext from "context/language.js";
import * as db from "mockDb.js";

function App() {
  /*const [state, dispatch] = useReducer(reducer, initialState);*/
  /* 
  #to-do
  ##Done
  1. slider using bootstap 
  2. navigation 
  2.1 create contact layout 
  2.2 grid all the layout to responsive 
  2.3 split App code to chunk of layouts done
  
  --------------------
  
  ##Not Done
  
  3. implement context for bm|english | color white black mode
  4. KIV ADD CART flow system using everything i have /know
  */

  function reducer(state, action) {
    switch (action.type) {
      case "BM":
        return db.BM_TEST;

      case "BI":
        return db.BI_TEST;

      default:
        return state;
    }
  }

  const initialState =  db.BM_TEST;
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <languageContext.Provider value={[store, dispatch]}>
      <div className="app">
        <Nav />
        <Slider />
        <CraveMore />
        <Footer />
        <Sandbox />
      </div>
    </languageContext.Provider>
  );
}

export default App;
