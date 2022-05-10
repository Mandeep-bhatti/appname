import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store"
import Game from "./components/game/Game"
function App() {
  return (<>
    <Provider store={store}>
      {/* <Header /> */}
      {/* <Description /> */}
      {/* <Accordin /> */}
      <Game />
    </Provider>
  </>
  );
}

export default App;
