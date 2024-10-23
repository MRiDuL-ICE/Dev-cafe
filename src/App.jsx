import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'
import Reading from './components/reading/Reading'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks);
  }

  const handleReadingTime = (time) => {
    console.log('mark as read', time);
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto mt-8 md:flex justify-between'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <div>
        <Reading readingTime={readingTime}></Reading>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
