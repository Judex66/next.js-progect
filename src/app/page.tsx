import Image from "next/image";
 import img1 from '@/img/image1.png'
 import img from '@/img/image.png'
 import img_form from '@/img/photo.png'
export default function Home() {
  return (
    <div>
    <header>
      <div className="logo">
        <Image
                 src="/logo.svg"
                 alt="Next.js logo"
                 width={260}
                 height={64}
                 priority
               />
      </div>
      <div className="info">
        <div className="adress">
          <p className="mainInfo">Адрес офиса:</p>
          <p className="secondInfo">РБ, г. Минск,<br></br>ул. Ленина, 1</p>
        </div>
        <div className="phone">  
        <p className="mainInfo">+375 99 999 99 99</p>
        <p className="secondInfo">пн – пт: с 09:00 до 18:00<br></br>
        сб – вс: с 10:00 до 16:00
        </p>
        </div>
        <button className="oderCall">Заказать звонок</button>
      </div>
    </header>
    <div className="mainSlider">
<div className="container_slider">
  <div className="sliderTitle">
    <h2>
    Создадим ваш<br></br>
    идеальный дом<br></br>
    в установленные<br></br>
    сроки и с 10-летней<br></br>
    гарантией
    </h2>
    <p className="option">Без головной боли и отклонений от сметы строительства</p>
    <button className="price_btn">Узнать стоимость</button>
  </div>
  <div className="sliderImgs">
    <div className="tender">
      <p>Оформление<br></br>рассрочки по ставке<br></br>от 15% годовых</p>
      <div>
        <p>Подробнее</p>
        <Image
                 src="/up_right.svg"
                 alt="arrow"
                 width={24}
                 height={24}
                 priority
               />
      </div>
    </div>
    <div><img src={img1.src} alt="" /></div>
    <div><img src={img.src} alt="" /></div>
    <div className="tender">
      <p>Оформление<br></br>рассрочки по ставке<br></br>от 15% годовых</p>
      <div>
        <p>Подробнее</p>
        <Image
                 src="/up_right.svg"
                 alt="arrow"
                 width={24}
                 height={24}
                 priority
               />
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="form_block">
      <div className="container_form">
        <div><img src={img_form.src} alt="" /></div>
        <div>
          <p className="form_title">Остались вопросы?</p>
          <p className="form_discription">Заполните форму ниже, и наш специалист свяжется с вами<br></br>
          в ближайшее время.</p>
          <form action="">
          <label><span>Телефон<span className="inportant_info">*</span></span><input name="name" type="text" placeholder="Name"/></label>
          <label><span>Комментарий</span><input name="email" type="email" placeholder="Email"/></label>
          <div>
            <div> <input type="checkbox" id="approval" name="approval" /><label htmlFor="approval">Согласие на обработку персональных данных</label></div>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
