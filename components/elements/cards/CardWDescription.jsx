import styled from "styled-components"
import Image from 'next/image'

function CardWDescription(prop) {
  const { height, borderRadius, content } = prop
  return (
    <CardContainer style={{ height: height, borderRadius: borderRadius }} className="flex-center text-shadow">
      <Image objectFit="cover" layout="fill" priority src={content?.imageUrl} alt={content?.title} />
      <div className="content">
        <h1><span>{content?.subtitle || ''}</span><br></br>{content?.title}</h1>
        <p>{content?.description}</p>
        {<button onClick={() => console.log('clicked')}>{content?.buttonText}</button> || null}
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
      width: 100%;
      box-shadow: 1px 1px 1px black; 
      cursor: pointer;
      overflow: hidden;
      position: relative;
      background: linear-gradient(to top, #00000050, #0000006c, #ffffff1f);
      &:hover{
        box-shadow: 1px 1px 6px black;
        transform: scale(1.001);
        transition: all 300ms ease-in-out;
      }
      .content {
        width: 70%;
        row-gap: .4em;
        line-height: 1.4em;
        color: white;
        z-index: 1;
        font-size: 1.2rem;
        span {
          font-size: 1rem;
        }
      }
      @media(max-width: 600px){
        .content{
          width: 90%;
          line-height: 1.6rem;
        }
      }
`;
export default CardWDescription