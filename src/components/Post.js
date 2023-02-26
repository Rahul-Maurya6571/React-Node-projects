import React from 'react'
import { Link } from 'react-router-dom'
import TopNavbar from './TopNavbar'

const Post = () => {
  return (
    <>
    <TopNavbar />
  
    <div id='post-main-container'>
      
    <div className='post-container'>
    <div className='post-field'>
      <input type="text" placeholder='no file choosen'/>
      <input type="file" />
    </div>
    
    <div className='details'>
    <input type="text" placeholder='author'/>
    <input type="text" placeholder='location'/>
    <div className='post-input'>
      <input type="text"  placeholder='description'/>
    </div>
  </div>
  <Link to='/postview'>
  <button className='post-btn'> Post

</button>

  </Link>
  
  </div>
  
  </div>
  </>
  
  )
}

export default Post
