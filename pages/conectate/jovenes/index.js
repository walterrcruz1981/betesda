import React from 'react'
import styled from 'styled-components';

function Jovenes() {
    return (
        <JovenesContainer>
            <div className='hero flex-center'>
                <h1 className='text-shadow'>Jovenes</h1>
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="" />
            </div>
            <div className="intro primary-color">
                <h1>QUIEN SOMOS</h1>
                <p>
                    En Betesda Kids creemos que todos los niños deben ser conocidos, conectados, equipados y empoderados. CONOCIDO por otro niño y un líder. CONECTADOS a un grupo donde puedan crecer espiritualmente. EQUIPADO con las herramientas y el conocimiento para desarrollar una fe fuerte en Jesús. EMPODERADO para servir a los demás y compartir a Jesús en el mundo.</p>
                <p>Para resumir, Betesda Kids existe para conectar a los niños con Dios y con los demás mientras los ayuda a vivir una vida con propósito.</p>
            </div>
        </JovenesContainer>
    )
}
const JovenesContainer = styled.div`
    .hero {
        position: relative;
        height: 45em; 
        background-color: #00ffc81a;
        h1 {
            font-size: 8rem;
            color: #ffffff;
            letter-spacing: 1px;
        }
        img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }
    }
    .intro {
        text-align: center;
        width: 70%;
        margin: 4em auto;
        h1 {
            color: #4848ec;
            font-weight: 900;
        }
        p {
            margin: 1em 0;
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 1.3rem;
        }

    }
    @media (max-width: 870px) {
        overflow: hidden;
        .hero {
            height: 20em;
            h1 {
                font-size: 2em;
            }
        }
        .intro {
            width: 90%;
            p {
                font-size: 1rem;
            }
        }
    }
`;
export default Jovenes