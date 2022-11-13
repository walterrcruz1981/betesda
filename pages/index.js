import styled from "styled-components"
import PageHeader from "../components/PageHeader";
import Link from 'next/link'
import CardWDescription from "../components/elements/cards/CardWDescription";
import CardWButton from "../components/elements/cards/CardWButton";
import HomeSlideShow from "../components/elements/HomeSlideShow";
import * as content from '../public/assets/page-content/homeContent'
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import liveIcon from '../public/assets/images/live.png'
import Image from "next/image";
import Modal from "../components/elements/Modal";

const youtubeApiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&eventType=live&order=date&type=video&key='

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const res = await fetch(`${youtubeApiUrl}${apiKey}`)
  const data = await res.json();
  const videos = await client.getEntries({ content_type: 'videos' })
  const anuncios = await client.getEntries({ content_type: 'anuncios' })
  return {
    props: {
      videos,
      anuncios,
      data
    },
    revalidate: 1
  }
}

export default function Home({ videos, anuncios, data }) {
  const videoInfo = {
    videoUrl: 'Lo Que Jesus Vino Hacer - Nueva Serie.mov',
    posterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
  }
  const [isLive, setIsLive] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [videoId, setVideoId] = useState([])
  function checkLiveStatus(check) {
    if (check.pageInfo.totalResults !== 0) setIsLive(false)
    else return
    const { id } = check.items[0]
    setVideoId(id.videoId)
  }
  useEffect(() => {
    checkLiveStatus(data)
  }, [])
  return <HomeContainer>
    {isLive
      ? <div className="live-icon">
        <Image src={liveIcon} priority objectFit="cover" alt='live icon' />
      </div>
      : null
    }
    <PageHeader title='Home'></PageHeader>
    <div className="cards-container">
      {isLive
        ? <div className="live-video">
          <iframe frameBorder='none' width='100%' height='100%' src={'https://www.youtube.com/embed/' + videoId}
            title='live video'
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        : <HomeSlideShow anuncios={anuncios} videos={videos.items} slideShow={content.slideShow} />}

    </div>
    <div className="container flex">
      <div className="cards-container">
        <div className="nueva-serie flex-center-column text-shadow">
          <h1>Serie Actual:</h1>
          <Image layout="fill" objectFit="cover" alt="nueva serie image" src={videoInfo.posterImage}></Image>
          <button onClick={() => setOpenModal(true)}>Ver Video</button>
        </div>
        <Modal videoInfo={videoInfo} open={openModal} closeModal={() => setOpenModal(false)} />
        <div className="links flex">
          <p><span><strong>Involucrate</strong></span><br></br>¿Que puede hacer Dios Con Ud?</p>
          <Link href="/donaciones" ><a className="link">Donaciones</a></Link>
          <Link href="/conectate/servir" ><a className="link">Voluntario</a></Link>
          <Link href="/conectate/clases" ><a className="link">Clases</a></Link>
          <Link href="/contacto" ><a className="link">Contacto</a></Link>
          <Link href="/sermones" ><a className="link">Sermones</a></Link>
          <Link href="https://www.facebook.com/MercyHouseBetesda" ><a className="link">Mercy House</a></Link>
        </div>
      </div>
      <div className="cards-container">
        <Link href={content.information[1].buttonLink}><a><CardWButton content={content.information[1]} borderRadius='10px' height='30em' /></a></Link>
        <Link href={content.information[0].buttonLink}><a><CardWButton content={content.information[0]} borderRadius='10px' height='30em' /></a></Link>
        <Link href={content.classes[2].buttonLink}><a><CardWButton content={content.classes[2]} borderRadius='10px' height='30em' /></a></Link>
      </div>
      <div className="cards-container">
        <Link href={content.heroContent1.buttonLink}><a><CardWDescription content={content.heroContent1} borderRadius='10px' height='40em' /></a></Link>
      </div>
    </div>
  </HomeContainer>

}

const HomeContainer = styled.div`
.live-icon{
  background-color: #ffffff;
  position: absolute;
  width: 75px;
  height: 75px;
  z-index: 10;
  top: 1.9em;
  left: 38%; 
  transition: width;
  animation: spin 2s  ease-in-out infinite;
}

@keyframes spin {
  0% {transform: scale(1)}
  50% {transform: scale(1.2);}
  100% {
    transform: scale(1);
  }
}

.live-video{
  height: 44em;
  width: 100%;
  iframe{
    height: 45em;
    width: 100%;
  }
}
.container {
  flex-direction: column;
  gap: 1.9em;
  width: 100%;
  margin: 0 auto;
  padding-top: 3em;
  .description {
    display: none;
    background-color: red;
  }
  .show {
    display: block;
  }
  .cards-container {
    gap: 1.1em;
    width: 100%;
    display: grid;
    padding: .1em 1em;
    grid-template-columns: repeat( auto-fit, minmax(370px, 1fr) );
    .links {
      flex-direction: column;
      justify-content: center;
      gap: .4em;
      padding: 0 2em;
      outline: 1px solid;
      border-radius: 10px;
      &:hover{
        box-shadow:inset 1px 1px 1px black;
      }
      span {
        font-size: 1.5rem;
      }
      .link {
        font-size: 1.2em;
        line-height: .9em;
        border-bottom: 1px solid  #acacaca7;
        padding: .4em;
      }
    }
    .nueva-serie{
      width: 100%;
      height: 22em;
      position: relative;
      border-radius: 1em;
      overflow: hidden;
      h1{
        z-index: 1;
        color: white;
      }
    }
  }
}
@media (max-width: 650px){
    .live-icon{
      width: 60px;
      left: 58%;
      top: 2.2em;
    }
    .live-video{
      height: 30em
    }
  }

`;