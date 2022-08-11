import styled from "styled-components"
import Image from 'next/image'

function Conectate() {
    return (
        <ConectateContainer>

            <SideBar className="flex-center">
                <a href="#top">Top</a>
                <a href="#middle">middle</a>
                <a href="#bottom">bottom</a>
            </SideBar>
            <div className="container flex">

                <Hero id="top">
                    <Image layout='fill' src="https://images.unsplash.com/photo-1659394754288-1742a34b1089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="conectate" />
                </Hero>
                <Hero id="bottom">
                    <Image layout='fill' objectFit="cover" src="https://images.unsplash.com/photo-1659394754288-1742a34b1089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="conectate image 2" />
                </Hero>
            </div>
        </ConectateContainer>
    )
}
const ConectateContainer = styled.div`
.container {
    flex-direction: column;
    gap: 6em;
}
`;
const SideBar = styled.div`
   width:300px;
    height: 30em;
    padding-left: 1em;
    position: sticky;
    background: #000000;
    top: 30%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Hero = styled.div`
    width: 100%;
    height: 40em;
    position: relative;
    img {
        height: 40em;
        width: 100%;
        object-fit: cover;
    }
`;

export default Conectate