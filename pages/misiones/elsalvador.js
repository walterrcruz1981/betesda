import styled from "styled-components"
import IglesiasTemplate from "../../components/elements/iglesias/IglesiasTemplate";
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