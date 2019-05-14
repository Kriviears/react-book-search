import React from 'react';
import './App.css';
import SearchForm from './search-form/SearchForm'
import SearchResults from './search-results/SearchResults'





class App extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      books: [],
      options: ''
    })
  }

  handleBooks(books, error){
    this.setState({
      books: books,
      error: error
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm handleBooks={(books, error) => this.handleBooks(books, error)}/>

        <SearchResults books={this.state.books}/>
      </div>
    );
  }
}

export default App;
