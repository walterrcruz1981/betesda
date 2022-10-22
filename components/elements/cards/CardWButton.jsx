import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'
function CardWButton(props) {
  const { height, borderRadius, content } = props
  return (
    <CardContainer style={{ height: height, borderRadius: borderRadius }} className="flex-center">
      <Image layout="fill" src={content?.imageUrl} alt={content?.title} priority />
      <div className="content">
        <h1><span>{content?.subTitle}</span><br></br>{content?.title}</h1>
        <button className="mi-boton">{content?.buttonText || 'Butotn'}</button>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
      width: 100%;
      height: 20em;
      border-radius: 12px;
      box-shadow: 1px 1px 1px black;
      overflow: hidden;
      position: relative;
      background: linear-gradient(to bottom, #0000004e, #00000067, #ffffff10);
      img {
        position: absolute;
        object-fit: cover;
        z-index: -1;
      }
      .content {
        width: 60%;
        row-gap: .4em;
        line-height: 1.7em;
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
export default CardWButton