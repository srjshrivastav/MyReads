import React ,{Component} from 'react'


class BookShelf extends Component{


    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book)=>(
                  <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                      <div className="book-shelf-changer">
                        <select  id='move'>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">book.title</div>
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