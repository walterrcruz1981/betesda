import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
                        <h1>Hora de Servicio</h1>
                        <h4>{content.servicios}</h4>
                    </div>
                    <div className="image-container">
                        <Image layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80' alt='slide image'></Image>

                    </div>
                </SplideSlide>
                <SplideSlide className='slide flex'>
                    <div className="slide-text flex-center-column">
                        <h1>Visitanos Aquí</h1>
                        <h4>{content.direccion}</h4>
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
.slide{
    align-items: flex-end;
    padding-bottom: 2.8em;
   .slide-text{
    z-index: 1;
    height: 20em;
    width: 1100%;
    color: white;
    background-color: #00000073;
    }
    .image-container{
    height: 40em;
    z-index: -1;
    } 
}

@media (max-width: 700px){
.slide{
    .slide-text{
        height: 10em;
    }
    .image-container{
        height: 22em;
    }
}
}
`;

export default MisionesSlideShow