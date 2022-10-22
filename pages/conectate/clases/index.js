import Image from "next/image";
import styled from "styled-components"
import LargeTab from "../../../components/elements/LargeTab";
import propositoImage from '../../../public/assets/images/02.png'
import { introText, classInfo } from '../../../public/assets/page-content/classContent'

function Clases() {
    return (
        <ClassesContainer>
            <div className="title">
                <h1>Clases de desarrollo</h1>
            </div>
            <div className="image-header">
                <Image objectFit="cover" layout="fill" src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="header image"></Image>
            </div>
            <div className="proposito flex-center">
                <div className="image relative">
                    <Image src={propositoImage} alt='proposito image'></Image>
                </div>
                <div className="text-content">
                    <h1>{introText.title}</h1>
                    <p className="description">{introText.description}</p>
                </div>
            </div>
            <LargeTab tabInfo={classInfo} />
        </ClassesContainer>
    )
}

const ClassesContainer = styled.div`
    width: 100%;
    .image-header{
        position: relative;
        height: 25em;
    }
    .proposito{
        gap: 3em;
        margin: 2em 0;
        padding-right: 1em;
        height: 30em;
        .image{
            width: 30em;
        }
        .text-content{
            width: 70%;
            .description{
                letter-spacing: 1px;
                line-height: 1.6;
            }
        }
    }
    @media (max-width: 700px){
        .proposito{
            height: 100%;
        gap: 1em;
        margin: 2em 1em;
        padding-right: 1em;
            flex-direction: column;
        .image{
            width: 80%;
        }
        .text-content{
            width: 100%;

            .description{
                letter-spacing: 1px;
                line-height: 1.6;
            }
        }
    }
    }
`;

export default Clases