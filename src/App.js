import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import LandingPage from "./components/LandingPage";
import PostView from "./components/PostView";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/post" element={<Post />} />

        <Route path="/postview" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
