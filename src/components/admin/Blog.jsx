import React from 'react'

const Blog = () => {
  return (
    <div>
      <div>
        <h1>Blog</h1>
      </div>
      <div className='mt-4'>
        <button className='px-4 py-3 border-2 dark:border-dark-subtle dark:text-dark-subtle dark:hover:bg-dark-subtle dark:hover:text-light-subtle border-light-subtle text-light-subtle hover:bg-light-subtle hover:text-dark-subtle rounded focus:outline-none'>Add Blog</button>
      </div>
    </div>
  )
}

export default Blog