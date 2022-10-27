import Link from "next/link";
import styled from "styled-components"
import IglesiasTemplate from "../../components/elements/iglesias/IglesiasTemplate";
import InfoCard from "../../components/elements/iglesias/ChurchInfo";
import MisionesSlideShow from "../../components/elements/iglesias/MisionesSlideShow";
import SocialLinks from '../../components/features/SocialLinks'
import { misionElSalvadorInfo } from '../../public/assets/page-content/misiones'

function MisionElSalvador() {
    return (
        <ElSalvadorContainer>
            <IglesiasTemplate churchInfo={misionElSalvadorInfo} />
        </ElSalvadorContainer >
    )
}

const ElSalvadorContainer = styled.div`
    height: 100%;
`;
export default MisionElSalvador