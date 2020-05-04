import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {search,update} from '../BooksAPI'
import BookUI from './Book'

class SearchPage extends Component{
  state={
    books:[]
  }
  handleevent=(event,book)=>{
    if(event.target.value!=='none')
      update(book,event.target.value)
    }
  doSearch=query=>{
  if(query!==''){
    search(query)
    .then((res)=>{
      this.setState(()=>({
        books:res.length?res:[]
      }))
      console.log(this.state.books)
      console.log(this.state.books.map((BOOK)=>BOOK.authors))
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
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=>{this.doSearch(event.target.value)}}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((b)=>(
              <li key={b.id}>
                <div className="book">
                    <BookUI book={b} 
                            shelfchanger={this.handleevent}/>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }

}
export default SearchPage