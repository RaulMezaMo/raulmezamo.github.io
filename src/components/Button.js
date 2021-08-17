import React from "react"
import { motion } from "framer-motion"

const Button = (props) => {
  return (
    // <motion.div layout className="btn-container">
    <motion.a layout whileTap={{ scale: .9 }} href={props.href} className={`btn ${props.type === "secondary" ? "btn-secondary" : ""} ${props.type === "primary" ? "btn-primary" : ""} ${props.classes}`}>
      {/* <div className="content"> */}
      {props.children}
      {/* </div> */}
    </motion.a>
    // {/* </motion.div> */ }
  )
}

export default Button