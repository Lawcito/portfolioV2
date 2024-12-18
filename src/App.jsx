import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
