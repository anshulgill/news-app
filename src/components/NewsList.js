// import React, { Component } from 'react';
// import Newsitem from './Newsitem';

// class NewsList extends Component {
//     state = {
//         articles: [] // Assume this is fetched from the API
//     };

//     componentDidMount() {
//         // Fetch API data and update state
//         fetch('YOUR_API_ENDPOINT')
//             .then(response => response.json())
//             .then(data => this.setState({ articles: data.articles }))
//             .catch(error => console.error('Error fetching data:', error));
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.articles.map(article => (
//                     <Newsitem
//                         key={article.title}
//                         title={article.title}
//                         description={article.description}
//                         imageUrl={article.urlToImage}
//                         newsUrl={article.url}
//                     />
//                 ))}
//             </div>
//         );
//     }
// }

// export default NewsList;
