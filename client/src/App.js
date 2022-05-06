import React from "react";
import "./App.scss";
import { Header } from "./components/header/Header"
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Front } from "./pages/front/Front"


export default function App() {


  return (
    <div>
    <Header />
    <Front />
    </div>
    // <BrowserRouter>
    // <Header />
    // <Routes>
    //   <Route path="/frontpage" element={<Front />} />
    //   <Route path="/contactpage" />
    //   <Route path="/productpage" />
    //   <Route path="/loginpage" />
    //   <Route
    //     path="*"
    //     element={
    //       <main style={{ padding: "1rem" }}>
    //         <p>This is not a place for you!</p>
    //       </main>
    // }
    // />
        
    // </Routes>
    
    // </BrowserRouter>
  );
}

