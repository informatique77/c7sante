import React from "react"
import { Link } from "gatsby"

import { closeBurger  } from "../../utils/burgerAnimation"
import "./Buttons.scss"

const SimpleButton = ({ slug, content }) => {
  return (
    <Link className="simple-button" to={slug} onClick={closeBurger }>
      {content}
    </Link>
  )
}

export default SimpleButton