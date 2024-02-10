import React from 'react'
import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

const
    Prensentation = () => {
        return (
            <div id='Presentation' className={styles.presentation}>
                <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
                <h1>Olá, eu sou Rogério!</h1>
                <p>
                Sou um desenvolvedor Full-Stack. Adoro trabalhar com tecnologia e soluções inovadoras.<br></br> 
                Estou sempre em busca de novos desafios para aprimorar minhas habilidades nessa área<br></br> 
                em constante evolução.Tenho experiência tanto no desenvolvimento de interfaces para sites<br></br>
                e aplicativos (front-end) como na programação do sistema por trás deles (back-end).<br></br> 
                Estou animado em compartilhar meus projetos e conquistas neste site de portfolio.<br></br>
                Fique à vontade para explorar e conhecer mais sobre o meu trabalho. <br></br>
                Estou disponível para projetos e oportunidades de colaboração. <br></br>
                Vamos juntos criar soluções tecnológicas que tragam resultados excepcionais e <br></br>
                uma ótima experiência para os usuários. <br></br>
                </p>
                <ButtonA link='https://www.linkedin.com/in/rogerio-rocha-santos-junior/' text='Conecte-se comigo!!'/>

            </div>
        )
    }

export default Prensentation