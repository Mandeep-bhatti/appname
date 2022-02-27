import React from 'react';
import Val from "./components/Val"
import Data from "./components/Data";
import { Provider } from "react-redux";
import store from "./redux/store"
function App() {
  return (<>
    <Provider store={store}>
      <Data />
      <Val />
    </Provider>

  </>
  );
}

export default App;
