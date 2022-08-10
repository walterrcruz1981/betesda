import React, { useEffect } from 'react'
import styled from 'styled-components'

function Eventos() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://public.tockify.com/browser/embed.js";
        document.body.appendChild(script);
    }, [])
    return (
        <EventosContainer>
            <div className='hero-section flex-center'>
                <img src="https://images.unsplash.com/photo-1602669255503-8166f04d1a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div className="text-content">
                    <h3 className='text-shadow'>Eventos</h3>
                    <p className='text-shadow'></p>
                </div>
            </div>
            <div className="calendar">
                <div data-tockify-component="calendar" data-tockify-calendar="walter.rene.cruz"></div>
                <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
            </div>
        </EventosContainer>
    )
}

const EventosContainer = styled.div`
position: relative;
.hero-section {
        width: 100%;
        height: 30em;
        margin: 0 auto;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: -1;
            height: 30em;
            width: 100%;
            object-fit: cover;
        }
        .text-content {
            padding-bottom: 1em;
            color: white;
            width: 50%;
            text-align: center;
           h3 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: .6em;
           }
           p {
            font-size: 1.5rem;
            letter-spacing: 1px;

           }
        }
    }
    .calendar {
        width: 80%;
        margin: 0 auto;
    }
    @media (max-width: 800px){
        .hero-section{
            height: 30em;
            .text-content {
                width: 100%;
                h3 {
                    font-size: 1.8rem;
                }
                p {
                    font-size: 1.3rem;
                }
            }
        }
    }
`;
export default Eventos