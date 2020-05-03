import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './components/Bookshelf'
import SearchPage from './components/Search'
import OnGoing from './components/OnGoing'
import Wish from './components/WishList'

class BooksApp extends React.Component {
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
                <OnGoing />
                <Wish/>
                <BookShelf />
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
