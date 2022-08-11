import styled from "styled-components"
import Image from "next/image";
import banner from '../../public/assets/images/peace-banner.jpg'
import CincoGigantes from "../../components/elements/peace/CincoGigantes";
import Estrategia from "../../components/elements/peace/Estrategia";
import Plan from "../../components/elements/peace/Plan";
import Link from "next/link";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {

  const video = await client.getEntries({ content_type: 'pageAssets' })
  return {
    props: { video },
    revalidate: 1
  }
}

function PeacePlan({ video }) {

  return (
    <PeacePlanContainer>
      <div className="banner">
        <Image height='1000' src={banner} alt='plan peace'></Image>
      </div>
      <div className="button-container flex-center">
        <Link href='#cinco-gigantes'><a>5 gigantes</a></Link>
        <Link href='#estrategia'><a>Estrategia</a></Link>
        <Link href='#plan'><a>Plan</a></Link>
      </div>
      <div className="gigantes" id="cinco-gigantes">
        <CincoGigantes video={video.items[0].fields.video.fields.file.url} />
      </div>
      <div id="estrategia">
        <Estrategia />
      </div>
      <div id="plan">
        <Plan />
      </div>

    </PeacePlanContainer>

  )
}

const PeacePlanContainer = styled.div`
.banner {
  height: 44em;
  width: 100%;
background-image: url('https://images.unsplash.com/photo-1495556650867-99590cea3657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
background-size: cover;
background-attachment: fixed;
position: rel;
 .image {
  width: 50%;
  position: absolute;
 }
}
.button-container {
  width: 100%;
  height: 2em;
  background: linear-gradient(to right, #679c8a, #123a5a ) ;
  gap: 1em;
  font-size: 2em;
  top: 0;
  position: sticky;
  z-index: 99;
}
.gigantes {
  padding-top: 2em;
}


@media (max-width: 880px) {
  .banner {
    width: 100%;
    height: 25em;
  }
  .button-container {
    font-size: 1rem;
    justify-content: space-around;
  }
}

@media (max-width: 580px) {
  .banner {
    width: 100%;
    height: 16em;
  }
  .button-container {
    font-size: 1rem;
    justify-content: space-around;
  }
}

`;
export default PeacePlan