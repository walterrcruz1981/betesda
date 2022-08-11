import React, { useState } from 'react'
import styled from 'styled-components'
import { gigantes, gigantesText1, gigantesText2, gigantesText3 } from '../../../public/assets/page-content/peaceContent';
import Image from 'next/image';
import poster from '../../../public/assets/images/poster.jpg'
import { BsPlayCircle } from 'react-icons/bs'

function CincoGigantes({ video }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  function playTheVideo() {
    const player = document.getElementById('player');
    setIsPlaying(!isPlaying)
    player.play()
  }
  return (
    <Container className='flex'>
      <h1 className='header flex-center'>5 Gigantes</h1>
      <div className="content-container flex">

        <div className="video-container flex-center">

          {!isPlaying ? <> <a className='play-icon'><BsPlayCircle onClick={playTheVideo}></BsPlayCircle></a>
            <Image layout='fill' src={poster} alt='cinco gigantes image' /></>
            : null}
          <video id='player' src={video} controls ></video>
        </div>

        <div className='links-container flex-center'>
          <div className="description">
            {gigantes?.map((item, id) => {
              return (
                activeTab === id ? <div key={id}>
                  <div className="image">
                    <Image objectFit='cover' layout='fill' src={item.imageUrl} alt='gigantes' />
                  </div>
                  <p >{item.description}</p></div> : null
              )
            })}
          </div>

          <div className="links">
            {gigantes?.map((item, id) => {
              return (
                <h4 onClick={() => setActiveTab(id)} key={id} className={activeTab === id ? 'active-title' : 'title'}>{item.title}</h4>
              )
            })}
          </div>
        </div>
        <div className="bottom-container flex-center">
          <div className="text-content">
            <p>{gigantesText2.text}</p>
            <p>{gigantesText3.text}</p>
          </div>
        </div>
      </div>
    </Container >

  )
}
const Container = styled.div`
 padding: 1em;
 flex-direction: column;
 .content-container {
  width: 100%;
  flex-direction: column;
  .video-container {
    width: 61%;
    height: 40em;
    gap: 1.4em;
    height: 30em;
    margin: 0 auto;
    position: relative;
    flex-direction: column;
    z-index: 10;
    .play-icon{
      font-size: 3rem;
      color: #3e8585;
      z-index: 88;
      position: absolute;
      &:hover {
        color: red;
      }
    }
    video {
      outline: 1px solid black;
      height: 100%;
      z-index: -1;
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}

 .links-container {
  margin-top: 4em;
  background-color: #1c8f85;
  text-align: center;
  .links{
    flex-direction: column;
    width: 60%;
    padding: 1em 1em;

    .title {
      cursor: pointer;
      font-size: .9rem;
      &:hover {
      color: #2b5f8a;
      text-decoration: underline;
      }
    }
    .active-title {
      color: #cfcfcf;
      text-decoration: underline;
    }
  }
  .description {
  width: 100%;
  overflow: hidden;
  position: relative;
    .image {
      background-color: #1c8f85;
      height: 35em;
      width: 100%;
      transform: scale(.9);
      position: relative;
    }

    p {
      width: 100%;
      position: absolute;
      bottom: 0;
      line-height: 1.5em;
      letter-spacing: 1px;
      background-color: white;
      padding: 2em 1em;
      box-shadow: inset 2px 2px 2px black;
    }
   }
  }
  .bottom-container {
  padding: 2em;
  line-height: 1.7em;
  column-gap: 1em;
  flex-direction: column;
  row-gap: 1.4em;
  text-align: center;
  width:100%;
  margin: 4em 0;
  background-image: url('https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80');
  background-attachment: fixed;
  background-size: cover;
  height: 60vh;
  .text-content {
    width: 70%;
    background: linear-gradient(to bottom, white, #c5c5c5a6);
    padding: 3em 4em;
    font-weight: 600;
  }
 }
  @media (max-width: 880px) {
    .video-container {
      width: 100%;
      height: 12em;
      video {
        width: 100%;
        height: 20em;
      }
      p {
        width: 90%;
      }
    }
  .links-container{
    .links {
      padding: 0;
      margin: 0;
    }
    .image {
      transform: scale(1);
    }
    flex-direction: column;
    .description {
      flex-direction: column;
      overflow: hidden;
      height: auto;

      p {
        margin-left: 0;
      }
    }
   }
   .bottom-container {
    background-color: red;
    width: 100%;
    height:40em;
    .text-content {
      width: 100%;
      padding: 0;
    }
   }
  }
 }
`;
export default CincoGigantes