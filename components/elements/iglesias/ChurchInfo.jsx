import Image from "next/image";
import styled from "styled-components"
import Link from "next/link";
import SocialLinks from "../../features/SocialLinks";
import ContactInfo from "../ContactInfo";

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

            <div className="info-container flex-center">
                <div className="text-content flex-center-column text-space">
                    <h1>Misión</h1>
                    <p>{content.mision}</p>
                </div>
            </div>

            <div className="info-container flex-center">
                <div className="text-content flex-center-column text-space">
                    <h1>Visión</h1>
                    <p>{content.vision}</p>
                </div>
            </div>
            <div className="contact-title text-space flex-center-column">
                <h1>Contacto</h1>
                <h3>Nos gustaria que nos visites pronto</h3>
            </div>
            <ContactInfo content={content} />
        </InfoCardContainer>
    )
}

const InfoCardContainer = styled.div`
margin: 1em 0;
    .intro-container{
        margin: 2em 0;
        padding: 1.2em;
        gap: 1.2em;
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
    .text-content{
        width: 60%;
    }

    .info-container{
        height: 15em;
        background-color: #ffffff;
        outline: 1px solid;
        margin: 1em;
    }
    .contact-title{
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
    @media (max-width: 860px){
        .intro-container{
        flex-direction: column-reverse;
        margin: 0 0;
        padding: 1em;
       .image{
        height: 20em;
       }            
        }
        .info-container{
            .text-content{
                width: 90%;
            }
        }
        .contact-title{
            height: 13em;
        }
        .contact-container{
            flex-direction: column-reverse;
            padding: 1em;
            .mapa{
                width: 100%;
            }
        }
    }
`;
export default ChurchInfo