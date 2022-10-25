import styled from "styled-components"
import Image from 'next/image'

function CardWDescription(prop) {
  const { height, borderRadius, content } = prop
  return (
    <CardContainer style={{ height: height, borderRadius: borderRadius }} className="flex-center">
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
      background: linear-gradient(to top, #00000050, #00000026, #ffffff10);
      &:hover{
        box-shadow: 1px 1px 3px black;
      }
      .content {
        width: 60%;
        row-gap: .4em;
        line-height: 1.4em;
        color: white;
        z-index: 1;
        p {
          color: white;
        }
        span {
          font-size: 1rem;
        }
      }
`;
export default CardWDescription