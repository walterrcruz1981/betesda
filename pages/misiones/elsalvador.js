import IglesiasTemplate from "../../components/elements/iglesias/IglesiasTemplate";
import { misionElSalvadorInfo } from '../../public/assets/page-content/misiones'

function MisionElSalvador() {
    return (
        <IglesiasTemplate churchInfo={misionElSalvadorInfo} />
    )
}

export default MisionElSalvador