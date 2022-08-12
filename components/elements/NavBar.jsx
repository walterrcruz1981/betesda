import styled from 'styled-components'

import { FcMenu, FcMinus } from 'react-icons/fc';
import { navLinks } from '../../public/assets/page-content/links';
import logo from '../../public/assets/images/logo.png'
import Image from 'next/image'

import Link from 'next/link'
import { useState } from 'react';

const NavBar = () => {
    const logoLink = '/'
    const [activeNav, setActiveNav] = useState(true)
    return (
        <NavBarContainer className='flex-center'>

            <div className='logo'>
                <Link href={logoLink}>
                    <a><Image src={logo} alt='logo' /></a>
                </Link>
            </div>
            <div className='nav-links flex'>
                {navLinks.map(link => (
                    <Link key={link.name} href={link.href} className='active'>{link.name}</Link>
                ))}
            </div>
            <div className="mobile-nav">
                {!activeNav ? <FcMinus onClick={() => setActiveNav(!activeNav)} className='hamburger' /> :
                    <FcMenu onClick={() => setActiveNav(!activeNav)} className='hamburger' />
                }
                {!activeNav ? <div className="menu-links flex-center">
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.href}>{link.name}</Link>
                    ))}
                </div> : null}
            </div>
        </NavBarContainer>
    )
}

export default NavBar

const NavBarContainer = styled.div`
overflow: hidden;
height: 4em;
justify-content: space-between;
position: relative;
margin: .1em 1em;
z-index: 99;
    .logo {
        width:12em;
        cursor: pointer;
    }
    .nav-links {
        gap: 1.5em;
        font-weight: 700;
    }
    .mobile-nav {
        overflow: hidden;
        .hamburger {
            z-index: 99;
            text-align: left;
            font-size: 2rem;
            color: blue;
            position: absolute;
            top: .5em;
            right: 2em;
            cursor: pointer;
        }
        .menu-links {
            position: fixed;
            flex-direction: column;
            gap: 2em;
            background-color: #f8f8f8ed;
            inset: 0 0 0 0;
            font-weight: 700;
            font-size: 24px;
        }
    }
    @media (max-width: 800px) {
        .nav-links {
            display: none;
        } 
    }
    @media (min-width: 800px) {
        .mobile-nav {
            display: none;
        } 
    }

`;