import * as React from 'react'

// const Section = ({ sectionTitle, children, id, className }) => {
const Section = (props) => {
  return (
    <section ref={props.containerRef} id={props.id} className={props.className}>
      <header className="sectionIndicator">
        <h2 className="sectionHeader">{props.sectionTitle}</h2>
      </header>
      {props.children}
    </section>
  )
}

export default Section