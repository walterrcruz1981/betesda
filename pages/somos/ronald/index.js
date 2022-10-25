import React from 'react'
import styled from "styled-components"
import Image from 'next/image';
import { biography } from '../../../public/assets/page-content/ronaldContent';
import SocialLinks from '../../../components/features/SocialLinks'


function Ronald() {
    return (
        <BiografiaContainer>
            <h1>Biografia</h1>
            <div className="hero flex">
                <div className="hero-content flex-center">
                    <div className="hero-image">
                        <Image objectFit='cover' src={biography.imageUrl1} alt='pastor ronald image'></Image>
                    </div>
                    <div className="text-content">
                        <h1>Pastor Ronald Vides</h1>
                        <p>Pastor Fundador de Ministerios Betesda</p>
                    </div>
                    <div className="social-links">
                        <SocialLinks></SocialLinks>
                    </div>
                </div>
            </div>
            {biography.description}
        </BiografiaContainer>
    )
}

const BiografiaContainer = styled.div`
width: 100%;
margin: 1em;
line-height: 2.2em;
letter-spacing: 1px;
.hero{
    background: linear-gradient(to right, #56bcff, #ffffff, #546ae9);
    height: 35em;
    width: 100%;
    margin-bottom: 3em;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    .hero-content{
        position: absolute;
        bottom: -1em;
        width: 80%;
        background-color: #141d2b;
        height: 30em;
        gap: 1.2em;
        box-shadow: 1px 1px 50px rgba(0,0,0, .3);
        color: white;
        .hero-image{
        flex: 1;
        position: relative;
        overflow: hidden;
    }
    .text-content{
        background-color: #3e3f44;
        flex: 2;
        padding: 1em;
       p{
        color: white;
       }
    }
    .social-links{
        position: absolute;
        bottom: 0;
        padding: 1em;
    }
    }
}
.description{
    width: 100%;
    padding: 1em;
    .inner-image{
        position: relative;
        float: left;
        margin-right: 1em;
    }
}


@media (max-width: 700px) {
    margin: .5em 0;
    img {
        width: 100%;
        float: none;
    }
    .hero{
        height: 32em;
        .hero-content{
        position: relative;
        align-items: flex-end;
        .text-content{
            margin-bottom: 4em;
        }
            .hero-image{
                position: absolute;
                height: 20em;
                width: 10em;
                top: -2em;
            }
        }
    }
}
`

export default Ronald