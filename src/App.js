import React from 'react';
import './reduxFirebase/Style.css'
import { useState } from 'react'
import { themes, ThemeContext } from './components/pages/Context'
import PathPages from './reduxFirebase/component/PathPages';

function App() {
  const [currentThem, setCurrentThem] = useState(themes.light)
  const handleToggle = () => {
    setCurrentThem(prevState => prevState === themes.light ? themes.dark : themes.light)
  }
  return (
    <div>
      {/*<ThemeContext.Provider value={{ themes: currentThem, handleToggle: handleToggle }}>
        <div>
         <PagesWrapper />*

          <CountLogica />
        </div>
  </ThemeContext.Provider>*/}
      <PathPages />
    </div>
  );

}
export default App;
