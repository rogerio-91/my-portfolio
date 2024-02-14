import React, { useState } from 'react'
import styles from './Card.module.css'
import ButtonB from '../elements/ButtonB';

const Card = ({ img, title, tech, description, repository, site }) => {

  const [info, setInfo] = useState(false); 

  const infoOn = () => {
    setInfo(true)
  };

  const infoOf = () =>{
    setInfo(false)
  }

  
  return (
    <div onMouseLeave={infoOf} className={styles.card}>
      <a onMouseEnter={infoOn} href={site}>
        <img src={img} alt='ERRO' />
      </a>

      {info === true &&(
        <section>
        <h3>{title}</h3>
        <p><strong>Tecnologia:</strong> {tech} </p>
        <p>{description}</p>
        <ButtonB text='Acesse o Repositorio' link={repository} />
      </section>
      )

      }

      
    </div>

  )
}

export default Card