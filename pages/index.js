import styled from "styled-components"
import PageHeader from "../components/PageHeader";
import Link from 'next/link'
import CardWDescription from "../components/elements/cards/CardWDescription";
import CardWButton from "../components/elements/cards/CardWButton";
import HomeSlideShow from "../components/elements/HomeSlideShow";
import * as content from '../public/assets/page-content/homeContent'
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {

  const videos = await client.getEntries({ content_type: 'videos' })
  const anuncios = await client.getEntries({ content_type: 'anuncios' })
  return {
    props: {
      videos,
      anuncios
    }
  }
}



export default function Home({ videos, anuncios }) {
  return <HomeContainer>
    <PageHeader title='Home'></PageHeader>
    <div className="cards-container">
      <HomeSlideShow anuncios={anuncios} videos={videos.items} slideShow={content.slideShow} />
    </div>
    <div className="container flex">
      <div className="cards-container">
        <Link href={content.sermonSemanal.buttonLink}><a><CardWButton content={content.sermonSemanal} borderRadius='0' height='20em' /></a></Link>
        <div className="links flex">
          <p><span><strong>Involucrate</strong></span><br></br>¿Que puede hacer Dios Con Ud?</p>
          <Link href="/donaciones" ><a className="link">Donaciones</a></Link>
          <Link href="/conectate/servir" ><a className="link">Voluntario</a></Link>
          <Link href="https://www.facebook.com/MercyHouseBetesda" ><a className="link">Mercy House</a></Link>
        </div>
      </div>
      <div className="cards-container">
        <Link href={content.information[1].buttonLink}><a><CardWButton content={content.information[1]} borderRadius='0' height='30em' /></a></Link>
        <Link href={content.information[0].buttonLink}><a><CardWButton content={content.information[0]} borderRadius='0' height='30em' /></a></Link>
        <Link href={content.classes[2].buttonLink}><a><CardWButton content={content.classes[2]} borderRadius='0' height='30em' /></a></Link>
      </div>
      <div className="cards-container">
        <Link href={content.heroContent1.buttonLink}><a><CardWDescription content={content.heroContent1} borderRadius='0' height='40em' /></a></Link>
      </div>
    </div>
  </HomeContainer>

}

const HomeContainer = styled.div`
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
    gap: 1.4em;
    width: 100%;
    display: grid;
    padding: 1em 1em;
    grid-template-columns: repeat( auto-fit, minmax(370px, 1fr) );
    .links {
      flex-direction: column;
      justify-content: center;
      gap: .4em;
      padding: 0 2em;
      box-shadow: -1px 0 1px black;
      span {
        font-size: 1.5rem;
      }
      .link {
        font-size: 1.5em;
        line-height: .9em;
        border-bottom: 1px solid  #acacaca7;
        padding: .4em;
      }
    }
  }
}

`;