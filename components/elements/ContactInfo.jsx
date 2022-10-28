import styled from 'styled-components'
import SocialLinks from '../features/SocialLinks'
import Link from 'next/link';

function ContactInfo({ content }) {
    return (
        <ContactInfoContainer>
            <div className="contact-container flex box-shadow">
                <div className="mapa">
                    <iframe height='500px' width='100%' src={content.iframeSrc} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-text-content flex-column">
                    <h1>{content.nombreDeMision}</h1>
                    <p><b>Servicio: </b>{content.servicios}</p>
                    <p><b>Direccion: </b>{content.direccion}</p>
                    <p><b>tel: </b>{content.cellPhone}</p>
                    <p><b>Whatsapp: </b>{content.whatsup}</p>
                    <p><b>Email: </b><Link href={`mailto:${content.email}`}><a>{content.email}</a></Link></p>
                    <p><b>Web: </b><Link href={content.websiteUrl}><a>Visitar Pagina</a></Link></p>
                    <SocialLinks />
                </div>
            </div>
        </ContactInfoContainer>
    )
}
const ContactInfoContainer = styled.div`
    .contact-container{
            .mapa{
                width: 100%;
            }
            background-color: #f1faff;
            gap: 2em;
            text-align: left;
            align-items: center;
            .contact-text-content{
                justify-content: flex-start;
                width: 100%;
            }
        }
        @media (max-width: 860px){
            .contact-container{
            flex-direction: column-reverse;
            padding: 1em;
            .mapa{
                width: 100%;
            }
        }
        }
`;

export default ContactInfo