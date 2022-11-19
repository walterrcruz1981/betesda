import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import Link from 'next/link'
import VideoSlideShow from './VideoSlideShow';
import { useRef, useState } from 'react';
import Image from 'next/image'
import Modal from './Modal';
import { Parallax } from 'react-parallax';

function HomeSlideShow({ anuncios, videos, slideShow }) {
    const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
    const heroImage = 'fotos/media/mediaTeam.jpg'
    const hero1 = 'https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    const videoUrl = 'https://dih6tqxrn8ffv.cloudfront.net/bienvenida.mov'
    const videoPoster = 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    const [activeSlide, setActiveSlide] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const playVideo = new useRef()
    return (
        <>
            <SlideShowContainer>
                {activeSlide ? <VideoContainer>

                    {!isPlaying
                        ? <div className="poster-container"><Parallax strength={500} style={{ height: '100%', width: '100%' }} bgImage={hero1}>
                            <div className="content text-shadow">
                                <h1>Ministerios Betesda</h1>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setIsPlaying(true)
                                }}>Bienvenida</button>
                            </div>

                        </Parallax></div>
                        : <div className="video-container">
                            <video controls autoPlay poster={videoPoster} ref={playVideo} src={videoUrl}>video loading...</video>
                        </div>
                    }
                </ VideoContainer> :
                    <Splide options={{
                        pagination: true,
                        autoplay: false,
                        arrows: false,
                        mediaQuery: 'min',
                        rewind: true
                    }}>

                        {anuncios.items?.map(slide => {
                            const { buttonLink = [], buttonText, title, subTitle, image = {} } = slide.fields
                            const { url } = image.fields.file
                            const { link } = buttonLink[0].fields
                            return <SplideSlide className='slide-container' key={slide.sys.id}>
                                <div className='slide-style'>
                                    <Image layout='fill' objectFit='cover' src={'https:' + url} alt={title} priority />
                                    <h1 className='text-shadow'>{subTitle}<br /><span>{title}</span></h1>
                                    <button><Link href={link}><a>{buttonText}</a></Link></button>
                                </div>
                            </SplideSlide>
                        })}

                    </Splide>
                }


                <div onClick={() => setActiveSlide(!activeSlide)} className="more-video-container">
                    <a className='more-videos text-shadow'>{!activeSlide ? 'Ver Intro' : 'Ver Anuncios'}</a>
                </div>
            </SlideShowContainer>
        </>
    )
}


const SlideShowContainer = styled.div`
box-shadow: 1px 1px 4px black;
margin-bottom: 3em;
background-color: #000000;

.more-video-container {
    z-index: 4;
    background-color: #515a69;
    padding: 1vh 2vw;
    text-align: center;
    &:hover {
        background-color: #7687b68d;
        color: #0c0c0cdd;
    }
    .more-videos {
    z-index: 4;
    font-size: 24px;
    color: white;
    }
}

.splide__pagination__page {
    width: .6em;
    height: .6em;
    background-color: white;
    outline: 3px solid #2b72f7;
    margin: 1em;
    transition: all 1s ease-in-out;
}

.slide-style {
width: 100%;
height:44em;
position: relative;
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-end;
row-gap: 1.5em;
padding-bottom: 10rem;

h1 {
    padding-left: 1em;
    color: #fff;
    font-size: 1.8rem;
    z-index: 1;
}
span {
    color: #fff;
    font-size: 3rem;
    padding: 1em 0;
}
}
@media (max-width: 800px) {
        height: 33em;
        padding-bottom: 2em;
        .slide-style{
            height: 30em;
        }
        .splide__arrow--next{
            top: 116%;
            right: 30%;
        }
        .splide__arrow--prev{
             top: 116%;
             left: 30%;
        }
        h1 {
        color: #fff;
        font-size: 2.8rem;
    }

    span {
        color: #fff;
        font-size: 1.5rem;
        padding: 1em 0;
}
.more-video-container {
    border-radius: 0;
}
.control-panel {
    height: 4em;
}
}

`;
const VideoContainer = styled.div`
position: relative;
.poster-container{
    background-color: blue;
    height: 44em;
    position: relative;
    .content{
        color: white;
        margin: 30% 0 20% 30%;
        font-size: 2rem;
    }
}

    .video-container{
        height: 44em;

        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media(max-width: 800px){
        .poster-container{
            height: 30em;
        }
        .content{
            height: 30em;
            padding: 1em;
        }
        .video-container{
            height: 30em;
        }
    }
`;


export default HomeSlideShow




