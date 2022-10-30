import Script from 'next/script'
import React from 'react'
import styled from 'styled-components'

const Modal = ({ open, closeModal }) => {
    <Script src="https://player.vimeo.com/api/player.js"></Script>

    if (!open) return null
    return (
        <ModalContainer onClick={closeModal} className='flex-center'>
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
                <div onClick={closeModal} className="close">X</div>
                <iframe width='100%' height='100%' src="https://player.vimeo.com/video/765420231?h=0e9904f6ab&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Bienvenidos a casa.mov"></iframe>
            </div>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    min-height: 100%;
    inset: 0 0 0 0;
    background-color: #000000bc;
    z-index: 10000;
    .modal-content {
        width: 70vw;
        max-width: 70em;
        background-color: #0a0a0a;
        aspect-ratio: 16/9;
        z-index: 10001;
        position: relative;
        .close {
            font-size: 2em;
            font-weight: 600;
            z-index: 10002;
            background-color: #000000bc;
            padding: .1em;
            color: white;
            position: absolute;
            top: 18px;
            right: -18px;
            cursor: pointer;
            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
    @media (max-width: 800px) {
        .modal-content{
            width: 100%;
            .close{
                top: -1em;
                right: 1em;
            }
        }
    }
`;

export default Modal