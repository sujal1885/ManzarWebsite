import React from "react";
import Homepage from "./pages/Homepage";
import AchievementsPage from "./pages/AchievementsPage";
import AboutPage from "./pages/AboutPage";
import FacultyPage from "./pages/FacultyPage";
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App