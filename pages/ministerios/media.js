import Image from "next/image";
import styled from "styled-components"
import { Media } from "../../public/assets/page-content/ministerios";
import { Parallax } from "react-parallax";

const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
const video = 'mediaVideo.mp4'
const heroImage = 'fotos/media/mediaTeam.jpg'
const heroImage2 = 'fotos/media/mediaTeam2.jpg'
const heroVideo = 'heroVideo.mp4'
const misionImage = 'https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
const visionImage = 'https://images.unsplash.com/photo-1622202210941-5fc06f1d581a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
function media() {

    return (
        <MediaContainer>
            <Parallax strength={400} bgImage={domain + heroImage2} style={{ borderRadius: '2em', boxShadow: '-2px 10px 20px #0051ff66' }}>
                <div className="hero-section flex-column  box-shadow">
                    <hr></hr>
                    <div className="text-content flex-column-start text-shadow">
                        <span>{Media.title.toUpperCase()}</span>
                        <h1>CONOCE NUESTRO<br></br> MINISTERIO</h1>
                    </div>
                    {/* <video poster={domain + heroImage2} objectFit='cover' autoPlay muted src={domain + heroVideo}></video> */}
                </div>
            </Parallax>
            <div className="card-container">
                <div className="card flex-center-column text-shadow box-shadow">
                    <h1>Misión</h1>
                    <p>{Media.vision}</p>
                    <Image layout="fill" src={visionImage} alt='transmission en vivo'></Image>
                </div>
                <div className="card flex-center-column box-shadow">
                    <h1>Visión</h1>
                    <p>{Media.mision}</p>
                    <Image layout="fill" src={misionImage} alt='transmission en vivo'></Image>
                </div>
            </div>
            <div className="video-container">
                <h1>¿Que Hacemos?</h1>
                <hr />
                <video autoPlay muted src={domain + video}></video>
                <div className="duties">
                    {Media.duties?.map((duty, index) => (
                        <Parallax bgClassName="duties-card" style={{ borderRadius: '1em', boxShadow: '-2px 2px 20px #0051ff66' }} key={index} strength={400} bgImage={domain + duty.image}>
                            <div className="text-content flex-center">
                                <h1>{duty.title}</h1>
                            </div>
                        </Parallax>
                    ))}
                </div>
            </div>

        </MediaContainer >
    )
}

const MediaContainer = styled.div`
width:100%;
margin: 0 auto;
.hero-section{
    position: relative;
    padding: 30% 0 0;
    width: 100%;
    height: 50em;
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
        .text-content{
            text-align: center;
            height: 20em;
            box-shadow: 10px 20px 30px red;
            h1{
                background-color: #58bef860;
                padding: 1em;
                text-align: right;
                color: white;
            }
        }
        .duties-card{
            height: 10em;
            width: 10em;
            z-index: -2;
        
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
    .duties{
        gap: 0;
        h1{
            padding: 0;
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