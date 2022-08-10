import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import Link from 'next/link'
import VideoSlideShow from './VideoSlideShow';
import { useState } from 'react';

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
                                    <img src={url} alt={title} />
                                    <h1 className='text-shadow'>{subTitle}<br /><span>{title}</span></h1>
                                    <button><Link href={link}><a>{buttonText}</a></Link></button>
                                </div>
                            </SplideSlide>
                        })}

                    </Splide>
                }
                <div className="more-video-container">
                    <a onClick={() => setActiveSlide(!activeSlide)} className='more-videos text-shadow'>{activeSlide ? 'Ver Anuncios' : 'Ver Sermones'}</a>
                </div>
                <div className="control-panel">
                </div>
            </SlideShowContainer>
        </>
    )
}


const SlideShowContainer = styled.div`
box-shadow: 1px 1px 4px black;
margin-bottom: 3em;
background-color: #ff00007a;
position: relative;
.control-panel {
    width: 50%;
    height: 4.2em;
    background-color: #ffffff;
    position: absolute;
    top: 95%;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    box-shadow: -0 -5px 2px rgba(0, 0, 0, .20);
}

.more-video-container {
    position: absolute;
    right: -6em;
    top: 50%;
    transform: rotate(270deg);
    z-index: 4;
    background-color: #c9c9c968;
    padding: 1em 2em;
    border-radius: 9px;
    &:hover {
        background-color: #2b72f7;
        color: #0c0c0cdd;
    }
    .more-videos {
    z-index: 4;
    font-size: 3rem;
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
    top: 100%;
   right: 30%;

}
.splide__arrow--prev{
    top: 100%;
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
img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    bottom: 0;
    top: 0;
}

h1 {
    color: #fff;
    font-size: 1.8rem;
}
span {
    color: #fff;
    font-size: 3rem;
    padding: 1em 0;
}
@media (max-width: 35em) {
    height: 22em;
    padding-bottom: 2em;
    h1 {
    color: #fff;
    font-size: 1.1rem;
}
span {
    color: #fff;
    font-size: 1.5rem;
    padding: 1em 0;
}
}
}

`;


export default HomeSlideShow




