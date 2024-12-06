import html from "../assets/html.png";
import css from "../assets/css.png";
import java from "../assets/javascript.png";
import react from "../assets/react.webp";
import tailwindcss from "../assets/tailwindcss.png";
import firestore from "../assets/fireStore.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../App.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

const skills = [
  {
    img: html,
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    img: css,
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    img: java,
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    img: react,
    href: "https://es.react.dev/",
  },
  {
    img: tailwindcss,
    href: "https://tailwindcss.com/",
  },
  {
    img: firestore,
    href: "https://firebase.google.com/docs/firestore?hl=es-419",
  },
];

function Skills() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-28">
        <div className="w-1/2 items-center justify-center flex text-center ">
          <p>
            I consider myself someone creative. I communicate well, I like both
            learning and teaching. I don't like leaving something unfinished.
          </p>
        </div>
        <div className="w-1/3 flex">
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
                      alt=""
                      className="h-12 transition-transform transform hover:scale-90 duration-200"
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
