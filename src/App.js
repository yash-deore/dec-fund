import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FundRaiserForm from "./Components/FundRaiserForm";
// import FundRaiserDisplay from "./Components/FundRaiserDisplay";
import Navigation from "./Components/Navigation";
import { Container, CardGroup } from "react-bootstrap";

// Importing all the pages
import HomePage from "./Pages/HomePage";
import CreateFundRaiser from "./Pages/CreateFundRaiser";
import FundProjects from "./Pages/FundProjects";
import FundRaiserContribute from "./Pages/FundRaiserContribute";

const App = () => {
  return (
    <div>
      <Router>
        {/* Navbar */}
        <Navigation />

        {/* Setting the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-fund-raiser" element={<CreateFundRaiser />} />
          <Route path="/fund-projects" element={<FundProjects />} />
          <Route
            path="/funding-campaign/:campaddr"
            element={<FundRaiserContribute />}
          />
        </Routes>
      </Router>

      {/* <Container>
        <CardGroup>
          <FundRaiserDisplay />
          <FundRaiserDisplay />
          <FundRaiserDisplay />
        </CardGroup>
      </Container> */}
    </div>
  );
};

export default App;
