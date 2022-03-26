import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__title title">Связаться <span>с нами</span></div>
          <div className="footer__body">
            <div className="footer__column">
              <div className="footer__item">
                <div className="footer__item-title">Офис</div>
                <div className="footer__item-content">Москва, ул. Уличная, д. 1, оф. 1</div>
              </div>
              <div className="footer__item">
                <div className="footer__item-title">E-mail</div>
                <div className="footer__item-content">company@company.ru</div>
              </div>
              <div className="footer__item">
                <div className="footer__item-title">Социальные сети</div>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__item">
                <div className="footer__item-title">Режим работы</div>
                <div className="footer__item-content">Пн-Вт: 10:00 — 19:00; Сб-Вс: 10:00 — 15:00</div>
              </div>
              <div className="footer__item">
                <div className="footer__item-title">Телефон</div>
                <div className="footer__item-content">8 (800) 900-00-00</div>
              </div>  
            </div>
            <div className="footer__column">
              <form className="footer__form">
              <div className="footer__form-title">Остались вопросы?</div>
                <div className="footer__form-input_wrapper">
                  <span>Ваше имя</span>
                  <input placeholder="Иван Иванов" type='text' className="footer__form-input" />
                </div>
                <div className="footer__form-input_wrapper">
                  <span>Телефон / E-mail</span>
                  <input placeholder="example@example.com" type='text' className="footer__form-input" />
                </div>
                <div className="footer__form-input_wrapper">
                  <span>Ваше сообщение</span>
                  <input placeholder="Текст обращения" type='text' className="footer__form-input" />
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6088 1.94152C13.0709 0.479453 15.4414 0.479453 16.9034 1.94152C18.3655 3.40359 18.3655 5.77408 16.9034 7.23615L16.4801 7.65954C16.1872 7.95244 15.7123 7.95244 15.4194 7.65954C15.1265 7.36665 15.1265 6.89178 15.4194 6.59888L15.8428 6.17549C16.7191 5.2992 16.7191 3.87847 15.8428 3.00218C14.9665 2.1259 13.5458 2.1259 12.6695 3.00218L5.47174 10.1999C5.06313 10.6085 5.06313 11.271 5.47174 11.6796C5.88035 12.0883 6.54285 12.0883 6.95146 11.6796L12.4556 6.17549C12.7485 5.8826 13.2234 5.8826 13.5163 6.17549C13.8092 6.46838 13.8092 6.94325 13.5163 7.23615L8.01212 12.7403C7.01772 13.7347 5.40548 13.7347 4.41108 12.7403C3.41668 11.7459 3.41668 10.1337 4.41108 9.13926L11.6088 1.94152ZM8.85891 2.36492C9.15181 2.65781 9.15181 3.13269 8.85891 3.42558L2.50797 9.77653C1.16401 11.1205 1.16401 13.2995 2.50797 14.6434C3.85192 15.9874 6.0309 15.9874 7.37486 14.6434L13.7258 8.29247C14.0187 7.99958 14.4936 7.99958 14.7865 8.29247C15.0794 8.58536 15.0794 9.06024 14.7865 9.35313L8.43552 15.7041C6.50577 17.6338 3.37705 17.6338 1.44731 15.7041C-0.482435 13.7743 -0.482436 10.6456 1.44731 8.71587L7.79825 2.36492C8.09115 2.07203 8.56602 2.07203 8.85891 2.36492Z" fill="#909090"/>
                    </svg>
                </div>
                <div className="footer__form-agreement">Нажимая на кнопку «Получить консультацию», вы соглашаетесь на <span>обработку персональных данных</span></div>
                <button className="footer__form-button button">Получить консультацию</button>
              </form>
            </div>
          </div>
          <div className="footer__confidentiality">
            <div className="footer__confidentiality-left">© 2022 Сompany. <span>Соглашение об обработке персональных данных и политика конфиденциальности</span></div>
            <div className="footer__confidentiality-right"><span>Сделано в</span> Palladiumlab</div>
          </div>
        </div>
    </div>
  );
}

export default Footer;