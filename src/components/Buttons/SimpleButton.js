import React from "react"
import { Link } from "gatsby"

import { burgerAnimation } from "../../utils/burgerAnimation"
import "./Buttons.scss"

const SimpleButton = ({ slug, content }) => {
  return (
    <Link className="simple-button" to={slug} onClick={burgerAnimation}>
      {content}
    </Link>
  )
}

export default SimpleButton