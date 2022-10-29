import Image from "next/image";
import styled from "styled-components"
import ContactInfo from "../ContactInfo";
import { useRef, useEffect, useState } from 'react'

function ChurchInfo({ content }) {

    return (
        <InfoCardContainer>
            <div className="intro-container flex-center">
                <div className="description text-space">
                    <h1>Le importas a Dios y a nosotros tambien</h1>
                    <p>{content.nuestraIglesia}</p>
                </div>
                <div className="image">
                    <Image objectFit="cover" layout="fill" src={content.imageUrl} alt="info image" />
                </div>
            </div>
            <div className="parallax-container">
                <div className="fixed-image">
                    <Image objectFit="cover" layout="fill" src='https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' alt="info image" />
                </div>
                <div className="mision flex-center-column text-space text-shadow">
                    <h1>Misión</h1>
                    <p>{content.mision}</p>
                </div>
                <div className="vision flex-center-column text-space text-shadow">
                    <h1>Visión</h1>
                    <p>{content.vision}</p>
                </div>
            </div>
            <div className="contact-title text-space flex-center-column">
                <h1>Contacto</h1>
                <h3>Nos gustaria que nos visites</h3>
            </div>
            <ContactInfo content={content} />
        </InfoCardContainer>
    )
}

const InfoCardContainer = styled.div`

position: relative;
    .spacer{
        height: 30em;
    }
    .intro-container{
        padding: 1.2em;
        gap: 1.2em;
        background-color: white;
        .description{
            p{
                letter-spacing: 2px;
            }
            flex-grow: 1;
            width: 100%;
        }
        .image{
        position: relative;
        flex-grow: 1;
        width: 100%;
        height: 25em;
    }
    }
    .parallax-container{
        
        .fixed-image{
         z-index: -10;
         position: fixed;
        display: inline-block;
        width: 90em;
        height: 30em;
        margin: 0 auto;
        top: 40%;
        left: 0;
        right: 0;
        padding: 2em;
        color: white;
        z-index: -1;
        p{
            color: white;
        }
        }
        .mision{
        position: fixed;
        display: inline-block;
        top: 40%;
        width: 50%;
        margin: 0 auto;
        left: 0;
        right: 0;
        color: white;
        
        z-index: -1;
        p{
            color: white;
            font-size: 1.5rem;
        }
    }
        .vision{
        position: fixed;
        display: inline-block;
        top: 60%;
        width: 50%;
        margin: 0 auto;
        left: 0;
        right: 0;
        color: white;
        
        z-index: -1;
        p{
            color: white;
            font-size: 1.5rem;
        }
    }
         
    }
    .contact-title{
        margin-top: 28em;
        height: 18em;
        background-color: #ffffff;
        line-height: 1em;
        h1{
            font-size: 3.5rem;
        }
    }
    .contact-container{
            .mapa{
                width: 100%;
            }
            background-color: #dbf1ff;
            gap: 1em;
            text-align: left;
            align-items: center;
            .contact-text-content{
                justify-content: flex-start;
                width: 100%;
            }
        }
        @media (max-width: 1000px){
        .parallax-container{
        .mision{
            width: 90%;
            top: 58%;
        }
        .vision{
            top: 43%;
            width: 90%;
        }
    }
}

    @media (max-width: 860px){
        .intro-container{
        flex-direction: column-reverse;
        margin: 0 0;
        padding: 1em;
       .image{
        height: 20em;
       }            
        }
        .parallax-container{
            .fixed-image{
                top: 25%;
            }
            .mision{
                top: 47%;
                width: 90%;
                p{
                    font-size: 1em;
                }
            }
            .vision{
                top: 33%;
                width: 90%;
                p{
                    font-size: 1em;
                }
            }
        }
        .contact-title{
            height: 13em;
            margin-top: 25em;
        }
        .contact-container{
            flex-direction: column-reverse;
            padding: 1em;
            .mapa{
                width: 100%;
            }
        }
    }
    @media (max-width: 600px){
        .parallax-container{
            .mision{
                top: 40%;
            }
            .vision{
                top: 25%;
            }
        }
    }
`;
export default ChurchInfo