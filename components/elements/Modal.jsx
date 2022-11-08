import React, { useRef, useState } from 'react'
import styled from 'styled-components'
const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'

const Modal = ({ open, closeModal, videoInfo }) => {
    if (!open) return null
    return (
        <ModalContainer onClick={closeModal} className='flex-center'>
            <div onClick={(e) => { e.stopPropagation() }} className="modal-content">
                <div onClick={closeModal} className="close">X</div>
                <video autoPlay poster={videoInfo.posterImage} src={domain + videoInfo.videoUrl}>
                </video>
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
        video{
            width: 100%;
        }
        .play{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% ,-50%);
            z-index: 10002;
            font-size: 1.5em;
            background-color: #00000092;
            height: 3.5em;
            width: 3.5em;
            color: white;
            border-radius: 50%;
            border: 2px solid white;
            text-align: center;
            cursor: pointer;
            &:hover{
                color: #0a0a0a;
                background-color: #ffffff6e;
                font-weight: 800;
            }
        }
        .hide-play{
            display: none;
        }
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