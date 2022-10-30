import Airtable from 'airtable'
import React from 'react'

export async function getStaticProps() {
    var base = new Airtable({ apiKey: 'keyjMO1cT7ZU8iYlG' }).base('app1k016g9PHBWyCQ');
    const table = base('ESslideShow');
    const records = table.select({ view: 'Grid view' });
    const data = await records.json()
    return {
        props: {
            data,
        },
        revalidate: 1
    }
}

function MisionChile({ data: records }) {
    console.log(records);
    return (
        <div>MisionChile</div>
    )
}

export default MisionChile