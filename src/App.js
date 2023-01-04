import React, { useState } from 'react';
import Buttons from "./components/Buttons"
import Dark from "./components/Dark"

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''} >
      <div className="bg-stone-200 dark:bg-gray-900">
        <Dark darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
