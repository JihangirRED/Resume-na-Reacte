import React from "react";
import img from "../fotki/photo_2024-01-12_16-04-17.jpg";

const Main = () => {
  return (
    <div>
      <div class="hero">
        <div class="container hero__container">
          <div class="hero__about">
            <h1 class="hero__title">Frontend-разработчик</h1>
            <h2 class="hero__subtitle">Адилет Баимбеков</h2>
            <p class="hero__description">
              Привет, я учусь в школе IT Makers и в будущем стану Frontend
              разработчиком. Любимая цытата: «Мечты так и остаются мечтами, если
              к ним не идти». Любимый фильм: "Большой Куш". Любимое блюдо: "Пять
              пальцев".
            </p>
          </div>
          <div class="hero__box">
            <img class="hero__box-img" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
