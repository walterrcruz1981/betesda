import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

function VideoModal() {

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();
    function closeModal(e) {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    return (<>
        <HeroModal className='flex-center-column'>
            <Image layout='fill' src='https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='hero' />
            <h1 className='title text-shadow'>Bienvenidos a<br></br> Ministerios Betesda</h1>
            <button className='open' onClick={() => setShowModal(!showModal)
            }>Ver Video</button>

            {showModal ? <ModalBackground ref={modalRef} onClick={closeModal}>
                <VideoContainer>
                    <button onClick={() => setShowModal(false)}>X</button>
                    <iframe frameBorder='none' width='100%' height='100%' src="https://www.youtube.com/embed/KvZYUC9nEGY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </VideoContainer>
            </ModalBackground> : null}
        </HeroModal>
    </>

    )
}

const HeroModal = styled.div`
    height: 50em;
    position: relative;
    overflow: hidden;
    background: linear-gradient(to right, #035a8d50, #ffffff26, #035a8dda);
    .title{
        color: #ffffff;
    }
    button.open {
        background: none;
        color: white;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 600;
        outline: 1px solid  #9dd1fc;
        padding: 1em 3em;
        margin-top: 1em;
        &:hover {
            color: #9dd1fc
        }
    }
    .open {
        border: none;
    }
    h1 {
        color: white;
        font-size: 4rem;
        width: 65%;
        @media (max-width: 50em){
            font-size: 2rem;
            white-space: nowrap;
    }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    @media (max-width: 50em){
        height: 20em;
        .title {
            font-size: 1rem;
            text-align: center;
        }
        h1 {
            font-size: 2rem;
        }
    }

`;
const ModalBackground = styled.div`
position: absolute;
inset: 0 0 0 0;
padding: 1em 3em;
display: flex;
align-items: center;
justify-content: center;
background-color: #00000086;
`;
const VideoContainer = styled.div`
 width: 80%;
    aspect-ratio: 16 / 9;
    background-color: #00000071;
    opacity: 1;
    position: relative;
    button {
        position: absolute;
        top: -1em;
        right: -1em;
        font-size: 1.5rem;
    }
    @media (max-width: 1200px){
        height: 60vh;
        width: 80vw;
        button {
            top: -1em;
            left: -1em;
            background-color: transparent;
            color: white;
        }
    }
    @media (max-width: 800px){
        height: 40vh;
        width: 80vw;
        button {
            top: -1em;
            left: -1em;
            background-color: transparent;
            color: white;
        }
    }

    @media (max-width: 50em){
        height: 30vh;
        width: 100vw;
        button {
            top: -1em;
            left: -1em;
            background-color: transparent;
            color: white;
        }
    }
`;



export default VideoModal