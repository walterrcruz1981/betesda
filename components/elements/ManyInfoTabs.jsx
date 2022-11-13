import React, { useState } from 'react'
import styled from 'styled-components'

function SomosTabs({ tabContent }) {
    const [activeValor, setActiveValor] = useState(0)
    return (
        <Container className='flex'>
            <h1 className='primary-color flex-center'>{tabContent.title}</h1>
            <div className='flex-center title-container'>
                {tabContent.map((title, id) => {
                    return <div onClick={() => setActiveValor(id)} key={id} className={id === activeValor ? 'active-valor' : 'title'}>{title.title} </div>
                })}
            </div>
            <div className="flex-center description">
                {tabContent.map((description, id) => {
                    return id === activeValor ? <div key={id}>{description.description}</div> : null
                })}
            </div>

        </Container>

    )
}
const Container = styled.div`
width: 70%;
margin: 0 auto;
flex-direction: column;
.title-container {
   width: 100%;
   background-color: aliceblue;
   overflow: hidden;
   flex-wrap: wrap;
   margin: 0 auto;
}
.active-valor {
   color: blueviolet;
   font-weight: 900;
}
.title {
   color: #103a52;
   padding: 1em 1em;
   margin: 2px;
   font-size: 1em;
   &:hover{
    color: #756969ac;
   }
   cursor: pointer;
}
.description {
   background-color: transparent;
   padding: 2em 3em;
   line-height: 1.4em;
}
@media (max-width:1200px) {
    width: 100%;
    .description{
        padding: .6em 1em;
    }
    .title-container {
        .title {
        font-size: .8em;
        padding: .5em .5em;
    }
    }
}

`;
export default SomosTabs