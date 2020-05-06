import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import BookUI from './Book'

class SearchPage extends Component{
  state={
    books:[]
  }

  assignShelf=(b)=>{
    if(b.shelf===undefined){
        const hold = this.props.books.filter((_book)=>_book.id===b.id)
        if(hold.length)
          b.shelf=hold[0].shelf
      }
      return b
  }
  handleevent=(event,book)=>{
    if(event.target.value!=='none'){
      this.setState((state)=>({
        books:state.books.filter((_book)=>_book.id!==book.id)
      }))
      book.shelf=event.target.value
      this.props.addNewBook(book,event.target.value)
    }
    else{
      this.props.addNewBook(book,event.target.value)
    }
    }
  doSearch=query=>{
  if(query!==''){
    search(query)
    .then((res)=>{
      this.setState(()=>({
        books:res instanceof Array?res:[] 
      }))
    })
  }
  else{
    this.setState(()=>({
      books:[]
    }))
  }
  }
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' ><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=>{this.doSearch(event.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((b)=>(b.imageLinks?
              <li key={b.id}>
                    <BookUI book={this.assignShelf(b)}
                            books={this.props.books} 
                            shelfchanger={this.handleevent}/>
                </li>:<div></div>
                ))}
              </ol>
            </div>
          </div>
        )
    }

}
export default SearchPage