import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './components/Bookshelf'
import SearchPage from './components/Search'
import * as BookApi from './BooksAPI'


class BooksApp extends React.Component {
  state={
    'CurrentlyReading':[],
    'Read':[],
    'WantToRead':[]

  }
  ShiftTo=(book,shelf)=>{
    console.log(book.id,shelf)
  }
  

  componentDidMount(){
    BookApi.getAll().then(
      (result)=>{
        this.setState(()=>({ 
          'CurrentlyReading':result.filter((b)=>b.shelf==='currentlyReading'),
          'Read':result.filter((b)=>b.shelf==='read'),
          'WantToRead':result.filter((b)=>b.shelf==='wantToRead'),
          }))
        })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' component={SearchPage} />
<Route exact path='/' render={()=>(
<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.state.CurrentlyReading}
                Move={this.ShiftTo}
                shelf={'Currently Reading'} />
                <BookShelf books={this.state.WantToRead}
                Move={this.ShiftTo} 
                shelf={'Want To Read'}/>
                <BookShelf books={this.state.Read}
                Move={this.ShiftTo}
                shelf={'Read'} />
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
        )} />
      
      </div>
          
    )
  }
}

export default BooksApp
