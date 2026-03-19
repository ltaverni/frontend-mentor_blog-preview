import { useState } from 'react'
import picture from './assets/images/image-avatar.webp'
import image from './assets/images/illustration-article.svg'
import './App.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='picture'>
                <img src={picture}></img>
            </div>
            <div className='name'>
                Greg Hooper
            </div>
        </div>
    )
}

const Text = () => {
    return (
        <div className='text'>
            These langages are the backbone of every website, defining structure, content, and presentation.
        </div>
    )
}

const Title = () => {
    return (
        <div className='title'>
            HTML & CSS foundations
        </div>
    )
}

const Date = () => {
    return (
        <div className='date'>
            Published 19.03.2026
        </div>
    )
}

const Category = () => {
    return (
        <div className='category'>
            Learning
        </div>
    )
}

const Image = () => {
    return (
        <div className='image'>
            <img src={image}></img>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card'>
            <Image />
            <Category />
            <Date />
            <Title />
            <Text />
            <Footer />
        </div>
    )
}


const App = () => {

  return (
    <div className='main'>
        <Card />
    </div>
  )
}

export default App
