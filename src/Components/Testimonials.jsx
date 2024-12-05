import { motion } from "framer-motion";
import image1 from "../assets/pic1.jpg";
import image2 from "../assets/pic2.jpg";
import { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image1,
    name: "James Bond",
    company: "License to Drink Inc",
  },
  {
    id: 2,
    quote:
      "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image2,
    name: "James Bond",
    company: "License to Drink Inc",
  },
  {
    id: 3,
    quote:
      "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image1,
    name: "James Bond",
    company: "License to Drink Inc",
  },
];

// const Testimonial = forwardRef((props, ref) => {
//   return (
//     <section ref={ref} className="testimonial-area" id="testimonial">
//       <div className="container">
//         <div className="flex flex-col justify-center items-center pt-10">
//           <h2 className="heading-custom">Testimonials</h2>
//           <p className="main-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
//             eget risus vitae massa semper aliquam quis mattis quam.
//           </p>
//         </div>
//         <div className="row">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="col-md-4">
//               <div
//                 className="single-testimonial animate_fade_in"
//                 style={{ opacity: 1, right: "0px" }}
//               >
//                 <div className="row">
//                   <div className="col-xs-12">
//                     <blockquote>{testimonial.quote}</blockquote>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-xs-3">
//                     <img src={testimonial.imgSrc} alt={testimonial.name} />
//                   </div>
//                   <div className="col-xs-9 half-gutter">
//                     <h5>{testimonial.name}</h5>
//                     <h6>{testimonial.company}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// });

// export default Testimonial;

const Testimonials = forwardRef((props, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
            {testimonials.map((d) => (
              <div
                key={d.id}
                className="bg-white h-[300px] text-black rounded-xl"
              >
                <div className="h-56 rounded-t-xl bg-red-500 flex justify-center items-center">
                  <img
                    src={d.imgSrc}
                    alt=""
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-center text-2xl font-medium">{d.quote}</p>
                  <p className="font-bold">{d.name}</p>
                  <p className="text-xl">{d.company}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
