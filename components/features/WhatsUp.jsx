import styled from "styled-components"
import Link from "next/link"
import { AiOutlineWhatsApp } from 'react-icons/ai'


function WhatsUp({ href }) {
    return (
        <WhatsUpContainer>
            <div className="whatsup-container">
                <Link href={href}><a rel="noopener" target='_blank'><AiOutlineWhatsApp className="whatsup-icon" /></a></Link>
            </div>
        </WhatsUpContainer>
    )
}
const WhatsUpContainer = styled.div`
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

export default WhatsUp