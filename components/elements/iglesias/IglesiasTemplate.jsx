import styled from "styled-components"
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer>
            <h1 className="title">{churchInfo.nombreDeMision}</h1>
            <MisionesSlideShow content={churchInfo} />
            <ChurchInfo content={churchInfo} />
        </IglesiaTemplateContainer>
    )
}

const IglesiaTemplateContainer = styled.div`
    height: 100%;
    .title{
        text-align: center;
    }
`;

export default IglesiasTemplate