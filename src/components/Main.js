import React from 'react'
// import Content from './Content'
import Email from '../images/Mail.svg'
import LinkedIn from '../images/linkedin.svg'

function Main() {
  return (
    <div className='container'>
        <div className='image'></div>
        <h2>Maya Ossai</h2>
        <h5>Frontend Developer</h5>
        <small>maya-dev.com</small>
        <div className="button--place">
            <div className="button--one"><button> <img src={Email} alt="" /> Email</button></div>
            <div className="button--two"><button> <img src={LinkedIn} alt="" /> LinkedIn</button></div>
        </div>
    </div>
  )
}

export default Main