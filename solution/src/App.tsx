import React from "react";
import "./App.css";
import ReactInterviewForm from "./components/ReactInterviewForm";
import MainLayout from "./layouts/MainLayout";

function App() {
  /**
   * We can wrap the MainLayout component with some providers 
   * such as Context provider, Theme provider, etc. 
   */
  return (
    <MainLayout>
      <ReactInterviewForm />
    </MainLayout>
  );
}

export default App;
