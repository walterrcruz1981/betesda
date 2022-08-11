import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import BlogCard from '../../../components/elements/cards/BlogCard';
import { ministerios } from '../../../public/assets/page-content/servirContent'
import Image from 'next/image'

function Servir() {
    useEffect(() => {
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/108374970086722890587/form/1FAIpQLSfWGel0Gy4nBZv4YDv3_762ijOCqJ9JgGhrQOUZs23_6Z6VVA/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    })
    return (
        <ServirContainer>
            <div className='hero-section flex-center'>
                <Image layout='fill' src="https://images.unsplash.com/photo-1614886205583-92fe9eaa38fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="servir" />
                <div className="text-content">
                    <h1 className='text-shadow'>Ocupamos tu ayuda</h1>
                    <p className='text-shadow'>Usa tus dones y talentos para marcar la diferencia sirviendo
                        en línea o en su campus..</p>
                </div>
            </div>
            <div className="ministerios-container">
                {ministerios?.map((item, index) => {
                    return (
                        <BlogCard key={index} blogContent={item}></BlogCard>
                    )
                })}
            </div>
            <div className="form  flex-center">
                <h2 className='description text-shadow'>
                    Comience a ofrecerse como voluntario y vea la diferencia inmediata que puede marcar al servir en Ministerios Betesda
                </h2>
                <Image layout='fill' src="https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="form image" />

                <iframe style={{ opacity: .8 }} src="https://docs.google.com/forms/d/e/1FAIpQLSfn450Mxu8t7prYsMww2atUOWDBfPW16h84ptqMnJI_P_ybFA/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
        </ServirContainer>
    )
}
const ServirContainer = styled.div`
overflow: hidden;
.hero-section {
    position: relative;
        width: 100%;
        height:70vh;
        margin: 0 auto;
        overflow: hidden;
        align-items: flex-end;
        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            object-fit: cover;
            filter: invert(60%);
        }
        .text-content {
            padding-bottom: 1em;
            color: white;
            width: 50%;
            text-align: center;
           h1 {
            font-size: 6rem;
            font-weight: 700;
            margin-bottom: .6em;
            line-height: 1em;
           }
           p {
            font-size: 1.5rem;
            letter-spacing: 1px;
            color: white;
           }
        }
    }
    .ministerios-container{
        width: 100%;
        display: grid; 
        margin: 1.8em 0;
        grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
    }
    .form {
        margin: 1em auto;
            width: 80%;
            height: 100vh;
            background-color: #90eeff39;
            padding: 4em 2em;
            position: relative;
            .description {
                margin: 0 auto;
                padding: 1em;
                color: white;
                text-align: center;
                letter-spacing: 1px;
                margin: 2em 0;
                width: 60%;
                font-size: 2rem;
            }
            img {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    z-index: -1;
                    top: 0;
                }
            iframe {
                width: 100%;
                height: 100%;
            }

        }
   
    @media (max-width: 900px){
        .hero-section{
            height: 25em;
            justify-content: center;
            align-items: center;
            .text-content {
                width: 95%;
                h1 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1.3rem;
                }
            }
        }
        .form {
            flex-direction: column;
            padding: 0 0;
            width: 90%;
            .description {
                width: 100%;
                font-size: 1.3rem;
                margin: 0 0;
            }
        }
    }
`;

export default Servir