import * as React from 'react'

const Section = ({ sectionTitle }) => {
  return (
    <section>
      <header className="sectionIndicator">
        <h2 className="sectionHeader">{sectionTitle}</h2>
      </header>
    </section>
  )
}

export default Section