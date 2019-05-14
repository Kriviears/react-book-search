import React from 'react'
import './BookItem.css'

export default class BookItem extends React.Component{
    render(){
        return(
            <div className='book-item'>
                <h1>{this.props.name}</h1>
                <img src={this.props.thumbnail} alt={this.props.name}/>
                <p>Author: {this.props.author}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}