import React from 'react'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import styles from './Projects.module.css'
import xmen from '../../image/projects/xmen.png'
import DNCoffee from '../../image/projects/DNCoffee.png'
import CCPX2022 from '../../image/projects/CCPX2022.png'


const Projects = () => {
    return (
        <div id='Projects' className={styles.projects}>
            <h1>Projetos</h1>
            <Card
            img={xmen} 
            title='Xmen Landing Page' 
            tech='HTML, CSS e JS' 
            description='O objetivo do projeto é exibir uma lista de personagens dos X-Men da Marvel e permitir que o usuário selecione um personagem para ver mais detalhes.' 
            repository='https://github.com/rogerio-91/project-xmen' 
            site=' https://project-xmen.netlify.app/'
            />

            <Card
            img={DNCoffee} 
            title='DNC Coffee' 
            tech='HTML, CSS e JS' 
            description='O objetivo do projeto é a criação de uma landing page utilizando a semântica html, bootstrap e javascript.' 
            repository='https://github.com/rogerio-91/DNC-Coffee' 
            site='https://dnc-coffee.netlify.app/'
            />

            <Card
            img={CCPX2022} 
            title='CCPX 2022' 
            tech='HTML, CSS e JS' 
            description='O objetivo do projeto é a criação de uma landing page, do evento CCPX. Onde foi se utilizou um countdown de contagem regressiva do evento.' 
            repository='https://github.com/rogerio-91/landing-page-ccpx-2022' 
            site='https://lancamentoccpx2022.netlify.app/'
            />


            
            
            <ButtonB text='Acesse o meu repositório' link='https://github.com/rogerio-91?tab=repositories'/>

        </div>
    )
}

export default Projects