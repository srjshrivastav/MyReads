import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import BookShelf from './components/Bookshelf'
import SearchPage from './components/Search'
import * as BookApi from './BooksAPI'


class BooksApp extends React.Component {
  state={
    currentlyReading:[],
    read:[],
    wantToRead:[]

  }
  ShiftTo=(book,s)=>{
    let curr=book.shelf;
    let b =this.state[curr].splice(this.state[curr].indexOf(this.state[curr].filter((b)=>b.id===book.id)[0]),1)
    b[0].shelf=s
    console.log(s)
    switch(s){
      case 'currentlyReading':
        this.setState((state)=>({
          currentlyReading:[...state.currentlyReading,b[0]]
    
        }))
        break;
      case 'wantToRead':
        this.setState((state)=>({
          wantToRead:[...state.wantToRead,b[0]]
    
        }))
        break; 
      case 'read':
        this.setState((state)=>({
          read:[...state.read,b[0]]
    
        }))
        break; 
      default:
        return this.state
    }
BookApi.update(book,s)
  }
  

  componentDidMount(){
    BookApi.getAll().then(
      (result)=>{
        this.setState(()=>({ 
          currentlyReading:result.filter((b)=>b.shelf==='currentlyReading'),
          read:result.filter((b)=>b.shelf==='read'),
          wantToRead:result.filter((b)=>b.shelf==='wantToRead'),
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
                <BookShelf books={this.state.currentlyReading}
                Move={this.ShiftTo}
                shelf={'Currently Reading'} />
                <BookShelf books={this.state.wantToRead}
                Move={this.ShiftTo} 
                shelf={'Want To Read'}/>
                <BookShelf books={this.state.read}
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
