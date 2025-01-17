import React from 'react'
import FramedTextbox from '../components/FramedTextbox'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

import SlideShow from '../components/SlideShow'
import EliraSlide from '../assets/FNF/Elira Collage_cf50.webp'
import FinanaSlide from '../assets/FNF/Finana Collage_cf50.webp'
import FNFLogo from '../assets/FNF/Lazunight Thumbnail.webp'
import PomuSlide from '../assets/FNF/Pomu Collage_cf50.webp'

import Image from '../components/Image'
import classesCredits from '../components/Credits.module.scss'
import classesSlideShow from '../components/SlideShow.module.scss'
import classesVideo from '../components/Video.module.scss'
import classesP from '../components/ProjectPages.module.scss'

import '../components/TalentLayout.scss'
import ExLinkA from '../../shared/components/ExLinkA'
import ExLink from '../../shared/components/ExLink'

interface Props {
  page: string
}

export default function Fnf (props: Props): JSX.Element {
  return (
    <>
      {/* Heading */}
      <div className={classesP['heading-container-logo']}>
        <Image src={FNFLogo} enableZoom />
      </div>

      {/* Slide Show */}
      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <SlideShow>
          <div className={classesSlideShow.slide}>
            <div className={classesVideo.container}>
              <iframe
                src='https://www.youtube.com/embed/ffP4dpdmK18'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <Image src={EliraSlide} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={PomuSlide} className={classesSlideShow.slide} enableZoom />
          </div>
          <div>
            <Image src={FinanaSlide} className={classesSlideShow.slide} enableZoom />
          </div>
        </SlideShow>

        {/* Description & Download */}
        <div className={classesP['description-container']}>
          <h3>A LazuLight Friday Night Funkin' Mod</h3>
          <p>
            Step into the shoes of Pomu, who, in celebration of LazuLight's
            upcoming first year anniversary, will be rehearsing for their
            grand concert with her friends Finana and Elira in the hopes of
            giving their fans the best performance possible!
          </p>

          <h3>Permissions &amp; Notice</h3>
          <p>
            We give permission to all Nijisanji Livers to monetize playing
            this game by any means, including livestream and video
            publication. We declare that the game does not contain any
            copyrighted material other than that which is property of ANYCOLOR
            Inc. We declare that this game does not contain any material that
            violates the YouTube Community Guidelines.
          </p>
          <p>
            This is a work of fiction. Any similarity to real businesses,
            locations, and events is purely coincidental. The characters
            portrayed in this story are not intended to represent the views
            and opinions of the actual talents, Nijisanji, or ANYCOLOR Inc.
          </p>
          <p>
            This is a fan-made game intended for the enjoyment of other fans
            and the talents in celebration of LazuLight's one year
            anniversary. The creators are in no way related to ANYCOLOR Inc,
            Nijisanji, or the talents portrayed in this game.
          </p>
          <p>If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</a>.</p>

          <h3>Minimum Requirements</h3>
          <p>6GB RAM required, otherwise this game should run on anything (tested on a 10 year old laptop).</p>

          <h3>Install / Uninstall</h3>
          <p>No installation is required. First download the zip, then unzip the game files into any folder.</p>
          <p>To play, run the file <code>LazuFunk.exe</code></p>
          <p>To remove the game, simply delete the unzipped game files.</p>
          <p>To remove save and settings data, delete the folder <code>C:\Users\&lt;username&gt;\AppData\Roaming\LazuFunk</code> <br />This folder is automatically created when you run the game.</p>

          <h3>Download for Windows (220MB)</h3>
          <a href='/downloads/LazuFunk-5013a39.zip' download>
            <button className={`${classesP['download-button']} lazulight-border`}>Download Game</button>
          </a>
          <ExLink href='https://gamebanana.com/mods/382213'>
            <button className={`${classesP['download-button']} lazulight-border`}>Mirror Download at GameBanana</button>
          </ExLink>
          <ExLink href='https://gamejolt.com/games/lazunight/723472'>
            <button className={`${classesP['download-button']} lazulight-border`}>Mirror Download at GameJolt</button>
          </ExLink>
        </div>
      </FramedTextbox>

      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>Credits</h2>
        <LazunightFunkinCredits />
      </FramedTextbox>
    </>
  )
}
function LazunightFunkinCredits (): JSX.Element {
  return (
    <div className={classesCredits.text}>
      <h3>Director, UI Artist</h3>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/c/CoZm0Plays'>CoZm0</ExLinkA></p></li>
      </ul>
      <h3>Lead Programmer</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/binpuki_'>Binpuki</ExLinkA></p></li>
      </ul>
      <h3>Animator, Programmer</h3>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/c/KVNK3VIN'>KVN</ExLinkA></p></li>
      </ul>
      <h3>Character Sprite Artist, Main Menu Asset Artist, Animator Supervisor</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/That1PlantGuy'>Plant Guy</ExLinkA></p></li>
      </ul>
      <h3>Main Menu BG Artist</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/flimsytipsy'>TIP</ExLinkA></p></li>
      </ul>
      <h3>Character Portrait Artist</h3>
      <ul>
        <li><p><ExLinkA href='https://cooperisswagyoushuldfollow.carrd.co/'>cooper</ExLinkA></p></li>
      </ul>
      <h3>Character Portrait Designer</h3>
      <ul>
        <li><p>Agora</p></li>
      </ul>
      <h3>Background Artist</h3>
      <ul>
        <li><p>Neyecole</p></li>
      </ul>
      <h3>Background Art Designer</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/nobu_okt'>Professor Nobu</ExLinkA></p></li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/channel/UCTmBhasnypdfoBUe3bpSb5g'>Maarbble</ExLinkA></p></li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li><p><ExLinkA href='https://www.youtube.com/c/eivesohn'>Eivesohn</ExLinkA></p></li>
      </ul>
      <h3>Charter</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/TheCoolStalker'>CoolStalker</ExLinkA></p></li>
      </ul>
      <h3>Special Thanks</h3>
      <h3>Improving Chromatics</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/GGalactigal'>GGalactigal</ExLinkA></p></li>
      </ul>
    </div>
  )
}
