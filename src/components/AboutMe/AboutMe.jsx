import React from 'react'
// import '../../App.css'
// .. это выход из папки в родительскую
import classes from './AboutMe.module.css'

// styles
// чтобы использовать JS внутри html используем {}
export const AboutMe = () => {
  return (
    <div className={classes.aboutContainer}>
      <h1 style={{ fontSize: '60px', color: 'green' }}>I am frontend </h1>
    </div>
  )
}

const AboutMe1 = () => {
  return (
    <div>
      <h1>I am frontend developer</h1>
    </div>
  )
}

export default AboutMe1
