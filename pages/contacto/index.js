import styled from 'styled-components'
import React from 'react'
import { betesdaCentral, misionElSalvadorInfo } from '../../public/assets/page-content/misiones'
import ContactInfo from '../../components/elements/ContactInfo'
import Image from 'next/image'
import WhatsUp from '../../components/features/WhatsUp'

const Contact = () => {
    return (
        <ContactContainer>
            <div className="title text-shadow">
                <h1>Ministerios Betesda<br></br> Contacto</h1>
            </div>
            <div className="image">
                <Image src='https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='top image' layout='fill' objectFit='cover'></Image>
            </div>
            <div className="contact-info">
                <ContactInfo content={betesdaCentral} />
                <hr />
                <ContactInfo content={misionElSalvadorInfo} />
            </div>
            <WhatsUp href={betesdaCentral.whatsupUrl} />
        </ContactContainer>
    )
}

export default Contact
const ContactContainer = styled.div`
    .image{
        height: 50vh;
        position: relative;
        z-index: -11;
    }
    .title{
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 4em;
        font-size: 4em;
        line-height: 1.5em;
        z-index: -1;
        text-align: center;
        color: #d6dff0;
    }

    .contact-info{
        margin-top: 12em;
        z-index: 90;
        background-color: white;
    }
    @media (max-width: 860px){
        .image{
            height: 30vh;
        }
        .title{
            top: 5em;
            font-size: 1.8em;
            width: 50%;
            padding: 0 .5em;
        }
        .contact-info{
            margin-top: 5em;
        }

    }
`;