import React from "react";
//Styles
//Components
import Navbar from "./components/Navbar";
import ContentSectionOne from "./components/ContentSectionOne";
import ContentSectionTwo from "./components/ContentSectionTwo";
import ContentSectionThree from "./components/ContentSectionThree/ContentSectionThree";
import Form from "./components/Form";
import Loading from "./components/Loading";
//Custom Hook -- Context
import { useGlobalContext } from "./context";

function App() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  } else {
    return (
      <div className="container">
        <Navbar />
        <ContentSectionOne />
        <ContentSectionTwo />
        <ContentSectionThree />
        <Form />
      </div>
    );
  }
}

export default App;
