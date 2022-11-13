import IglesiasTemplate from "../../components/elements/iglesias/IglesiasTemplate";
import { salinasCruz } from '../../public/assets/page-content/misiones'
import { useState, useEffect } from "react";

const Airtable = require('airtable')

function SalinaCruz() {
    const base = new Airtable({ apiKey: 'keyjMO1cT7ZU8iYlG' }).base('app1k016g9PHBWyCQ');
    const table = base('ESslideShow');
    const [slides, setSlides] = useState([])

    useEffect(() => {
        getRecords()
    }, [])

    const getRecords = async () => {
        const records = await table.select().firstPage()
        setSlides(records)
    }
    return (
        <IglesiasTemplate slideContent={slides} churchInfo={salinasCruz} />
    )
}

export default SalinaCruz