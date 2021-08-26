import React from "react";
import "./ImageList.css";
import SearhBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../apis/unsplash";
import LandingText from "./LandingText";
import Footer from "./Footer";

class App extends React.Component {
  state = { images: [], showLandingText: true };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results, showLandingText: false });
  };

  render() {
    return (
      <div className="ui container">
        <SearhBar onSubmit={this.onSearchSubmit} />
        {this.state.showLandingText ? <LandingText /> : null}
        <ImageList images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
