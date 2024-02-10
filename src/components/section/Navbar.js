import React from 'react'
import styles from './Navbar.module.css'
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <ul>
        <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
        <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
        <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
      </ul>

      <ul>
        <li><a href='https://www.instagram.com/rogerio.engineer/'><FaInstagram size={30} /></a></li>
        <li><a href='https://github.com/rogerio-91'><FaGithub size={30} /></a></li>
        <li><a href='https://www.linkedin.com/in/rogerio-rocha-santos-junior/'><FaLinkedin size={30} /></a></li>
        <li><a href='https://wa.me/5531997870589?text=Olá,Rogério! Tenho interesse em discutir sobre o desenvolvimento do meu site.
'><FaWhatsapp size={30} /></a></li>
      </ul>
      
      
    </div>
  )
}

export default Navbar;