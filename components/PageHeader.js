import Head from 'next/head'
const PageHeader = ({ title }) => {
    return (
        <Head>
            <title>betesda | {title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
            <meta name="description" content="ministerios betesda" />
            <meta name="keywords" content="iglesia betesda, familia de Dios"></meta>
            <link rel="shortcut icon" type="image/png" href='../logo.ico' />
        </Head>
    )
}

export default PageHeader