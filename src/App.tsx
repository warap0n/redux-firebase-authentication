import { useState, useEffect } from "react";
import Home from "./home/Home";
import Login from "./login/Login";
import { useAppSelector } from "./redux/hooks/hooks";

function App() {
  const state = useAppSelector((state) => state);
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    if (state.user) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [state.user]);
  return (
    <div className="App">
      {authorized ? <Home setAuthorized={setAuthorized} /> : <Login />}
    </div>
  );
}

export default App;
