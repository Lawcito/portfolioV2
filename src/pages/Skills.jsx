import html from "../assets/html.png";
import css from "../assets/css.png";
import java from "../assets/javascript.png";
import react from "../assets/react.webp";
import tailwindcss from "../assets/tailwindcss.png";
import firebase from "../assets/fireStore.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../App.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

const skills = [
  {
    img: html,
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
    alt: "html logo"
  },
  {
    img: css,
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
    alt: "css logo"
  },
  {
    img: java,
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    alt: "javascript logo"
  },
  {
    img: react,
    href: "https://es.react.dev/",
    alt: "react logo"
  },
  {
    img: tailwindcss,
    href: "https://tailwindcss.com/",
    alt: "tailwindcss logo"
  },
  {
    img: firebase,
    href: "https://firebase.google.com/docs/firestore?hl=es-419",
    alt: "firestore logo"
  },
];

function Skills() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-28">
        <div className="lg:w-1/2 w-64 flex text-center">
          <p className="border-b pb-2">
            I consider myself someone creative. I like to learn, I feel that
            difficult things are a good challenge to solve. I have good
            communication, I am kind and I have no problem with both teaching
            and learning from others.
          </p>
        </div>
        <div className="lg:w-1/4 w-40 border border-transparent">
          <Swiper
            modules={[Autoplay, A11y]}
            slidesPerView={3}
            spaceBetween={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
          >
            {skills.map((skill, index) => {
              return (
                <SwiperSlide key={index}>
                  <a href={skill.href} target="_blank" className="">
                    <img
                      src={skill.img}
                      alt={skills.alt}
                      className="h-12 lg:transition-transform transform hover:scale-90 duration-200"
                    />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Skills;
