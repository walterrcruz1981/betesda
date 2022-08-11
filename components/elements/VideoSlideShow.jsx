import { Splide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import styled from "styled-components";
import Image from 'next/image'

const SPLIDE_OPTIONS = {
    pagination: false,
    mediaQuery: 'min',
    rewind: true,
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
                {videos?.map(video => {
                    const { title, videoUrl, posterImage = {} } = video.fields
                    const { file, title: imageTitle } = posterImage.fields
                    return <li key={video.sys.id} className="splide__slide" data-splide-youtube={videoUrl}>
                        <div className="splide__slide__container">
                            <div className="video-image">
                                <Image layout='fill' className="image" src={'https:' + file.url} alt={imageTitle} />
                            </div>
                        </div>
                        <div className="content">
                            <h1 className="text-shadow">{title}</h1>
                        </div>
                    </li>
                })}
            </Splide>
        </VideoSlideShowContainer>
    )
}

const VideoSlideShowContainer = styled.div`
  background-color: blue;
    position: relative;
    .content {
        position: absolute;
        top: 1em;
        left: 10%;
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
    outline: 2px solid #00ff37c7;
    background: #69696975;
    &::after {
        border-color: transparent transparent transparent #ffffff;
    }
   }
`;
export default VideoSlideShow

