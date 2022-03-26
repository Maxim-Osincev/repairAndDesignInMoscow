import React from "react";
import './header.scss';

function Header() {

    document.addEventListener('click', e => {
        document.querySelectorAll('.header__left-item').forEach(el => {
            el.classList.remove('active')
        })
        if(e.target.closest('.header__left-item')){
            e.target.closest('.header__left-item').classList.add('active')
        }
    })


    document.addEventListener('click', e => {
      if(!e.target.closest('.header')){
        document.querySelector('.menu__burger-list').classList.remove('active');
      }
    })

    function showMenuBurger(){
      document.querySelector('.menu__burger-list').classList.toggle('active');
    }

    if(document.documentElement.clientWidth > 200){
      document.addEventListener('scroll', () => {
        document.querySelector('.header').style.opacity = 1 - (window.pageYOffset / 500).toFixed(1);

        if(document.querySelector('.header').style.opacity <= 0){
          document.querySelector('.header').style.visibility = 'hidden'
        } else{
          document.querySelector('.header').style.visibility = 'visible'
        }
      });
    }


  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header__left">
          <div className="header__left-marker">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.74963 17.426C8.84247 17.5004 8.91603 17.558 8.96712 17.5975L9.499 17.9965L10.0309 17.5975C10.082 17.558 10.1555 17.5004 10.2484 17.426C10.434 17.2773 10.697 17.0608 11.0116 16.7861C11.6399 16.2375 12.4794 15.4522 13.3213 14.506C14.9702 12.6529 16.773 10.024 16.773 7.274C16.773 3.25668 13.5163 0 9.499 0C5.48168 0 2.225 3.25668 2.225 7.274C2.225 10.024 4.02782 12.6529 5.67669 14.506C6.51856 15.4522 7.3581 16.2375 7.98635 16.7861C8.30101 17.0608 8.56403 17.2773 8.74963 17.426ZM9.499 1.5C6.31011 1.5 3.725 4.08511 3.725 7.274C3.725 9.43188 5.18417 11.696 6.7973 13.5089C7.58643 14.3958 8.3779 15.1367 8.97289 15.6561C9.17391 15.8317 9.35188 15.9814 9.499 16.1023C9.64611 15.9814 9.82409 15.8317 10.0251 15.6561C10.6201 15.1367 11.4116 14.3958 12.2007 13.5089C13.8138 11.696 15.273 9.43188 15.273 7.274C15.273 4.08511 12.6879 1.5 9.499 1.5Z"
                fill="#222222"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.49901 4.762C8.11167 4.762 6.98701 5.88666 6.98701 7.274C6.98701 8.66134 8.11167 9.786 9.49901 9.786C10.8863 9.786 12.011 8.66134 12.011 7.274C12.011 5.88666 10.8863 4.762 9.49901 4.762ZM5.48701 7.274C5.48701 5.05823 7.28324 3.262 9.49901 3.262C11.7148 3.262 13.511 5.05823 13.511 7.274C13.511 9.48976 11.7148 11.286 9.49901 11.286C7.28324 11.286 5.48701 9.48976 5.48701 7.274Z"
                fill="#222222"
              />
            </svg>
          </div>
          <ul className="header__list">
            <li className="header__left-item">Главная</li>
            <li className="header__left-item">О компании</li>
            <li className="header__left-item">Услуги</li>
          </ul>
        </div>
        <div className="header__center">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.09126 5.47032L8.32414 7.7032C9.93067 6.32652 11.9689 5.43704 14.2074 5.26597V2.10826C11.0996 2.28924 8.27658 3.52768 6.09126 5.47032ZM15.7926 2.10826V5.26597C18.0311 5.43704 20.0693 6.32652 21.6759 7.7032L23.9087 5.47032C21.7234 3.52768 18.9004 2.28924 15.7926 2.10826ZM25.0297 6.59126L22.7968 8.82414C24.1735 10.4307 25.063 12.4689 25.234 14.7074H28.3917C28.2108 11.5996 26.9723 8.77658 25.0297 6.59126ZM28.3917 16.2926H25.234C25.063 18.5311 24.1735 20.5693 22.7968 22.1759L25.0297 24.4087C26.9723 22.2234 28.2108 19.4004 28.3917 16.2926ZM23.9087 25.5297L21.6759 23.2968C20.0693 24.6735 18.0311 25.563 15.7926 25.734V28.8917C18.9004 28.7108 21.7234 27.4723 23.9087 25.5297ZM14.2074 28.8917V25.734C11.9689 25.563 9.93067 24.6735 8.32414 23.2968L6.09126 25.5297C8.27658 27.4723 11.0996 28.7108 14.2074 28.8917ZM4.97032 24.4087L7.2032 22.1759C5.82652 20.5693 4.93704 18.5311 4.76597 16.2926H1.60826C1.78924 19.4004 3.02768 22.2234 4.97032 24.4087ZM1.60826 14.7074H4.76597C4.93704 12.4689 5.82652 10.4307 7.2032 8.82414L4.97032 6.59126C3.02768 8.77658 1.78924 11.5996 1.60826 14.7074ZM4.3934 4.8934C7.107 2.1798 10.8581 0.5 15 0.5C19.1419 0.5 22.893 2.1798 25.6066 4.8934C28.3202 7.607 30 11.3581 30 15.5C30 19.6419 28.3202 23.393 25.6066 26.1066C22.893 28.8202 19.1419 30.5 15 30.5C10.8581 30.5 7.107 28.8202 4.3934 26.1066C1.6798 23.393 0 19.6419 0 15.5C0 11.3581 1.6798 7.607 4.3934 4.8934ZM15 6.82104C12.6032 6.82104 10.4345 7.79159 8.86305 9.36305C7.29159 10.9345 6.32104 13.1032 6.32104 15.5C6.32104 17.8968 7.29159 20.0655 8.86305 21.637C10.4345 23.2084 12.6032 24.179 15 24.179C17.3968 24.179 19.5655 23.2084 21.137 21.637C22.7084 20.0655 23.679 17.8968 23.679 15.5C23.679 13.1032 22.7084 10.9345 21.137 9.36305C19.5655 7.79159 17.3968 6.82104 15 6.82104ZM13.8983 9.94698V13.3291H12.3131V12.6138C11.5397 13.3341 11.0568 14.3611 11.0568 15.5C11.0568 16.6389 11.5397 17.6659 12.3131 18.3862V17.6709H13.8983V21.053L12.7883 20.5681C10.8375 19.7157 9.47159 17.7682 9.47159 15.5C9.47159 13.2318 10.8375 11.2843 12.7883 10.4319L13.8983 9.94698ZM16.1017 9.94698L17.2117 10.4319C19.1625 11.2843 20.5284 13.2318 20.5284 15.5C20.5284 17.7682 19.1625 19.7157 17.2117 20.5681L16.1017 21.053L16.1017 17.6709H17.6869V18.3862C18.4603 17.6659 18.9432 16.6389 18.9432 15.5C18.9432 14.3611 18.4603 13.3341 17.6869 12.6138V13.3291H16.1017V9.94698Z"
              fill="#222222"
            />
          </svg>
        </div>

        <div className="menu__burger" onClick={showMenuBurger}>
          Меню
          <div className="menu__burger-list">
            <ul>
              <li>Главная</li>
              <li>О компании</li>
              <li>Услуги</li>
              <li>Цены</li>
              <li>Портфолио</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>

        <div className="header__right">
          <ul className="header__list">
            <li className="header__left-item">Цены</li>
            <li className="header__left-item">Портфолио</li>
            <li className="header__left-item">Контакты</li>
          </ul>
          <div className="header__right-tel">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9711 0.0389886C13.2495 -0.126998 12.5202 0.250129 12.2292 0.920535L12.2279 0.923517L10.6794 4.53387C10.4123 5.15691 10.589 5.88378 11.1182 6.31271L12.605 7.53089C11.5779 9.44779 9.98201 11.06 8.03224 12.103L6.81202 10.6144C6.38278 10.0907 5.66154 9.90894 5.03467 10.1775L1.42713 11.7223L1.42081 11.7251C0.752455 12.0186 0.37211 12.7489 0.539244 13.4702L1.31175 16.8214C1.47107 17.5095 2.08354 18.0002 2.79564 18.0002C11.4612 18.0002 18.4982 10.9796 18.5 2.30201C18.5049 1.58874 18.0162 0.973905 17.3229 0.814566L13.9711 0.0389886ZM13.6052 1.51777L12.0581 5.12485L14.4714 7.12098L14.2233 7.64964C12.9892 10.2787 10.8358 12.4629 8.15037 13.7212L7.62201 13.9687L5.62545 11.5562L2.02273 13.099C2.01354 13.1034 2.00715 13.11 2.00325 13.1176C1.99923 13.1255 2.00037 13.131 2.00037 13.131L2.00064 13.1321L2.77309 16.4831C2.77544 16.493 2.78366 16.5002 2.79564 16.5002C10.635 16.5002 17 10.1483 17 2.29866V2.29196C17.0001 2.28769 16.9992 2.28464 16.9992 2.28464L16.9976 2.28176L16.9949 2.27939C16.9949 2.27939 16.9919 2.2776 16.9876 2.27662L16.9862 2.27629L13.6348 1.50081C13.6315 1.50008 13.6272 1.50031 13.6272 1.50031C13.625 1.5006 13.6221 1.50138 13.619 1.50296C13.6129 1.50607 13.6081 1.51126 13.6052 1.51777Z"
                fill="#222222"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
