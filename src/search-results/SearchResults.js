import React from 'react'
import './SearchResults.css'
import BookItem from '../book-item/BookItem'

export default class SearchResults extends React.Component{
    render(){
        const books = this.props.books.map((book, i) =>
            <BookItem name={book.volumeInfo.title} 
                      author={book.volumeInfo.authors? book.volumeInfo.authors[0]: ''}
                      desciption={book.volumeInfo.description}
                      thumbnail={book.volumeInfo.imageLinks.thumbnail}
                      price={book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 'Not for sale'}
                      key={i}/>
            )

        return(
            <div className='search-results'>
                {books}
            </div>
        )
    }
}