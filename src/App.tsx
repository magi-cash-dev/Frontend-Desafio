import React, { useState, useEffect } from 'react'
import Joke from './Joke'
import './styles.css'
import { getJokeAndImage } from './api'

const App = () => {
  const [joke, setJoke] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    getJokeAndImage().then(({ joke, image, url }) => {
      setJoke(joke)
      setImage(image)
      setUrl(url)
    })
  }, [])

  const handleGetJoke = () => {
    getJokeAndImage().then(({ joke, image, url }) => {
      setJoke(joke)
      setImage(image)
      setUrl(url)
    })
  }

  return (
    <div>
      <div className="image-container">
        <img src={image} alt="Imagem de fundo" />
        <div className="joke-container">
          <Joke joke={joke} />
        </div>
      </div>
      <button className="button" onClick={handleGetJoke}>
        Nova piada
      </button>
      <button
        className="link-button"
        onClick={() => window.open(url, '_blank')}
      >
        Link para a piada
      </button>
    </div>
  )
}

export default App
