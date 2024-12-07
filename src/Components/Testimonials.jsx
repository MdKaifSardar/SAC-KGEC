import { motion } from "framer-motion";
import image1 from "../assets/pic1.jpg";
import image2 from "../assets/pic2.jpg";
import test1 from "../assets/testimonials/Test_1.png";
import { forwardRef, useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

const testimonials = [
  {
    id: 1,
    quote:
      "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image1,
    name: "James Bond",
  },
  {
    id: 2,
    quote:
      "In the early months of 2020, a group of enterprising students conceived a transformative vision: to create a nexus between core engineering disciplines and contemporary technological innovations. Their ambition was not merely to refine technical prowess but to empower students to conceptualize and execute real-world projects of core engineering intertwined with the changing & upcoming technology that could tangibly impact their communities and industries. This vision culminated in the establishment of SAC-KGEC, and I had the distinct privilege of materializing this concept during my first year as the founding member, alongside a team of equally committed collaborators.\n\nSince its inception, SAC-KGEC has relentlessly advanced, transcending initial expectations and expanding across multifarious domains. It has been instrumental in enhancing the cognitive faculties of countless students at KGEC, refining their expertise in diverse areas such as manufacturing, design, and innovation. Yet, SAC-KGEC's influence extends far beyond the confines of technical acumen; it has played a pivotal role in the holistic development of its members, equipping them with the requisite skills to excel in the competitive and ever-evolving professional landscape. Through initiatives that fostered competencies such as public speaking, mass management, project scheduling, team building, and leadership, SAC-KGEC has ensured its members are not only proficient engineers but also versatile and industry-ready professionals.\n\nI had the honor of serving as the Coordinator and Domain Lead of SAC-KGEC in 2020-21 and 2022, as well as the Convenor during the 2022-23 session. Throughout my tenure, I was resolutely committed to fostering an inclusive environment, ensuring that all members were afforded equal opportunities to contribute and excel. I spearheaded a multitude of initiatives, including seminars, workshops, academic sessions, and industrial excursions, all designed to enrich the learning experience and cultivate a sense of camaraderie within the organization. I assumed responsibility for overseeing the entirety of our projects—from financial management and project timelines to procurement, approvals, infrastructure development, and resource optimization. These responsibilities allowed me to hone both my strategic and operational acumen, and the experiences I garnered have had an indelible impact on my academic and professional trajectory. Every moment spent within SAC-KGEC was not only enlightening but truly transformative.\n\nI am profoundly indebted to our esteemed faculty mentors, particularly SD Sir and Debasis Sir, whose sagacious guidance and unwavering support were instrumental in navigating the challenges we encountered. Equally, I owe much of our collective success to the relentless enthusiasm and commitment of my fellow SAC members. Together, we overcame numerous obstacles, culminating in milestones such as the creation of our inaugural in-house project, the \"Bingo\" cart. The synergy within the team was a constant wellspring of motivation, and I was fortunate to lead such a dynamic and driven group of individuals whose collective efforts elevated us to unprecedented heights.\n\nWhen SAC-KGEC was first conceived, none of us could have envisaged the extraordinary journey it would embark upon. Yet, as Steve Jobs so sagaciously articulated, \"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.\" Looking back, I am astounded by how far SAC-KGEC has progressed. What stands out most profoundly to me is the privilege of working alongside a team that was unwavering in its belief in the limitless potential of SAC-KGEC. With each successive year, we have consistently redefined our aspirations, surpassed our previous achievements, and set new paradigms for what SAC-KGEC is capable of achieving.",
    imgSrc: image2,
    name: "Sarbodaman Banerjee",
  },
  {
    id: 3,
    quote:
      "As a former member, project team lead & convenor of the SAC-KGEC, I had the privilege of being part of an incredible community of automobile geeks from 2021 to 2023. \n" +
      "Joining the SAC was one of the best decisions I made during my college years." +
      "SAC provided a fertile ground for honing my technical skills in automotive engineering, CAD modelling, and rapid prototyping. Beyond the technical realm, I developed essential soft skills such as leadership, teamwork, and effective communication. These experiences have been instrumental in shaping my professional journey. \n" +
      "Being part of the SAC significantly impacted my career trajectory. The hands-on experience and the collaborative environment prepared me for real-world engineering challenges. " +
      "Reflecting on my time with SAC, I can confidently say it was a cornerstone of my college experience. The club not only nurtured my passion for automotive engineering but also equipped me with invaluable skills and memories. I wholeheartedly recommend SAC to any student eager to explore the fascinating world of automotive engineering. It is a journey worth embarking on.",
    imgSrc: test1,
    name: "Somdip Dhara"
  },
];

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      setIsOverflowing(quoteRef.current.scrollHeight > 150); // Adjust threshold as needed
    }
  }, [testimonial.quote]);

  return (
    <div
      key={testimonial.id}
      className={`bg-white text-black rounded-xl transition-all duration-300 ${
        isExpanded ? "h-auto" : "h-[450px]"
      }`}
    >
      <div className="h-56 rounded-t-xl bg-red-500 flex flex-col justify-center items-center">
        <img
          src={testimonial.imgSrc}
          alt={testimonial.name}
          className="h-44 w-44 rounded-full"
        />
        <p className="font-bold">{testimonial.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div
          ref={quoteRef}
          className={`text-center text-2xl font-medium relative transition-all duration-300 ${
            !isExpanded ? "max-h-[150px] overflow-hidden" : "max-h-full"
          }`}
        >
          {testimonial.quote}
        </div>
        {isOverflowing && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Read More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};



TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Testimonials = forwardRef((props, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 0, x: -100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "50%" }}
        className="heading-custom text-center"
      >
        Testimonials
      </motion.h2>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
