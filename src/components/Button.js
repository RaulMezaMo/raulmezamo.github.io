import React from "react"
import { motion } from "framer-motion"

const Button = (props) => {
  return (
    // <motion.div layout className="btn-container">
    <motion.a layout href={props.href} id={props.id} className={`btn ${props.type === "secondary" ? "btn-secondary" : ""} ${props.type === "primary" ? "btn-primary" : ""} ${props.classes}`}>
      <div className="edge-bottom"></div>
      <div className="edge-right"></div>
      <div className="arrow-top-right"></div>
      <div className="arrow-bottom-left"></div>
      <div className="content">
      {props.children}
      </div>
    </motion.a>
    // {/* </motion.div> */ }
  )
}

export default Button