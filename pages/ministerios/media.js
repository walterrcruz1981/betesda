import Image from "next/image";
import styled from "styled-components"
import { Media } from "../../public/assets/page-content/ministerios";

const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
const video = 'mediaVideo.mp4'
const heroImage = 'fotos/media/mediaTeam.jpg'
const heroVideo = 'heroVideo.mp4'

function media() {
    return (
        <MediaContainer>
            <div className="hero-section flex-column">
                <hr></hr>
                <div className="text-content flex-column-start text-shadow">
                    <span>{Media.title.toUpperCase()}</span>
                    <h1>CONOCE NUESTRO<br></br> MINISTERIO</h1>
                </div>
                <video objectFit='cover' autoPlay muted src={domain + heroVideo}></video>
            </div>
            <div className="video-container">
                <h1>¿Que Hacemos?</h1>
                <hr />
                <video autoPlay muted src={domain + video}></video>
            </div>

        </MediaContainer>
    )
}

const MediaContainer = styled.div`
width:100%;
margin: 0 auto;
.hero-section{
    position: relative;
    padding: 38% 0 0;
    width: 100%;
    height: 60em;
    video{
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text-content{
        width: 100%;
        margin-top: -6em;
        margin-left: 25%;
        color: white;
        font-size: 2rem;
        span{
            color: #20aaa3;
            font-size: 6rem;
        }
    }
}
.video-container{
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}

@media (max-width: 600px){
    .hero-section{
        height: 30em;
        .text-content{
            font-size: 1rem;
            margin-left: 10%;
            margin-top: -4em;
            span{
                font-size: 2rem;
            }
        }
    }
}
@media (max-width: 800px){
    .hero-section{
        height: 30em;
        .text-content{
            font-size: 1rem;
            margin-left: 2%;
            margin-top: -4em;
            span{
                font-size: 2rem;
            }
        }
    }
}
`;
export default media