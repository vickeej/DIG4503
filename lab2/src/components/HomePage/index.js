import React from "react";
import HomePageTitle from "./HomePageTitle";

class HomePage extends React.Component {
    render() {
      return (
        <div>
          <HomePageTitle />
          <p>{this.props.firstName}</p>
        </div>
      );
    }
  }

export default HomePage;