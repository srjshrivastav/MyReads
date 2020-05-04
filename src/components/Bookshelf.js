import React ,{Component} from 'react'



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
                {books.map((book)=>(
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                      <div className="book-shelf-changer">
                        <select id='select' onChange={(event)=>{this.handleevent(event,book)}} value={book.shelf}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading" disabled={book.shelf==='currentlyReading'?true:false}>Currently Reading</option>
                          <option value="wantToRead" disabled={book.shelf==='wantToRead'?true:false}>Want to Read</option>
                          <option value="read" disabled={book.shelf==='read'?true:false}>Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.join(', ')}</div>
                  </div>
                </li>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf