import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../container/Home/index";
import Overview from "../container/Overview/overview";
import Project from "../container/Project/project";
import Login from "./../container/Login/index";
import Register from "./../container/Register/index";
import DetailProduct from "./../container/DetailProduct/index";
import Availability from "../container/Availability/availability";
import Location from "../container/Location";
import Explore from "../container/Explore";
import Floor from "../container/Floor";
import Team from "../container/Team/team";
import Contact from "../container/Contact/Contact";
import Compare from "./../container/Compare/compare";
import Amenities from "../container/Amenities";
import ScrollToTopWrapper from "../components/common/ScrollToTopWrapper";
import ScrollToTopButton from "../components/common/ScrollToTop";
import Header from "../components/Menu";

class Routes extends Component {
  render() {
    return (
      <>
        <ScrollToTopWrapper>
          <Header />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/overview" component={Overview} exact />
            <Route path="/project" component={Project} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/availability" component={Availability} exact />
            <Route path="/location" component={Location} exact />
            <Route path="/explore" component={Explore} exact />
            <Route path="/floorplans" component={Floor} exact />
            <Route path="/team" component={Team} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/compare" component={Compare} exact />
            <Route path="/compare/detail_product" component={DetailProduct} exact />
            <Route path="/amenities" component={Amenities} exact />
          </Switch>
          <ScrollToTopButton display={true} />
        </ScrollToTopWrapper>
      </>
    );
  }
}

export default Routes;
