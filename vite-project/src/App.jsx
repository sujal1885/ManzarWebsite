import React from "react";
import Homepage from "./pages/Homepage";
import AchievementsPage from "./pages/AchievementsPage";
import AboutPage from "./pages/AboutPage";
import FacultyPage from "./pages/FacultyPage";
import Faculty1Page from "./pages/Faculty1Page";
import Faculty2Page from "./pages/Faculty2page";
import Faculty3Page from "./pages/Faculty3Page";
import Faculty4Page from "./pages/Faculty4Page";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/Achievements" element={<AchievementsPage />}></Route>
          <Route exact path="/About" element={<AboutPage />}></Route>
          <Route exact path="/faculty" element={<FacultyPage />}></Route>
          <Route exact path="/faculty1" element={<Faculty1Page />}></Route>
          <Route exact path="/faculty2" element={<Faculty2Page />}></Route>
          <Route exact path="/faculty3" element={<Faculty3Page />}></Route>
          <Route exact path="/faculty4" element={<Faculty4Page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App