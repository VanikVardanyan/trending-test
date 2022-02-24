import Trading from "./Components/Trading/Trading";
import NavBar from "./Components/NavBar/NavBar";
import "./index.scss"
import { useState } from "react";
import Archive from "./Components/Archive/Archive";

  function App() {

    const [isArchiveClicked, setIsArchiveClicked] = useState(false)
    
    return (
      <div className="App">
          <NavBar isArchiveClicked={(status) => setIsArchiveClicked(status)}/>
          { !isArchiveClicked && <Trading /> }
          { isArchiveClicked && <Archive /> }
      </div>
    );
  }

export default App;
