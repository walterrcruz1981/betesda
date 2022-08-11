import React from 'react'
import styled from 'styled-components'
import { biography } from '../../../public/assets/page-content/ronaldContent';

function Biografia() {
    return (
        <BiografiaContainer>
            {biography.description}
        </BiografiaContainer>

    )
}
const BiografiaContainer = styled.div`
width: 100%;
margin: 2em;
p {
    font-size: 1em;
    line-height: 1.5em;
    letter-spacing: 1px;
    
}
img {
    float: right;
    padding: .7em;
}
@media (max-width: 700px) {
    margin: .5em 0;
    img {
        width: 100%;
        float: none;
    }
}
`;

export default Biografia