import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import CallButton from "../Buttons/CallButton"
import ExternalButton from "../Buttons/ExternalButton"
import ShowMoreButton from "../Buttons/ShowMoreButton"
import { openOrClose } from "../../utils/timer"
import { closeInfoWindow } from "../../utils/infoWindowScript"

import "./MapList.scss"

const LiContent = ({ center, map, array }) => {
  const image = getImage(center.node.image.src)
  return (
    <li
      className="li-center"
      onClick={() => closeInfoWindow(center, array, map)}
      onKeyPress={() => closeInfoWindow(center, array, map)}
      style={{
        backgroundColor: center.node.bgColor,
        animationDelay: center.node.index + 0.1 + "s",
      }}
      key={center.node.index}
    >
      <div className="li-img-container">
        <GatsbyImage image={image} alt={center.node.name} />
      </div>
      <div className="li-text-container">
        <h2>{center.node.name}</h2>
        <p className="li-address">{center.node.address}</p>
        <br></br>
        {center.node.open ? openOrClose(center.index) : null}
        {center.node.open ? (
          <ShowMoreButton slug={center.node.slug} content={"En savoir plus"}/>
        ) : null}

        <div className="li-buttons-container">
          {center.node.direction ? (
            <ExternalButton
              css="travel-button white"
              slug={center.node.direction}
              content="Vous y rendre"
              staticImage={
                <StaticImage
                  src="../../images/icons/walking.png"
                  width={18}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Marche"
                  placeholder="blurred"
                />
              }
            />
          ) : null}
          <br></br>
          {center.node.open && center.node.index !== 0 ? (
            <CallButton
              css="call-button white"
              slug={`tel:${center.node.tel}`}
              content={center.node.tel}
              staticImage={
                <StaticImage
                  src="../../images/icons/icon-telephone-blue.png"
                  width={18}
                  quality={100}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Téléphone"
                  placeholder="blurred"
                />
              }
            />
          ) : null}
        </div>
      </div>
    </li>
  )
}

export default LiContent