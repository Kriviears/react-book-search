import React from 'react';
import './SearchForm.css';

const key = 'key=AIzaSyAIWxf8yM093vkGuwAZaK2Be5H0A1lAO6c';

export default class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            q: '',
            printType:'',
            bookType:''
        }
    }

    qChange(q){
        this.setState({
            q
        });
    }

    printTypeChange(printType){
        this.setState({
            printType
        });
    }

    bookTypeChange(bookType){
        this.setState({
            bookType
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const url = 'https://www.googleapis.com/books/v1/volumes?';
        const query = url+'q='+this.state.q+this.state.printType+this.state.bookType;

        fetch(query)
            .then(res =>{
                if(!res.ok){
                throw new Error('Something went wrong please try again later');
                }
                return res
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data.items);
                this.props.handleBooks(data.items, null);
            })
            .catch(err =>{
                this.props.handleBooks(null, err.message);
            });
    }    


    render(){
        return(
            <form className='search-form' onSubmit={e=>this.handleSubmit(e)}>
                <label htmlFor='search-term'>Search: </label>
                <input 
                    type='text' name='searchTerm' 
                    id='searchTerm' 
                    placeholder='Book Search' 
                    value={this.state.q} 
                    onChange={e =>this.qChange(e.target.value)}/>
                <button type='submit'>Search</button>

                <label htmlFor='Filtering'>Print Type</label>
                <select onChange={e=> this.printTypeChange(e.target.value)}>
                    <option value=''>All</option>
                    <option value='&Filtering=free-ebooks'>Free ebooks</option>
                    <option value='&Filtering=ebooks'>All ebooks</option>
                </select>

                <label htmlFor='bookType'>Book Type</label>
                <select onChange={e=> this.bookTypeChange(e.target.value)}>
                    <option value='&printType=all'>All</option>
                    <option value='&printType=books'>Books</option>
                    <option value='&printType=magazines'>Magazine</option>
                </select>
            </form>
        )
    }
}