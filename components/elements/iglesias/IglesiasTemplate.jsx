import styled from "styled-components"
import MisionesSlideShow from "./MisionesSlideShow";
import Link from "next/link";
import SocialLinks from "../../features/SocialLinks";
import ChurchInfo from "./ChurchInfo";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer>
            <h1>{churchInfo.nombreDeMision}</h1>
            <MisionesSlideShow content={churchInfo} />
            <ChurchInfo content={churchInfo} />
        </IglesiaTemplateContainer>
    )
}

const IglesiaTemplateContainer = styled.div`
    height: 100%;
`;

export default IglesiasTemplate