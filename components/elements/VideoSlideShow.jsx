import { Splide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import styled from "styled-components";
import Image from 'next/image'

const SPLIDE_OPTIONS = {
    pagination: true,
    arrows: false,
    interval: 8000,
    mediaQuery: 'min',
    rewind: true,
    autoplay: true,
    video: {
        autoplay: false,
        mute: false,
        playerOptions: {
            youtube: {

            }
        }
    }
};

function VideoSlideShow({ videos }) {
    console.log(videos);
    return (
        <VideoSlideShowContainer>
            <Splide
                options={SPLIDE_OPTIONS}
                extensions={{ Video }}>
                <li className="splide__slide" data-splide-vimeo='https://vimeo.com/765420614'>
                    <div className="splide__slide__container">
                        <div className="video-image">
                            <Image layout='fill' objectFit="cover" className="image" src='https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt='welcome image' />
                            <div className="welcome-content text-space text-shadow">
                                <h1 className="text-shadow">Bienvenido a Ministerios Betesda</h1>
                            </div>
                        </div>
                    </div>

                </li>
                {/* {videos?.map(video => {
                    const { title, videoUrl, posterImage = {} } = video.fields
                    const { file, title: imageTitle } = posterImage.fields
                    return <li key={video.sys.id} className="splide__slide" data-splide-youtube={videoUrl}>
                        <div className="splide__slide__container">
                            <div className="video-image">
                                <Image layout='fill' objectFit="cover" className="image" src={'https:' + file.url} alt={imageTitle} />
                            </div>
                        </div>
                        <div className="content">
                            <h1 className="text-shadow">{title}</h1>
                        </div>
                    </li>
                })} */}
            </Splide>
        </VideoSlideShowContainer>
    )
}

const VideoSlideShowContainer = styled.div`
  background-color: #000000;
    position: relative;
    .content {
        position: absolute;
        top: 1em;
        left: 10%;
        color: white;
        text-align: center;
    }
    .welcome-content{
        position: absolute;
        top: 30%;
        left:10%;
        right: 20%;
        width: 60%;
        font-size: 2.3em;
        color: white;
    }

   .splide__slide {
    width: 100%;
    height: 45em;
    .video-image {
        width: 100%;
        height: 44.96em;
        object-fit: cover;
    }
   }

   .splide__video__play {
    height: 6em;
    width: 5em;
    outline: 8px solid #669cff8f;
    background: #000000;
    &::after {
        border-color: transparent transparent transparent #ffffff;
    }
   }
   @media (max-width: 800px){
    .splide__slide{
        height: 30em;
        .video-image {
        width: 100%;
        height: 29.96em;
        object-fit: cover;
    }
    }
   }
`;
export default VideoSlideShow

