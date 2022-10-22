import Image from "next/image";
import styled from "styled-components"
import LargeTab from "../../../components/elements/LargeTab";
import { gruposInfo, gruposDescription } from '../../../public/assets/page-content/grupos'

function GruposPequenos() {
  return (
    <GruposContainer>
      <div className="image-header">
        <Image layout="fill" objectFit="cover" src='https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' alt="header image grupos"></Image>
      </div>
      <div className="intro-text">
        <h1>{gruposInfo.title}</h1>
        {gruposInfo.description}
      </div>
      <LargeTab tabInfo={gruposDescription} />
    </GruposContainer>
  )
}

const GruposContainer = styled.div`
margin-top: 2em;
  height: 100%;
  text-align: center;
  .image-header{
    position: relative;
    height: 30em;
    z-index: -1;
  }
  .intro-text{
    margin: 3em auto;
    width: 80%;
    text-align: left;
  }
`;

export default GruposPequenos