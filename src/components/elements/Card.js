import React from 'react'
import styles from './Card.module.css'
import ButtonB from '../elements/ButtonB';

const Card = ({ img, title, tech, description, repository, site }) => {
  return (
    <div className={styles.card}>
      <a href={site}>
        <img src={img} alt='ERRO' />
      </a>

      <section>
        <h3>{title}</h3>
        <p><strong>Tecnologia:</strong> {tech} </p>
        <p>{description}</p>
        <ButtonB text='Acesse o Repositorio' link={repository} />
      </section>
    </div>

  )
}

export default Card