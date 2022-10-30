import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';

function MisionesSlideShow({ slideContent, content }) {
    const defaultImage = 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'
    async function getSlides(slides) {
        slides.forEach((slide) => {
            console.log(slide.fields.Attachments[0].url);
        })
    }
    useEffect(() => {
        getSlides(slideContent)
    })
    return (
        <SlideContainer>
            <Splide options={{
                pagination: true,
                autoplay: true,
                arrows: false,
                interval: 8000,
                mediaQuery: 'min',
                rewind: true
            }}>
                <SplideSlide className='slide flex'>
                    <div className="slide-text flex-center-column">
                        <h1>Bienvenido a {content.nombreDeMision}</h1>
                        <h4>Nos alegra mucho que estes aquí</h4>
                    </div>
                    <div className="image-container">
                        <Image layout='fill' objectFit='cover' src={defaultImage} alt='slide image'></Image>
                    </div>
                </SplideSlide>
                {slideContent?.map((slide, index) => {
                    const { Title, Description } = slide.fields;
                    const imageUrl = (slide.fields.Attachments[0].url || defaultImage)

                    return <SplideSlide key={index} className='slide flex'>
                        <div className="slide-text flex-center-column">
                            <h1>{Title || null}</h1>
                            <h4>{Description || null}</h4>
                        </div>
                        <div className="image-container">
                            <Image layout='fill' objectFit='cover' src={imageUrl} alt={Title}></Image>
                        </div>
                    </SplideSlide>
                })}



            </Splide>
        </SlideContainer>
    )
}
const SlideContainer = styled.div`
width: 100%;
padding-bottom: 2em;
background-color: #ffffff;
.slide{
    align-items: flex-end;
   .slide-text{
    line-height: 1.5em;
    h1{
        font-size: 2em;
    }
    height: 20em;
    width: 100%;
    color: white;
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
    }
    .image-container{
    height: 40em;
    z-index: -1;
    } 
}

@media (max-width: 700px){
.slide{
    .slide-text{
        height: 15em;
        padding: 1em;
    }
    .image-container{
        height: 25em;
    }
}
}
`;

export default MisionesSlideShow