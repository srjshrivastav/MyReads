import React from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookShelf from './components/Bookshelf'
import SearchPage from './components/Search'
import * as BookApi from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: []

  }
  ShiftTo = (book, s) => {
    let _book = this.state.books.filter((_book) => _book.id === book.id)
    if (_book.length) {
      let index = this.state.books.indexOf(_book[0])
      _book[0].shelf = s
      this.state.books.splice(index, 1, _book[0])
      this.setState(() => ({
        books: this.state.books
      }))
    }
    else {
      this.addNewBook(book)
    }
    BookApi.update(book, s)
  }
  addNewBook = (book) => {
    this.setState((state) => ({
      books: state.books.concat([book])
    }))


  }
  getBooks = () => {
    BookApi.getAll().then(
      (result) => {
        this.setState(() => ({
          books: result
        }))
      })
  }
  componentWillMount() {
    this.getBooks()
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchPage addNewBook={this.ShiftTo}
            books={this.state.books} />)
        } />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                  Move={this.ShiftTo}
                  shelf={'Currently Reading'} />
                <BookShelf books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                  Move={this.ShiftTo}
                  shelf={'Want To Read'} />
                <BookShelf books={this.state.books.filter((book) => book.shelf === 'read')}
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
