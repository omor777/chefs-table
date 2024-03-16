import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <>
      <Header isMenuOpen={toggleMenu} handleToggleMenu={handleToggleMenu} />
      <Main isMenuOpen={toggleMenu} />
    </>
  );
}

export default App;
