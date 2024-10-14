import { Outlet } from "react-router-dom";

import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <>
      <Navigationbar />
      <main className="app_main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
