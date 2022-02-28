import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import contactoPage from "./pages/contactoPage"
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={contactoPage} />
      </Switch>
      </Router>
  );
}

export default App;
