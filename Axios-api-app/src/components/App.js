import React from "react";
import SearchInput from "./SearchInput"
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageURL: '', count: 0, datas: [] }
  }
  onSubmitInput = async (entry) => {
    const query = await axios.get(`https://pixabay.com/api/?key=26483301-439a6121bfe18bd7440f8d52a&q=${entry}&image_type=photo`)
    if (query.status === 200) {
      var data = query.data;
      this.setState({ imageURL: `${data.hits[0].largeImageURL}`, count: 8, datas: data })
    }
  }

  render() {
    return (
      <div className="m-4">
        <div className="d-flex justify-content-center align-items-center">
        <SearchInput onSubmitInput={this.onSubmitInput} />
        </div>
        <ImageList
          count={this.state.count}
          data={this.state.datas} />
      </div>
    )
  }
}

export default App;