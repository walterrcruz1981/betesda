import React, { useState } from 'react'
import styled from 'styled-components'
import { estrategiaText1, estrategiaText2, estrategia } from '../../../public/assets/page-content/peaceContent'


function Estrategia() {
    const [selected, setSelected] = useState(0)
    function handleAccordion(id) {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }
    return (
        <EstrategiaContainer>
            <h1 className='header flex-center'>Estrategia</h1>
            <p className='intro primary-color'>{estrategiaText1.text}</p>
            <div className="info-container flex-center">
                <div className="accordion-container">
                    {estrategia.map((item, id) => {
                        return (
                            <div onClick={() => handleAccordion(id)} key={id} className='each-accordion flex'>
                                <div className="title flex">
                                    {item.title}
                                    <span>{selected === id ? '-' : '+'}</span>
                                </div>
                                <p className={selected === id ? 'description active' : 'description'}>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className="description-text">
                    {estrategiaText2.text}
                </div>
            </div>
        </EstrategiaContainer >

    )
}

const EstrategiaContainer = styled.div`
padding: 2em 0;
  .intro {
    font-size: 1.5rem;
    font-weight: 700;
    width: 60%;
    padding-bottom: 1em;
    text-align: center;
    margin: 0 auto;
  }
  .info-container {
    background-color: rgba(6,147,227,1);
    margin-top: 2em;
    .accordion-container{
      width: 100%;
      border-right: 1px solid white;
      margin: 2em 0;
      .each-accordion {
       outline: 1px solid white;
       padding: 1.5em 1em 0 1em;
       margin: 0 1em;
       height: 10em;
       flex-direction: column;
       width: 98%;
       height: auto;
       box-shadow: inset 1px -10px 10px #cdf00a21;
       .title {
        font-weight: 600;
        color: white;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
       }
       .description {
        line-height: 1.4em;
        max-height: 0;
        overflow: hidden;
        transition: all 1s ease-out;
       }
       .active {
        max-height: 100%;
        height: auto;
        transition: all 1s ease-in-out;
        text-decoration: none;
        color: white;
        box-shadow: inset 1px 10px 10px #00000067;
        padding: 1em 1em;
       }

      }
    }
    .description-text{
      width: 100%;
      line-height: 1.6em;
      .side-text {
        color: white;
        align-items: stretch;
        flex: 1;
        padding: 1em 2em;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
      .accordion-container{
        border-right: none;
        grid-template-columns: 1fr;
        grid-row-gap: .1em;
      }
    }

  }
`;

export default Estrategia