import React from 'react'
import styled from 'styled-components'
import { plan, planIntroText1, planIntroText2, planIntroText3 } from '../../../public/assets/page-content/peaceContent';

function Plan() {
    return (
        <PlanContainer>
            <h1 className='header flex-center'>Plan</h1>
            <h3 className='flex-center primary-color'>{planIntroText1.text}</h3>
            <div className="intro-text flex-center">
                {planIntroText2.text}
                {planIntroText3.text}
            </div>
            <h1 className='flex-center primary-color'>Se Implementa de la siguiente forma:</h1>
            <div className='cards-container'>
                {plan.map((item, id) => {
                    return (
                        <div key={id} className={id !== 1 && id !== 3 ? "card flex-center" : 'card flex-center flex-reverse'}>
                            <img src={item.imageUrl}
                                alt="" />
                            <div className="card-content">
                                <h3 className='card-title'>{item.title}</h3>
                                {item.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </PlanContainer>

    )
}
const PlanContainer = styled.div`
  padding: 2em 1em 0;
  .intro-text {
    background-color: #5c5c5c;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    gap: 1em;
    padding-inline: 1em;
    padding: 2em 0;
    margin: 2em 0;
    .text {
         color: white;
      z-index: 1;
      width: 100%;
      margin: 0 2em;
      line-height: 1.5em;
    }
  }
  .cards-container {
    gap: 1em;
    img {
     width: 50%;
     height: 30em;
     object-fit: cover;
    }
    .card {
      position: relative;
      .card-content {
        background-color: #1a1e44;
        .card-title {
            margin: 1em 1em;
            color: #ffffffce;
        }
        .card-description-right {
        background-color: #e4aa68e4;
        margin-right: -6em;
        border-radius:  0 10px 10px 0;
        padding: 1em;
      }
      .card-description-left {
        background-color: #50e9fdd8;
        margin-left: -6em;
        border-radius:  10px 0 0 10px;
        padding: 1em;
      }
      }
      
    }
  }
  @media (max-width: 800px) {
      .intro-text {
        flex-direction: column;
        background-color: #5c5c5c;
        padding: 1em 1em;
      }
      .cards-container{
        .card {
        flex-direction: column;
        margin-bottom: 1.5em;
        padding-top: 1em;
        border-top: 1px solid black;
        height: 100%;
        img {
          width: 100%;
          height: 14em;
        }
        .card-content {
            text-align: center;
        .card-title {
            margin: 1em 1em;
            color: #ffffffce;
        }
        .card-description-right {
        background-color: #e4aa68e4;
        margin-right: 0;
        border-radius:  0 0 0 0;
        padding: 1em;
      }
      .card-description-left {
        background-color: #50e9fdd8;
        margin-left: 0;
        border-radius:  0 0 0 0;
        padding: 1em;
      }
      }

      }
      }
      
    }
`;
export default Plan