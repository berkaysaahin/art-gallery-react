import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const content = (
    <section className='welcome'>
        <h1>Welcome</h1>
        <p><Link to='/dash/paintings'>View Paintings</Link></p>
        <p><Link to='/dash/users'>View User Settings</Link></p>
    </section>
  )

  return content
}

export default Welcome