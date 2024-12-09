import { useState, useRef, useEffect } from "react";
import { PrevWorks, recentWorks } from "../data/portfolio";
import WorkImageCard from "./WorkImageCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(1);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);

  const [height1, setHeight1] = useState("0px");
  const [height2, setHeight2] = useState("0px");

  const calculateHeight = () => {
    if (contentRef1.current) {
      setHeight1(
        openAccordion === 1 ? `${contentRef1.current.scrollHeight}px` : "0px"
      );
    }
    if (contentRef2.current) {
      setHeight2(
        openAccordion === 2 ? `${contentRef2.current.scrollHeight}px` : "0px"
      );
    }
  };

  useEffect(() => {
    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, [openAccordion]);

  const toggleAccordion = (id) => {
    setOpenAccordion((prevOpen) => (prevOpen === id ? null : id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    variableWidth: true,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="ml-auto mr-auto sm:w-[92%] w-[95%] space-y-4 p-5">
      <div>
        <button
          className="w-full p-4 sm:text-3xl text-2xl text-left bg-customColor text-white rounded-lg"
          onClick={() => toggleAccordion(1)}
        >
          Recent Projects
        </button>
        <div
          ref={contentRef1}
          style={{
            maxHeight: height1,
            transition: "max-height 0.3s ease",
            overflow: "hidden",
          }}
        >
          <div className="bg-red-100 flex flex-col gap-10 w-full px-6 py-4">
            {recentWorks.map((prev, index) => (
              <div key={index} className="w-full flex flex-col gap-5">
                <div className="text-3xl font-sans font-semibold">
                  {prev.domain}
                </div>
                <Slider {...settings}>
                  {prev.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="px-2">
                      <WorkImageCard image={image} />
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="w-full sm:text-3xl text-2xl p-4 text-left bg-customColor text-white rounded-lg"
          onClick={() => toggleAccordion(2)}
        >
          Previous Works
        </button>
        <div
          ref={contentRef2}
          style={{
            maxHeight: height2,
            transition: "max-height 0.3s ease",
            overflow: "hidden",
          }}
        >
          <div className="bg-orange-600/20 flex flex-col gap-10 w-full px-6 py-4">
            {PrevWorks.map((prev, index) => (
              <div key={index} className="w-full flex flex-col gap-5">
                <div className="text-3xl font-sans font-semibold">
                  {prev.domain}
                </div>
                <Slider {...settings}>
                  {prev.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="px-2">
                      <WorkImageCard image={image} />
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAccordion;
