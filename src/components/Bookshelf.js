import React ,{Component} from 'react'
import BookUI from './Book'


class BookShelf extends Component{
  handleevent=(event,book)=>{
  if(event.target.value!=='none')
    this.props.Move(book,event.target.value)
  }


    render(){
      const books =this.props.books
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((b)=>(
                  <li key={b.id}>
                    <BookUI book={b}
                          shelfchanger={this.handleevent} />

                </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf