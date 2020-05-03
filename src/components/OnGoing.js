import React,{Component} from 'react'

class OnGoing extends Component{
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book)=>(
                                <li>
                                <div className="book">
                                  <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                    <div className="book-shelf-changer">
                                      <select>
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

export default OnGoing