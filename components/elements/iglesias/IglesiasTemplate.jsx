import styled from "styled-components"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";
import Link from "next/link";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer>
            <h1 className="title">{churchInfo.nombreDeMision}</h1>
            <MisionesSlideShow content={churchInfo} />
            <ChurchInfo content={churchInfo} />
            <div className="whatsup-container">
                <Link href='https://wa.me/17148783335'><a rel="noopener" target='_blank'><AiOutlineWhatsApp className="whatsup-icon" /></a></Link>

            </div>
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
        top: 60%;
        background-color: green;
        display: inline-block;
        border-radius: 50%;
        padding: .7em;
        box-shadow: 1px 1px 20px green;
        animation: glow 3s ease-in-out infinite;
        .whatsup-icon{
        font-size:5em;
        color: #ffffff;
    }
    }
    @keyframes glow {
        30%{
            rotate: 10deg;
            background-color: #2fc96f;
        };
         100% {
    transform: scale(.95);
    rotate: -10deg;
  }
}
@media (max-width: 700px){
    .whatsup-container{
        .whatsup-icon{
        font-size: 3em;
    }
    }
}
`;

export default IglesiasTemplate