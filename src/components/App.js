import React from "react";
import "./ImageList.css";
import SearhBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../apis/unsplash";
import LandingText from "./LandingText";
import Footer from "./Footer";

class App extends React.Component {
  state = { images: [], showLandingText: true, imageData: null };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results, showLandingText: false });
    if (this.state.images.length) {
      this.setState({ imageData: true });
    } else {
      this.setState({ imageData: false });
    }
  };

  render() {
    return (
      <div className="flex-wrapper">
        <div className="ui container">
          <SearhBar onSubmit={this.onSearchSubmit} />
          {this.state.showLandingText ? <LandingText /> : null}
          {this.state.imageData === false ? (
            <div className="landing-text" style={{ color: "#F71616" }}>
              Uff... No search results found. Try something else !
            </div>
          ) : (
            <ImageList images={this.state.images} />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
