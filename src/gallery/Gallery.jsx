import React from "react";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
        <div className="gallery__wrapper">
            <div className="gallery__title title">Примеры <span>выполненных</span> работ</div>
            <div className="gallery__body">
                <div className="gallery__body-part">
                    <div className="gallery__body-more">
                        <div className="gallery__body-more_big gallery__item">
                            <div className="gallery__body-title">Новостройка</div>
                            <img src={require("../img/gallery/service_card_horizontal_1.png")}></img>
                        </div>
                        <div className="gallery__body-more_row">
                            <div className="gallery__body-small gallery__item">
                                <div className="gallery__body-title">Вторичка</div>
                                <img src={require("../img/gallery/service_card_1.png")}></img>
                            </div>
                            <div className="gallery__body-small gallery__item">
                                <div className="gallery__body-title">Вторичка</div>
                                <img src={require("../img/gallery/service_card_2.png")}></img>
                            </div>
                        </div>
                    </div>
                    <div className="gallery__body-less gallery__item">
                        <div className="gallery__body-title">Новостройка</div>
                        <img src={require("../img/gallery/service_card_vertical_1.png")}></img>
                    </div>
                </div>
                <div className="gallery__body-part">
                    <div className="gallery__body-less gallery__item">
                        <div className="gallery__body-title">Новостройка</div>
                        <img src={require("../img/gallery/service_card_vertical_2.png")}></img>
                    </div>
                    <div className="gallery__body-more">
                        <div className="gallery__body-more_row">
                            <div className="gallery__body-small gallery__item">
                                <div className="gallery__body-title">Вторичка</div>
                                <img src={require("../img/gallery/service_card_3.png")}></img>
                            </div>
                            <div className="gallery__body-small gallery__item">
                                <div className="gallery__body-title">Вторичка</div>
                                <img src={require("../img/gallery/service_card_4.png")}></img>
                            </div>
                        </div>
                        <div className="gallery__body-more_big gallery__item">
                            <div className="gallery__body-title">Новостройка</div>
                            <img src={require("../img/gallery/service_card_horizontal_1.png")}></img>
                        </div>
                    </div>
                </div>
            </div>
            <button className="gallery__button button">Все проекты</button>
        </div>
    </div>
  );
}

export default Gallery;