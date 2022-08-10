import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GoSearch } from 'react-icons/go'
import { RiCloseLine } from 'react-icons/ri'


const liveUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&eventType=live&order=date&type=video&key=';
const initialUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=20&key=';
const url = 'https://youtube.googleapis.com/youtube/v3/search?&part=snippet&channelId=UC8br10Qoo5bZvTKiJhPkdOA&order=date&maxResults=20&q=';

export async function getServerSideProps() {
    const apikey = process.env.YOUTUBE_API_KEY
    const res = await fetch(`${url}&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await res.json()
    return {
        props: {
            data,
            apikey
        }
    }
}

function Sermones({ data, apikey }) {
    console.log(apikey);
    const [searchQuery, setSearchQuery] = useState('')
    const [resultTitle, setResultTitle] = useState('Sugerencias')
    const [activeVideo, setActiveVideo] = useState(0)
    const [videos, setVideos] = useState([])

    const searchResult = async (search) => {
        const video = await fetch(`${url}${search}&key=${apikey}`)
        const result = await video.json()
        console.log(result);
        setVideos(result)
    }

    useEffect(() => {
        setVideos(data)
    }, [])

    const handleClick = async () => {
        await searchResult(searchQuery)
        setSearchQuery('')
        setResultTitle('Resultado')
    }
    function handleSearch(e) {
        e.preventDefault()
        setSearchQuery(e.target.value)
    }
    return (
        <SermonesContainer>

            <div className='header-section flex'>
                <h1 className='header'>Sermones</h1>
                <div className="search flex">
                    <input value={searchQuery} onChange={handleSearch} type="text" placeholder='Buscar Sermon' />
                    {searchQuery === '' ? null : <RiCloseLine onClick={() => setSearchQuery('')} className='clear'></RiCloseLine>}
                    <GoSearch className='search-button' onClick={() => handleClick()} />
                </div>
            </div>
            <div className="main-content">

                <div className="latest-sermon">
                    {videos.items?.map((video, index) => {
                        const { id, snippet = {} } = video
                        const { title } = snippet
                        return (
                            index === activeVideo ? <iframe key={index} frameBorder='none' width='100%' height='100%' src={'https://www.youtube.com/embed/' + id.videoId}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                            </iframe> : ''
                        )
                    })}
                </div>
                <div className="search-results-container">
                    <h2 className='cards-title primary-color'>{resultTitle}</h2>
                    <div className="video-cards primary-color">
                        {videos.items?.map((video, index) => {
                            const { snippet = {} } = video
                            const { title, thumbnails = {} } = snippet
                            const { high: image } = thumbnails
                            return (
                                <div key={index} onClick={() => setActiveVideo(index)} className={activeVideo === index ? "video-card active-video" : 'video-card'}>
                                    <img src={image.url} alt="" />
                                    <h4>{title}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </SermonesContainer>
    )
}
const SermonesContainer = styled.div`
.live{
    color: red;
    transition: all 3s infinite;
    transform: translateX(3em);
}
.header-section {
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    width: 100%;
    .search {
        align-items: center;
        gap: 1em;
        .search-button{
             cursor: pointer;
             color: #528fec;
             font-size: 1.5rem;
        }
        .clear {
            margin-left: -1.8em;
            font-size: 1.7rem;
            z-index: 99;
        }
        input {
            padding: .7em 3em .7em 1em;
            border: 1px solid black;
            font-size: 1rem;
            border-radius: 1em;
            position: relative;
            &:focus {
                outline: none;
                border-bottom: 1px solid black;
                font-size: 1rem;
            }
        }
    }
}
.main-content {
    display: flex;
    .latest-sermon {
    position: relative;
    height: 40em;
    margin-bottom: 1em;
    width: 100%;
    margin-right: .6em;
    overflow: hidden;
    background-color: #242323;
    cursor: pointer;
    .play-icon {
        font-size: 3.5rem;
        background-color: #0000004c;
        border-radius: 50%;
        color: #ffffffd1;
        padding: .5em;
        transform: rotate(90deg);
        transition: all 200ms ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    img {
        width: 100%;
        height:100%;
        position: absolute;
        top: 0;
        object-fit: cover;
        z-index: -1;
    }
    .description {
        position: absolute;
        bottom: 4em;
        left: 4em;
         h3 {
            color: white;
            letter-spacing: 1px;
         }
    }
}
.cards-title {
    margin-bottom: .7em;
}
.video-cards {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: .7em;
    margin: 0 auto;
    height: 37em;
    .active-video {
        background-color: #00000029;
    }
    .video-card {
        display: flex;
        align-items: center;
        height: 5em;
        width: 100%;
        transition: all 150ms ease-in;
        &:hover {
               background-color: #00000029;
            }
        img {
            max-width: 10em;
            height: 5em;
        }
        h4 {
            padding-left:.7em;
            color: black;
            font-size: .9rem;
            margin: .4em 0;
            cursor: pointer;
        }
    }
}
}
.playlist {
    height: 40em;
    width: 70%;
    background-color: black;
    margin: 0 auto;
    iframe {
        width: 100%;
        height: 100%;
    }
}
@media (max-width: 900px) {
    .main-content{
        flex-direction: column;
        .latest-sermon {
            height: 30em;
        }
        .video-cards {
            height: 100%;
            overflow: visible;
        }
    }

}

`;

export default Sermones

