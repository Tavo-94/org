import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const { nombre, perfilFacebook, perfilInstagram, perfilTwitter } = props.desarrollador
  return (
    <footer className='footer'>
      <div className='redes-sociales'>
        <a href={perfilFacebook} target='_blank' rel='noreferrer'>
          <img src="./img/facebook.png" alt="enlace a facebook" />
        </a>
        <a href={perfilInstagram} target='_blank' rel='noreferrer'>
          <img src="./img/instagram.png" alt="enlace a facebook" />
        </a>
        <a href={perfilTwitter} target='_blank' rel='noreferrer'>
          <img src="./img/twitter.png" alt="enlace a facebook" />
        </a>
      </div>
      <div className='logo-org'>
        <img src="./img/logoOrg.png" alt="" />
      </div>
      <div className='creditos'>
        <p>Desarrollado por {nombre}.</p>
      </div>
    </footer>
  )
}

export default Footer