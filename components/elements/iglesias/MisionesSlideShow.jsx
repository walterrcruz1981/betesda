import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import Image from 'next/image';
import styled from 'styled-components';

function MisionesSlideShow({ content }) {
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
                        <Image layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80' alt='slide image'></Image>
                    </div>
                </SplideSlide>
                <SplideSlide className='slide flex'>
                    <div className="slide-text flex-center-column">
                        <h1>Hora de Servicio</h1>
                        <h4>{content.servicios}</h4>
                    </div>
                    <div className="image-container">
                        <Image layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80' alt='slide image'></Image>

                    </div>
                </SplideSlide>
                <SplideSlide className='slide flex'>
                    <div className="slide-text flex-center-column">
                        <h1>Visitanos Aquí <span></span></h1>
                        <h4>Direccion: {content.direccion}</h4>
                    </div>
                    <div className="image-container">
                        <Image layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='slide image'></Image>
                    </div>
                </SplideSlide>
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