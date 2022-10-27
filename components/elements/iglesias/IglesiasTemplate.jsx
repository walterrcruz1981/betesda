import styled from "styled-components"
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer className="flex-center-column">
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