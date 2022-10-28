import styled from "styled-components"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";
import Link from "next/link";
import WhatsUp from "../../features/WhatsUp";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer>
            <h1 className="title">{churchInfo.nombreDeMision}</h1>
            <MisionesSlideShow content={churchInfo} />
            <ChurchInfo content={churchInfo} />
            <WhatsUp href={churchInfo.whatsupUrl} />
        </IglesiaTemplateContainer>
    )
}

const IglesiaTemplateContainer = styled.div`
    height: 100%;
    .title{
        text-align: center;
    }
    .whatsup-container{
        position: fixed;
        right: .4em;
        top: 80%;
        z-index: 1;
        background-color: green;
        display: inline-block;
        border-radius: 50%;
        padding: .7em;
        box-shadow: 1px 1px 20px green;
        animation: glow 3s ease-in-out infinite;
        .whatsup-icon{
        font-size:4em;
        color: #ffffff;
    }
    }
    @keyframes glow {
        30%{
            rotate: 10deg;
            background-color: #2fc96f;
        }
         100% {
             transform: scale(.95);
            rotate: -10deg;
        }
}
@media (max-width: 700px){
    .whatsup-container{
        .whatsup-icon{
        font-size: 2.5em;
    }
    }
}
`;

export default IglesiasTemplate