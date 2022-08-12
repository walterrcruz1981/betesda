import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import Link from 'next/link'
import VideoSlideShow from './VideoSlideShow';
import { useState } from 'react';
import Image from 'next/image'

function HomeSlideShow({ anuncios, videos, slideShow }) {
    console.log(anuncios)
    const [activeSlide, setActiveSlide] = useState(false)
    return (
        <>
            <SlideShowContainer>
                {activeSlide ? <VideoSlideShow videos={videos} /> :
                    <Splide options={{
                        pagination: false,
                        arrows: true,
                        autoplay: false,
                        interval: 10000,
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

                <div className="control-panel">
                </div>
                <div onClick={() => setActiveSlide(!activeSlide)} className="more-video-container">
                    <a className='more-videos text-shadow'>{activeSlide ? 'Ver Anuncios' : 'Ver Sermones'}</a>
                </div>
            </SlideShowContainer>
        </>
    )
}


const SlideShowContainer = styled.div`
box-shadow: 1px 1px 4px black;
margin-bottom: 3em;
background-color: #000000;
position: sticky;
.control-panel {
    width: 60%;
    height: 4.2em;
    background-color: #acacac;
    position: absolute;
    top: 100%;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    box-shadow: -0 -5px 2px rgba(0, 0, 0, .20);
}

.more-video-container {
    z-index: 4;
    background-color: #2b72f7;
    padding: 1vh 2vw;
    text-align: center;
    &:hover {
        background-color: #2b72f78d;
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
    background-color: transparent;
    outline: 2px solid #2b72f7;
    border: 1px solid red;
    margin: 1em;
}
.splide__arrow {
    height: 4em;
    width: 4em;
    background-color: #0c0c0cdd;  
    svg {
        height: 2em;
        width: 2em;
        fill: white;
        stroke: black;
    }
}
.splide__arrow--next{
    top: 111%;
   right: 30%;

}
.splide__arrow--prev{
    top: 111%;
    left: 30%;
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
        font-size: 1.1rem;
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


export default HomeSlideShow




