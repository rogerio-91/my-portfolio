import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li><a href='https://www.instagram.com/rogerio.engineer/'><FaInstagram size={30} /></a></li>
        <li><a href='https://github.com/rogerio-91'><FaGithub size={30} /></a></li>
        <li><a href='https://www.linkedin.com/in/rogerio-rocha-santos-junior/'><FaLinkedin size={30} /></a></li>
        <li><a href='https://wa.me/5531997870589?text=Olá,Rogério! Tenho interesse em discutir sobre o desenvolvimento do meu site.
'><FaWhatsapp size={30} /></a></li>
      </ul>
      <p>programer.rogerio@gmail.com</p>
      <p>Rogério Rocha © 2024</p>
    </div>
  )
}

export default Footer