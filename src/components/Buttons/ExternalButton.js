import React from "react"

import { burgerAnimation } from "../../utils/burgerAnimation"
import "./Buttons.scss"

const ExternalButton = ({ css, slug, content, staticImage }) => {
  return (
    <a className={css} href={slug} onClick={burgerAnimation}>
      {staticImage}
      {content}
    </a>
  )
}

export default ExternalButton