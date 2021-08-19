import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import Cara from '../components/SvgComponents/cara_svg.js'
import { motion, useMotionValue, useAnimation } from "framer-motion"
import Layout from "../components/Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import FrontEnd from "../images/svgs/front-end_sm.svg";
import UXUIDesign from "../images/svgs/ux-ui-design_sm.svg";
import GraphicDesign from "../images/svgs/graphic-design_sm.svg";
import IconDownload from "../components/SvgComponents/icon_download_svg";
import IconPolygon from "../components/SvgComponents/icon_polygon_svg";
import IconStar from "../components/SvgComponents/icon_star_svg";
import IconListArm from "../components/SvgComponents/icon_list-arm_svg.js";

const IndexPage = ({ data }) => {

  /**
   * NAVBAR
   */

  /**
   * Animation variables & functions
   */
  const navbarItemsVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -16 },
  }
  const y = useMotionValue(0);
  const animateNavbarItems = useAnimation();

  /**
  * Triggerable navbar
  **/
  const [opened, setOpened] = useState(false);

  const clickNavbarToggler = (e) => {
    if (deviceSize === "small") {
      animateNavbarItems.start(opened ? "closed" : "open");
      setOpened(!opened);
      y.get() !== 8 ? y.set(8) : y.set(0);
    }
  };

  /**
   * Detecting collapsable navbar on breakpoints
   */

  const smallBreakpoint = 576; //Breakpoint for collapsing navbar
  const [width, setWidth] = useState(window.innerWidth);
  const [deviceSize, setDeviceSize] = useState("small");

  function handleResize(deviceSize) {
    setWidth(window.innerWidth);
    if (width > smallBreakpoint) {
      if (deviceSize !== "big") {
        setDeviceSize("big");
        setOpened(true);
        animateNavbarItems.start("open");
      }
    } else {
      setDeviceSize("small");
      setOpened(false);
      animateNavbarItems.start("closed");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    handleResize();
    // console.log("use effect");
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]);

  useEffect(() => {
    console.log(activeMenu);
  }, { activeMenu });

  /**
   * PROJECTS
   */

  const [activeMenu, setActiveMenu] = useState("projects");

  // INTERSECTION OBSERVER
  const [aboutMeRef, aboutMeInView] = useInView({ threshold: .5 });
  const [projectsRef, projectsInView] = useInView({ threshold: .5 });
  const [contactRef, contactInView] = useInView({ threshold: .5 });

  // Choose which navbar item is in view
  useEffect(() => {
    if (projectsInView) {
      setActiveMenu("projects");
    } else if (aboutMeInView) {
      setActiveMenu("about-me");
    } else if (contactInView) {
      setActiveMenu("contact");
    }
  }, [projectsInView, aboutMeInView, contactInView]);

  return (
    <div className="index">
      <Layout>
        {/* Inline Nav */}
        {/* The nav here allows the state of the scrolling to tell it in which section it is */}
        <motion.nav className={`navbar ${deviceSize === "small" ? "small-navbar" : "big-navbar"}`} >
          <div className="navbar-logo">
            <Link className="logo-link" to="/">
              <Cara className="logo" />
            </Link>
          </div>
          {/* Toggler */}
          <motion.button className="toggler" type="button" onClick={clickNavbarToggler}>
            <motion.div
              className={`icon burger-menu`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                animate={{ rotate: opened ? -45 : 0, y: opened ? 12 : 0 }}
              ></motion.span>
              <motion.span
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ opacity: opened ? 0 : 1, scaleX: opened ? 0 : 1 }}
                transition={{ duration: .1 }}
              ></motion.span>
              <motion.span
                animate={{ rotate: opened ? 45 : 0, y: opened ? -12 : 0 }}
              ></motion.span>
            </motion.div>
          </motion.button>
          {/* Navbar elements and menu */}
          <motion.ul
            className={`navbar-items ${opened ? "open-items" : "closed-items"}`}
            animate={animateNavbarItems}
            variants={navbarItemsVariants}
          >
            <svg id="menu_triangle" xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8">
              <g id="menu_triangle_group" data-name="menu_triangle_group">
                <polyline points="0 8 8 0 16 8" fill="#fff" stroke="#000" stroke-miterlimit="10" />
              </g>
            </svg>
            <li className="nav-item">
              <Link to="/" id="projects-link" className={`nav-link ${activeMenu === "projects" ? "active" : ""}`} onClick={clickNavbarToggler}>Proyectos</Link>
              <span className="divider">/</span>
            </li>
            <li className="nav-item">
              <Link to="/#acerca-de" id="about-me-link" className={`nav-link ${activeMenu === "about-me" ? "active" : ""}`} partiallyActive={true} onClick={clickNavbarToggler}>Acerca de</Link>
              <span className="divider">/</span>
            </li>
            <li className="nav-item">
              <Link to="/#contacto" id="contact-link" className={`nav-link ${activeMenu === "contact" ? "active" : ""}`} partiallyActive={true} onClick={clickNavbarToggler}>Contacto</Link>
            </li>
          </motion.ul>
        </motion.nav>
        {/* /Inline nav */}
        <div className="content container-md">
          {/* Section: Projects */}
          {/* <div className="projectsGallery"> */}
          <Section containerRef={projectsRef} className="projectsGallery">
            <div className="headerBlob">
              <div id="indexBlob" className="blob">
                <svg id="blob_svg" xmlns="http://www.w3.org/2000/svg" width="446" height="222" viewBox="0 0 446 222"><defs><clipPath id="clip-path"><path id="mask-pupila-b" d="M240.93,109.55s32.1,36.19,72,36.19c40.19,0,72-36.19,72-36.19s-31.85-36.18-72-36.18C273.07,73.37,240.93,109.55,240.93,109.55Z" fill="none" /></clipPath><clipPath id="clip-path-2"><path id="mask-pupila-a" d="M39,109.55s32.1,36.19,72,36.19c40.19,0,72-36.19,72-36.19s-31.85-36.18-72-36.18C71.18,73.37,39,109.55,39,109.55Z" fill="none" /></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Blobs"><g id="index-blob"><path id="borde-blob" d="M401.43,13.63c-46.75-34.35-92,12-201.2,14.07-93.46,1.74-127.76-31-164.16-.94C6.69,51-1.32,97.35,1.54,129.92,3,146.77,5.83,182.44,30.26,202.2c57,46.11,145.73-54.58,243.73-7.51,23.7,11.38,39.81,27.22,70,26.27,32.67-1,66.42-21,85.4-52.42C455.49,125.2,441.6,80,438.93,71.32,436.39,63,427,32.38,401.43,13.63Z" fill="none" stroke="#f572ef" stroke-miterlimit="10" stroke-width="2" /><g id="ojo-b"><g id="pupila-b"><g clip-path="url(#clip-path)"><g id="pupila-b-2" data-name="pupila-b"><path id="fondo-pupila-b" d="M250.42,118.12c0-20.65,15.56-37.39,34.75-37.39s34.75,16.74,34.75,37.39-15.56,37.39-34.75,37.39-34.75-16.74-34.75-37.39" fill="#f572ef" /><path id="brillo-2-b" d="M307.4,88s-.63,19.65-19.79,19.65c0,0,19.94.77,19.94,19.8,0,0-.39-19.84,20-19.84,0,0-20.13.19-20.13-19.61" fill="#fff" /><path id="brillo-1-b" d="M260.71,107.39S260.09,127,240.93,127c0,0,19.94.77,19.94,19.79,0,0-.39-19.83,20-19.83,0,0-20.14.19-20.14-19.61" fill="#fff" /></g></g></g><path id="borde-pupila-b" d="M240.93,109.55c2.8-3.74,34.76-36.17,70.79-36.17,42.16,0,70.63,32.74,73.2,36.17-2.63,3.54-34.34,36.19-72,36.19S243.56,113.09,240.93,109.55Z" fill="none" stroke="#f572ef" stroke-miterlimit="10" stroke-width="2" /></g><g id="ojo-a"><g id="pupila-a"><g clip-path="url(#clip-path-2)"><g id="pupila-a-2" data-name="pupila-a"><path id="fondo-pupila-a" d="M48.53,118.12c0-20.65,15.56-37.39,34.75-37.39S118,97.47,118,118.12s-15.56,37.39-34.75,37.39-34.75-16.74-34.75-37.39" fill="#f572ef" /><path id="brillo-2-a" d="M105.51,88s-.63,19.65-19.79,19.65c0,0,19.94.77,19.94,19.8,0,0-.39-19.84,20-19.84,0,0-20.13.19-20.13-19.61" fill="#fff" /><path id="brillo-1-a" d="M58.83,107.39S58.2,127,39,127c0,0,19.94.77,19.94,19.79,0,0-.39-19.83,20-19.83,0,0-20.13.19-20.13-19.61" fill="#fff" /></g></g></g><path id="borde-pupila-a" d="M39,109.55c2.8-3.74,34.76-36.17,70.79-36.17,42.17,0,70.64,32.74,73.2,36.17-2.63,3.54-34.34,36.19-72,36.19S41.67,113.09,39,109.55Z" fill="none" stroke="#f572ef" stroke-miterlimit="10" stroke-width="2" /></g></g></g></g></svg>
                {/* <Blob id="blob_svg" /> */}
              </div>
              <h1>¡Hola! Soy Raul Meza Montoya, diseñador gráfico y web.</h1>
            </div>
            {data.allFile.nodes.map((node) => {
              return (
                <Link key={"project-" + node.name} to={"projects/" + node.name.replace(/^\d_/g, "")}>
                  <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.name}
                    key={node.id}
                  />
                </Link>
              );
            })}
          </Section>

          {/* Section: About me */}
          <Section containerRef={aboutMeRef} className="index-section" sectionTitle={`Acerca de`} id="acerca-de">
            {/* <h2 className="sectionHeader">Acerca de</h2> */}
            <div className="section-content">
              <div className="introduction">
                <p>
                  ¡Mucho gusto! Me llamo Raúl Meza Montoya soy diseñador gráfico de
                  Puebla, México.
                </p>
                <p>
                  Mi meta es combinar la funcionalidad con lo estético en el diseño
                  con elementos narrativos que elevan cualquier concepto.
                </p>
                <div className="btn-container">
                  <Button type="secondary" classes="text-with-icon">
                    <p>Descargar CV</p>
                    <IconDownload />
                  </Button>
                </div>
              </div>
              <h3 className="subtitleHeading">Educación y Experiencia</h3>
              <ul className="icon-list list">
                <li>
                  <IconPolygon className="bullet-icon" />
                  <p><strong>Licenciatura en Diseño Gráfico.</strong> 2015-2020.<br />
                    Benemérita Universidad Autónoma de Puebla.</p>
                </li>
                <li>
                  <IconPolygon className="bullet-icon" />
                  <p><strong>Intercambio Académico.</strong> 2018.<br />
                    Universidad Nacional de Colombia. Bogotá, Colombia.</p>
                </li>
                <li>
                  <IconPolygon className="bullet-icon" />
                  <p><strong>Becario de diseño gráfico y web.</strong> 2019-2020.<br />
                    Dirección de Cómputo en la Benemérita Universidad Autónoma de
                    Puebla.
                  </p>
                </li>
              </ul>
              <h3 className="subtitleHeading">Especialidades</h3>
              <ul id="specialty-list" className="list inline-list">
                <li>
                  <UXUIDesign className="svg inline-svg svg-icon" />
                  <p>Diseño UX/UI</p>
                </li>
                <li>
                  <FrontEnd className="svg inline-svg svg-icon" />
                  <p>Desarrollo Front End</p>
                </li>
                <li>
                  <GraphicDesign className="svg inline-svg svg-icon" />
                  <p>Diseño Gráfico</p>
                </li>
              </ul>
              <h3 className="subtitleHeading">Metas</h3>
              <ul id="goals-list" className="icon-list list">
                <li>
                  <IconStar className="bullet-icon" />
                  <p>Me interesa seguir refinando y aplicar mis habilidades en diseño UX/UI.</p>
                </li>
                <li>
                  <IconStar className="bullet-icon" />
                  <p>Mis proyectos ideales son digitales en ejecución, con amplia comunicación con el cliente para dar en la clave del problema.</p>
                </li>
              </ul>
              <h3 className="subtitleHeading">Hobbies y Habilidades</h3>
              <ul id="hobby-list" className="list icon-list">
                <li>
                  <IconListArm className="bullet-icon" />
                  <p>Videojuegos</p>
                </li>
                <li>
                  <IconListArm className="bullet-icon" />
                  <p>Música</p>
                </li>
                <li>
                  <IconListArm className="bullet-icon" />
                  <p>Costura y Confección</p>
                </li>
                <li>
                  <IconListArm className="bullet-icon" />
                  <p>Inglés (Nivel C1)</p>
                </li>
                <li>
                  <IconListArm className="bullet-icon" />
                  <p>Japonés (Básico)こんにちわ！</p>
                </li>
              </ul>
            </div>
          </Section>
          {/* Section: Contacto */}
          <Section containerRef={contactRef} className="index-section" sectionTitle="Contacto" id="contacto">
            <div className="section-content">
              <p className="greeting-contact">¡Estaré contento de hablar contigo!</p>
              <a className="contact-link" href="mailto:raulmezamontoya@gmail.com">
                Email: raulmezamontoya@gmail.com
              </a>
              <a className="contact-link" href="tel:2212064081">Tel: 2212064081</a>
            </div>
          </Section>
        </div>
      </Layout>

    </div>

  );
};

export const query = graphql`
  query {
    allFile(
      filter: { relativeDirectory: { eq: "thumbnails" } }
      sort: { fields: name }
    ) {
      nodes {
        name
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
