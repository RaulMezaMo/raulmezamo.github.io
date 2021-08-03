import * as React from 'react'

const Section = ({ sectionTitle, children, id }) => {
  return (
    <section id={id}>
      <header className="sectionIndicator">
        <h2 className="sectionHeader">{sectionTitle}</h2>
      </header>
      {children}
    </section>
  )
}

export default Section