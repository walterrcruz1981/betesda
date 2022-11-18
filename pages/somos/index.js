import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../../components/elements/Modal';
import ManyInfoTabs from '../../components/elements/ManyInfoTabs'
import { propositos } from '../../public/assets/page-content/propositos'
import { propositosUnicos, valores, declaracion } from '../../public/assets/page-content/somosContent'
import Link from 'next/link';

function Somos() {
    const videoInfo = {
        videoUrl: 'Bienvenidos a casa.mov',
        posterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    }
    const [selected, setSelected] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [openLink, setOpenLink] = useState(false)
    const [multiTab, setMultiTab] = useState(0)
    const choiceButtons = [
        { title: 'Proposito', id: 0 },
        { title: 'Valores', id: 1 },
        { title: 'Declaracion', id: 2 }
    ]
    const moreInfoSideLink = [
        { title: 'Pastor General', href: '/somos/ronald', id: '0' },
        { title: 'Grupos Pequeños', href: '/conectate/grupos', id: '1' },
        { title: 'Clases', href: '/conectate/clases', id: '2' },
        { title: 'Contacto', href: '/contacto', id: '3' },
    ]
    return (
        <SomosContainer>
            <div className="hero flex-center-column text-shadow relative">
                <h1><span>Bienvenido</span><br></br>A Ministerios Betesda</h1>
                <Image priority className='image' layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='somos image' />
                <button onClick={() => setOpenModal(true)}>Ver Video</button>
            </div>
            <Modal videoInfo={videoInfo} open={openModal} closeModal={() => setOpenModal(false)} />
            <div className="fancy-accordion flex-center-column">
                <h1 className="header">Somos Iglesia Con Proposito</h1>
                <Image priority className='image' layout='fill' src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='somos' />
                <div className="container flex-center">
                    <div className="buttons">
                        {propositos?.map((item, index) => (
                            <div key={index} onClick={() => setSelected(index)} className={index !== selected ? 'button ' : 'button text-shadow  button-reveal'} href="">{item.title}</div>
                        ))}
                    </div>
                    {propositos?.map((item, index) => (
                        <div key={index} className="button-content text-shadow">
                            <h1>{selected === index ? item.title : null}</h1>
                            <p>{selected === index ? item.description : null} </p>
                            {selected === index ? <Image layout='fill' objectFit='cover' src={item.imageUrl} priority alt={item.title} /> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-container flex-center">
                {choiceButtons.map(button => {
                    return <button key={button.id} className={multiTab === button.id ? 'active-tab' : ''} onClick={() => setMultiTab(button.id)}>{button.title}</button>
                })}
            </div>

            {multiTab === 0 ? <ManyInfoTabs tabContent={propositosUnicos}></ManyInfoTabs> : null
                || multiTab === 1 ? <ManyInfoTabs tabContent={valores}></ManyInfoTabs> : null
                    || multiTab === 2 ? <ManyInfoTabs tabContent={declaracion}></ManyInfoTabs> : null}
            <div className={!openLink ? "side-link close-side-link" : 'side-link'}>
                <h5>Mas Informacion</h5>
                <hr></hr>
                {moreInfoSideLink.map(item => {
                    return <Link key={item.id} href={item.href}><a>{item.title}<br></br></a></Link>
                })}
                <h2 onClick={() => setOpenLink(!openLink)} className={openLink ? '' : 'close-button '}>{openLink ? <a>X</a> : 'lll'}</h2>
            </div>
        </SomosContainer>
    )
}

const SomosContainer = styled.div`
position: relative;
    .side-link{
        position: fixed;
        right: 0;
        top: 40%;
        text-align: right;
        background-color: white;
        margin: 0 1em;
        padding: 1em;
        box-shadow: -2px -2px 20px ;
        width: 12%;
        color: #7c7875;
        text-overflow: none;
        z-index: 100;
        transition: all 1s;
        a{
            font-size: small;
        }
        .close-button{
            position: absolute;
            left: .5em;
            bottom: 30%;
            cursor: pointer;
        }
    }
    .close-side-link{
            right: -2em;
            width: 7%;
            cursor: pointer;
            h3, h4, h5, hr,a{
                opacity: 0;
                transition: all 500ms ease-in-out;
            }
        }
    .hero {
        padding: 1em;
        background-color: #034a9ba4;
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
            filter: blur(.1em);
            opacity: .5;
        }

    }
    .fancy-accordion{
        position: relative;
        height: 40em;

        .image {
            z-index: -1;
            opacity: .2;
        }
        .container{
            border-radius: 1em;
            justify-content: space-evenly;
            gap: 1em;
            overflow: hidden;
            position: relative;
            
            height: 30em;
            margin: 0 auto;
            img{
                z-index: -1;
            }
            .buttons{
            flex-direction: column;
            padding: 1em;
            margin: 1em;
            z-index: 1;
            .button {
                background-color: white;
                width: 300px;
                padding: 1.5em 2em;
                height: 5em;
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: 3px;
                margin: 1px 0;
                word-break: keep-all;
                transition: all .5s;
                transform: rotateZ(0);
                cursor: pointer;
                text-align: left;
                font-weight: 600;
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
    .button-container{
        width: auto;
        margin: 2em;
        gap: 1em;
        transition: all 500ms;
        justify-content: space-evenly;
        button{
            background-color: aliceblue;
            color: black;
            box-shadow: none;
            outline: 1px solid;
            width: 100%;
            position: relative;
            &:hover{
                color: #00a2ff;
            }
        }
        .active-tab{
            background-color: #3d88cf;
            color: white;
            &:hover{
                background-color: #bee2ff;
            }
        }

    }

    @media (max-width: 800px) {
        .side-link{
       display: none;
    }
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