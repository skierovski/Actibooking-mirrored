import React, { useEffect } from "react";
import "./ScrollMotion.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../DefaultModels/Titles/SectionTitle";
const ScrollMotion = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="mainContainer">
      <SectionTitle value="What distinguishes us?" />
      <div className="motion-container">
        <div className="motion-box">
          <div className="img-motion" data-aos="fade-right">
            <img
              className="img-motion-style"
              src={`./Img/hourglass.png`}
              alt="Hourglass"
            ></img>
          </div>
          <div className="text-motion" data-aos="fade-left">
            <SectionTitle value="One place" />
            <p className="text-motion-style">
              <b>Actibooking</b> to platforma umożliwiająca szybkie i łatwe
              wyszukiwanie różnego rodzaju kursów. Dzięki temu możesz z
              łatwością znaleźć oferty szkoleniowe z różnych dziedzin.
              Wyszukiwarka na stronie pozwala filtrować wyniki według kryteriów
              takich jak lokalizacja, cena czy poziom zaawansowania. Dzięki temu
              możesz znaleźć kurs idealnie dopasowany do Twoich potrzeb i
              możliwości. Ponadto, strona zawiera również informacje o
              prowadzących kursy oraz ich doświadczeniu, co pozwala Ci wybrać
              najlepszą ofertę. <b>Actibooking</b> to doskonałe rozwiązanie dla
              osób szukających kursów w różnych dziedzinach, ponieważ umożliwia
              łatwe i szybkie znalezienie odpowiednich opcji.
            </p>
          </div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div className="text-motion" data-aos="fade-right">
            <SectionTitle value="Comparable" />
            <p className="text-motion-style">
              <b>Actibooking</b> to strona internetowa, która umożliwia łatwe
              porównywanie różnych proponowanych kursów. Co ważne, wszystkie
              oferty są opisane w sposób jednolity, dzięki czemu łatwiej jest
              porównać je ze sobą i wybrać najlepszą opcję. W porównaniu do
              innych platform, na których kursy bywają opisane w różny sposób i
              trudno je ze sobą porównać. <b>Actibooking</b> oferuje bardziej
              przejrzysty i ujednolicony sposób prezentacji ofert. Dzięki temu
              możesz szybko i łatwo znaleźć kurs, który spełni Twoje oczekiwania
              i będzie dostosowany do Twoich potrzeb. <b>Actibooking</b> to więc
              doskonałe rozwiązanie dla osób, które chcą szybko i łatwo porównać
              różne kursy i wybrać najlepszą opcję.
            </p>
          </div>
          <div className="img-motion" data-aos="fade-left">
            <img
              className="img-motion-style"
              src={`./Img/scale.png`}
              alt="Scale"
            ></img>
          </div>
        </div>
      </div>
      <div className="motion-container">
        <div className="motion-box">
          <div className="img-motion" data-aos="fade-right">
            <img
              className="img-motion-style"
              src={`./Img/iceberg.png`}
              alt="Iceberg"
            ></img>
          </div>
          <div className="text-motion" data-aos="fade-left">
            <SectionTitle value="Transparent" />
            <p className="text-motion-style">
              <b>Actibooking</b> to strona internetowa, która zapewnia
              przejrzystość wszystkich oferowanych kursów. Nie ma na niej
              żadnych ukrytych kosztów ani pułapek, dzięki czemu możesz być
              pewien, że otrzymasz dokładnie to, za co zapłaciłeś. Wszystkie
              koszty są od razu podane na stronie, więc nie musisz się martwić o
              nieoczekiwane dodatkowe opłaty. Ponadto, na <b>Actibooking</b>{" "}
              znajdziesz również dokładne informacje dotyczące zasad kursów,
              dzięki czemu wiesz, czego możesz się spodziewać podczas ich
              trwania. Ogólnie rzecz biorąc, <b>Actibooking</b> to strona, na
              której możesz znaleźć wiele różnych kursów bez obaw o ukryte
              koszty czy niejasne zasady. Jest to więc doskonałe rozwiązanie dla
              osób, które chcą mieć pewność, że otrzymają dokładnie to, za co
              zapłacą.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollMotion;
