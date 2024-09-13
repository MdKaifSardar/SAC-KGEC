import React, { forwardRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import image1 from "../assets/portfolio/01.jpg";
import image2 from "../assets/portfolio/02.jpg";
import image3 from "../assets/portfolio/03.jpg";
import image4 from "../assets/portfolio/04.jpg";
import image5 from "../assets/portfolio/05.jpg";
import image6 from "../assets/portfolio/06.jpg";
import image7 from "../assets/portfolio/07.jpg";
import image8 from "../assets/portfolio/08.jpg";

const portfolioItems = [
  {
    id: 1,
    category: "designing",
    imageSrc: image1,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 2,
    category: "mobile development",
    imageSrc: image2,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 3,
    category: "designing",
    imageSrc: image3,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 4,
    category: "mobile",
    imageSrc: image4,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 5,
    category: "designing development",
    imageSrc: image5,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 6,
    category: "mobile",
    imageSrc: image6,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 7,
    category: "designing development",
    imageSrc: image7,
    title: "Project Name",
    description: "Some description..",
  },
  {
    id: 8,
    category: "mobile",
    imageSrc: image8,
    title: "Project Name",
    description: "Some description..",
  },
];

const PortfolioSection = forwardRef((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (event, filter) => {
    event.preventDefault(); // Prevent page refresh
    setActiveFilter(filter);
  };

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "*" || item.category.includes(activeFilter)
  );

  return (
    <section ref={ref} id="portfolio">
      <div className="container">
        <div className="flex flex-col justify-center items-center pb-5 pt-10">
          <h2 className="heading-custom">Our Work</h2>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="text-center">
          <ul className="portfolio-filter">
            <li>
              <a
                className={activeFilter === "*" ? "active" : ""}
                href="#"
                onClick={(e) => handleFilterClick(e, "*")}
              >
                All Works
              </a>
            </li>
            <li>
              <a
                className={activeFilter === "designing" ? "active" : ""}
                href="#"
                onClick={(e) => handleFilterClick(e, "designing")}
              >
                Designing
              </a>
            </li>
            <li>
              <a
                className={activeFilter === "mobile" ? "active" : ""}
                href="#"
                onClick={(e) => handleFilterClick(e, "mobile")}
              >
                Mobile App
              </a>
            </li>
            <li>
              <a
                className={activeFilter === "development" ? "active" : ""}
                href="#"
                onClick={(e) => handleFilterClick(e, "development")}
              >
                Development
              </a>
            </li>
          </ul>
        </div>

        <div className="portfolio-items">
          <TransitionGroup component={null}>
            {filteredItems.map((item) => (
              <CSSTransition key={item.id} timeout={300} classNames="portfolio">
                <div
                  className={`portfolio-item ${item.category}`}
                  key={item.id}
                >
                  <div className="portfolio-item-inner">
                    <img
                      className="img-responsive"
                      src={item.imageSrc}
                      alt={item.title}
                    />
                    <div className="portfolio-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a
                        className="preview"
                        href={item.imageSrc}
                        rel="prettyPhoto"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
});

export default PortfolioSection;
