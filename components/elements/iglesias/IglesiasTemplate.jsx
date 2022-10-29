import styled from "styled-components"
import MisionesSlideShow from "./MisionesSlideShow";
import ChurchInfo from "./ChurchInfo";
import WhatsUp from "../../features/WhatsUp";
import { useState, useEffect } from "react";

const Airtable = require('airtable')

function IglesiasTemplate({ churchInfo }) {
    const base = new Airtable({ apiKey: 'keyjMO1cT7ZU8iYlG' }).base('app1k016g9PHBWyCQ');
    const table = base('ESslideShow');
    const [slides, setSlides] = useState([])

    useEffect(() => {
        getRecords()
    }, [])

    const getRecords = async () => {
        const records = await table.select().firstPage()
        setSlides(records)
        console.log(slides);
    }

    return (
        <IglesiaTemplateContainer>
            <MisionesSlideShow slideContent={slides} content={churchInfo} />
            <ChurchInfo content={churchInfo} />
            <WhatsUp href={churchInfo.whatsupUrl} />
        </IglesiaTemplateContainer>
    )
}

const IglesiaTemplateContainer = styled.div`
`;

export default IglesiasTemplate