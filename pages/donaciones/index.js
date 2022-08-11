import React, { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

function Donaciones() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.breezechms.com/js/give.js";
        document.body.appendChild(script);
    }, [])
    return (
        <DonacionesContainer>
            <div className='hero-section flex-center'>
                <Image layout='fill' src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="donaciones" />
                <div className="text-content">
                    <h3 className='text-shadow'>Vea lo que Dios puede hacer a través de su generosidad.</h3>
                    <p className='text-shadow'>Sencillo y seguro. Dé un solo regalo o programe donaciones recurrentes usando su cuenta corriente, tarjeta de débito o crédito.</p>
                </div>
            </div>
            <div className='give-container box-shadow' id="breeze_giving_embed" data-subdomain="betesda" data-width="100%"
                data-background_color="f0ffff" data-text_color="000"
                data-donate_button_background_color="6495ED"
                data-donate_button_text_color="f0ffff" data-fund_id=""
                data-frequency="" data-amount="">
            </div>
            <a href="https://betesda.breezechms.com/give/online" target="_blank" rel="noopener noreferrer"></a>

        </DonacionesContainer>
    )
}

const DonacionesContainer = styled.div`
    .hero-section {
        width: 100%;
        height: 20em;
        margin: 0 auto;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: -1;
            width: 100%;
            height: 40em;
            object-fit: cover;
        }
        .text-content {
            color: white;
            width: 50%;
            text-align: center;
           h3 {
            font-size: 2.7rem;
            font-weight: 700;
            margin-bottom: .6em;
           }
           p {
            font-size: 1.5rem;
            letter-spacing: 1px;
            color: white;
           }
        }
    }
    .give-container {
        width: 51%;
        margin: 0 auto;
        background: linear-gradient(to bottom, #00000034, white, #ffffff);
        backdrop-filter: blur(1em);
    }
    @media (max-width: 860px){
        .hero-section{
            height: 30em;
            .text-content {
                width: 90%;
                h3 {
                    font-size: 1.8rem;
                }
                p {
                    font-size: 1.3rem;
                }
            }
        }
        .give-container {
        width: 90%;
    }
    }
`;
export default Donaciones