import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
constructor() {
    super();
    this.state = {
    articles: [],
      loading: true, // Adding a loading state
    page: 1,
    };
}

async updateNews(page) {
    try {
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&apiKey=883f2fca7d7e414f9ea09f4e18eadfb5`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        loading: false,
        page: page,
    });
    } catch (error) {
    console.error("Error fetching the news:", error);
    this.setState({ loading: false });
    }
}

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  handleNextcheck = () => {
    this.updateNews(this.state.page + 1);
  };

  handlePrevcheck = () => {
    this.updateNews(this.state.page - 1);
  };

  render() {
    return (
      <div className="container my-4">
        <h3>Today's Top Headlines</h3>
        {this.state.loading ? (
          <h4>Loading...</h4>
        ) : (
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ''}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-success"
                onClick={this.handlePrevcheck}
              >
                Previous &laquo;
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleNextcheck}
              >
                Next &raquo;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default News;
