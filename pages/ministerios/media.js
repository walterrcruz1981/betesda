import Image from "next/image";
import styled from "styled-components"
import { Media } from "../../public/assets/page-content/ministerios";

const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
const video = 'mediaVideo.mp4'
const heroImage = 'fotos/media/mediaTeam.jpg'
const heroVideo = 'heroVideo.mp4'
const misionImage = 'https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
const visionImage = 'https://images.unsplash.com/photo-1622202210941-5fc06f1d581a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
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
            <div className="card-container">
                <div className="card flex-center-column text-shadow">
                    <h1>Visión</h1>
                    <p>{Media.vision}</p>
                    <Image layout="fill" objectFit="cover" src={visionImage} alt='transmission en vivo'></Image>
                </div>
                <div className="card flex-center-column">
                    <h1>Misión</h1>
                    <p>{Media.mision}</p>
                    <Image layout="fill" objectFit="cover" src={misionImage} alt='transmission en vivo'></Image>
                </div>
            </div>
            <div className="video-container">
                <h1>¿Que Hacemos?</h1>
                <hr />
                <video autoPlay muted src={domain + video}></video>
                <div className="duties">
                    {Media.duties?.map((duty, index) => (
                        <h1 className="box-shadow" key={index}>{duty}</h1>
                    ))}
                </div>
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
    border-radius: .6em;
    overflow: hidden;
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
        margin-top: -3.5em;
        margin-left: 25%;
        color: white;
        font-size: 2rem;
        span{
            color: #57b3ff;
            font-size: 3rem;
        }
    }
}
.card-container{
        display: grid; 
        margin: 1.8em 0;
        gap: 1em;
        grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
        
    .card{
        position: relative;
        height: 30em;
        border-radius: .6em;
        overflow: hidden;
        p, h1{
            margin: 1em;
            color: white;
            z-index: 1;
            background-color: #000000ae;
        }
        img{
            top: 0;
            filter: contrast(1.8);
            :hover{
                transform: scale3d(1.2,1.1,1.8) skewY(2deg);
            
            }
            transition: all 800ms ease-in-out;
        }
    }
}
.video-container{
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .duties{
        display: grid; 
        margin: 1.8em 0;
        gap: 1em;
        grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
        h1{
            background-color: #66adff;
            padding: .5em;
            text-align: center;
            color: white;
        }
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