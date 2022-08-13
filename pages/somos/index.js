import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../components/elements/Modal';
import { propositos } from '../../public/assets/page-content/propositos'

function Somos() {
    const [selected, setSelected] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    return (
        <SomosContainer>
            <div className="hero flex-center-column text-shadow">
                <h1><span>Bienvenido</span><br></br>A Ministerios Betesda</h1>
                <Image className='image' layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' priority />
                <button onClick={() => setOpenModal(true)}>Ver Video</button>
            </div>
            <Modal open={openModal} closeModal={() => setOpenModal(false)} />
            <div className="fancy-accordion flex-center-column">
                <h1 className="header">Somos Iglesia Con Proposito</h1>
                <Image className='image' layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' priority />
                <div className="container flex-center">
                    <div className="buttons">
                        {propositos?.map((item, index) => (
                            <div key={index} onClick={() => setSelected(index)} className={index !== selected ? 'button text-shadow' : 'button text-shadow  button-reveal'} href="">{item.title}</div>
                        ))}
                    </div>
                    {propositos?.map((item, index) => (
                        <div className="button-content text-shadow">
                            <h1>{selected === index ? item.title : null}</h1>
                            <p key={index}>{selected === index ? item.description : null} </p>
                            {selected === index ? <Image className='image' layout='fill' objectFit='cover' src={item.imageUrl} priority /> : null}
                        </div>
                    ))}
                </div>
            </div>
        </SomosContainer>
    )
}

const SomosContainer = styled.div`
    .hero {
        padding: 1em;
        position: relative;
        height: 35em;
        color: white;
        h1 {
            font-size: 3em;
        }
        span {
            font-size: 3em;
        }
        img{
            z-index: -1;
        }
    }
    .fancy-accordion{
        position: relative;
        height: 40em;

        img {
            z-index: -1;
        }
        .container{
            border-radius: 1em;
            justify-content: space-evenly;
            gap: 1em;
            overflow: hidden;
            position: relative;
            width: 80%;
            height: 30em;
            margin: 0 auto;
            .buttons{
            flex-direction: column;
            padding: 1em;
            margin: 1em;
            z-index: 1;
            .button {
                display: block;
                background-color: white;
                width: 300px;
                padding: 1.5em 2em;
                height: 5em;
                margin: 1px 0;
                word-break: keep-all;
                transition: all .5s;
                transform: rotateZ(0);
                cursor: pointer;
                text-align: center;
            }
            .button-reveal{
                width: 0;
                background-color: transparent;
                color: white;
            }
        }
        }
        .button-content{
                color: white;
                p {
                    color: white;
                }
            }
    }
    @media (max-width: 800px) {
        .hero{
            height: 25em;
            h1 {
                font-size: large;
            }
        }
        .fancy-accordion{
            height: 100%;
            .container {
                
                width: 100%;
                height: 100%;
                border-radius: 0;
                flex-direction: column;
                padding: 1em;
                .buttons {
                    transform: rotateZ(-90deg);
                    padding: 1em;
                    margin: 0;
                }
                .button-content {
                    margin-top: -2.5em;
                }
            }
        }
    }
`;

export default Somos