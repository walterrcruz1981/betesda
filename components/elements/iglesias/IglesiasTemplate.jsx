import styled from "styled-components"
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";
import WhatsUp from "../../features/WhatsUp";

function IglesiasTemplate({ churchInfo }) {
    return (
        <IglesiaTemplateContainer>
            <MisionesSlideShow content={churchInfo} />
            <ChurchInfo content={churchInfo} />
            <WhatsUp href={churchInfo.whatsupUrl} />
        </IglesiaTemplateContainer>
    )
}

const IglesiaTemplateContainer = styled.div`
`;

export default IglesiasTemplate