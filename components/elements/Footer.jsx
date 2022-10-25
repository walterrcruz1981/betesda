import styled from 'styled-components'
import logo from '../../public/assets/images/logo2.png'
import { navLinks } from '../../public/assets/page-content/links';

import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from '../features/SocialLinks';

const Footer = () => {
    return (
        <FooterContainer className='flex-center'>
            <div className='logo'>
                <Link href='/'><Image src={logo} alt='logo' /></Link>
            </div>
            <div className='nav-links flex-center'>
                {navLinks.map((link, key) => (
                    <Link key={key} href={link.href}>{link.name}</Link>
                ))}
            </div>
            <SocialLinks />
            <p className='copyright'>© 2022 Iglesia Ministerios Betesda</p>
        </FooterContainer>
    )
}

export default Footer
const FooterContainer = styled.div`
flex-direction: column;
gap: 1em;
overflow: hidden;
background: #4d4d4f;
position: relative;
margin-top: 1em;
padding: 2em 1em;
.copyright {
    color: #ffffff89;
    font-size: .8rem;
}
    .logo {
        width:8em;
    }
    .nav-links {
        gap: 1.6em;
        font-weight: 700;
       a {
        color: #9e9999;
        &:hover{
            color: white;
        }
       }
    }
    
    @media (max-width: 800px) {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .nav-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            line-height: 1em;
            text-align: left;
        } 
    }
    @media (min-width: 800px) {
      
    }

`;