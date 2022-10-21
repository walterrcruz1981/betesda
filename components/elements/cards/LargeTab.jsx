import Image from "next/image";
import { useState } from "react";
import styled from "styled-components"

function LargeTab({ tabInfo }) {
    const [active, setActive] = useState(0)
    return (
        <LargeTabContainer className="relative">
            <div className="tab-title-container center-text flex">
                {tabInfo.map((title, index) => {
                    return <div onClick={() => setActive(index)} key={index} className={active === index ? "active-tab text-shadow" : 'tab-title'}>
                        <h4>{title.title}</h4>
                    </div>
                })}
            </div>
            <div className="tab-content flex-center">
                {tabInfo.map((image, id) => {
                    return active === id ? <div className='tab-content-image'><Image layout="fill" objectFit="cover" src={image.imageUrl} alt='tab image'></Image></div> : null;
                })}
                {tabInfo.map((item, id) => {
                    return active === id ? <div className="tab-content-text">{item.description} </div> : null;
                })}

            </div>

        </LargeTabContainer>
    )
}

const LargeTabContainer = styled.div`
    width: 100%;
    height: 40em;
    margin: 1em 0;
    overflow: hidden;
    .tab-title-container{
        justify-content: space-around;
        .tab-title{
            margin-right: .6em;
            width: 100%;
            background-color: white;
            cursor: pointer;
            &:hover{
                color: blue;
                text-decoration: underline;
            }
           &:last-child{
            margin-right: 0;
           }
        }
    }
    .tab-content{
        height: 100%;
        .tab-content-text{
            width: 60%;
            background-color: #1b1b22c3;
            padding: 0 1.5em;
            p{
                color: white;
            }
        }
        .tab-content-image{
            z-index: -1;
        }
    }
    @media (max-width: 700px){
        .tab-content{
        height: 100%;
        .tab-content-text{
            width: 100%;
            background-color: #1b1b22c3;
            padding: 0 1.5em;
            p{
                color: white;
            }
        }
        .tab-content-image{
            z-index: -1;
        }
    }
    }
`;

export default LargeTab