import React from "react";
import "./intro.scss";

function Intro() {

  document.addEventListener('mouseover', e => {
    if(e.target.closest('.intro__menu-item')){
      let index;
      document.querySelectorAll('.intro__menu-item').forEach((el, i) => {
        if(e.target.closest('.intro__menu-item') == el){
          index = i
        }
      })
      document.querySelectorAll('.intro__wrapper-background').forEach(el => el.style.opacity = 0);
      document.querySelectorAll('.intro__wrapper-background')[index].style.opacity = 1;
    } else{
      document.querySelectorAll('.intro__wrapper-background').forEach(el => el.style.opacity = 0);
    }
  })

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <img className="intro__wrapper-background" src={require('../img/intro/intro_background_1.png')} />
        <img className="intro__wrapper-background" src={require('../img/intro/intro_background_2.png')} />
        <img className="intro__wrapper-background" src={require('../img/intro/intro_background_3.png')} />
        <img className="intro__wrapper-background" src={require('../img/intro/intro_background_4.png')} />
        <div className="intro__title">
          Ремонт <span>и</span> дизайн <br />
          <span>в Москве и Московской области</span>
        </div>
        <button className="intro__button">Оставить заявку</button>
        <div className="intro__menu">
          <div className="intro__menu-list">
            <div className="intro__menu-item">
              <span>Услуги по ремонту</span>
              <div className="intro__item_color red">
                <div className="intro__item_color-text">
                  С другой стороны реализация намеченных плановых заданий
                  требуют от нас анализа.
                </div>
                <div className="intro__item_color-arrow_bottom">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1001_82)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="intro__menu-item">
              <span>Виды работ</span>
              <div className="intro__item_color green">
                <div className="intro__item_color-text">
                С другой стороны реализация намеченных плановых заданий требуют от нас анализа.
                </div>
                <div className="intro__item_color-arrow_bottom">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1001_82)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="intro__menu-item">
              <span>Дизайн интерьера</span>
              <div className="intro__item_color blue">
                <div className="intro__item_color-text">
                С другой стороны реализация намеченных плановых заданий требуют от нас анализа.
                </div>
                <div className="intro__item_color-arrow_bottom">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1001_82)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="intro__menu-item">
              <span>Ремонт помещений</span>
              <div className="intro__item_color purple">
                <div className="intro__item_color-text">
                С другой стороны реализация намеченных плановых заданий требуют от нас анализа.
                </div>
                <div className="intro__item_color-arrow_bottom">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1001_82)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="intro__menu-arrow_bottom">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1001_82)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
