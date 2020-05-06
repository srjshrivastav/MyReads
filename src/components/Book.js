import React,{Component} from 'react'

class BookUI extends Component{
   
    render(){
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+this.props.book.imageLinks.thumbnail+')'}}></div>
              <div className="book-shelf-changer">
                <select id='select' onChange={(event)=>{this.props.shelfchanger(event,this.props.book)}} value={this.props.book.shelf?this.props.book.shelf:'none'}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" disabled={this.props.book.shelf==='currentlyReading'?true:false}>Currently Reading</option>
                  <option value="wantToRead" disabled={this.props.book.shelf==='wantToRead'?true:false}>Want to Read</option>
                  <option value="read" disabled={this.props.book.shelf==='read'?true:false}>Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors?this.props.book.authors.join(', '):''}</div>
            </div>
            )
    }
}

export default BookUI