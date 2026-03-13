import React, { useState } from "react";
import "./Header.css"

const Header = () => {
  const [data, setData] = useState(0);
  const [imageSlide, setImageSlide] = useState([
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/12-march-itel/712x318111.png",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/12-march-itel/712x384_1.png",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Global/Artboard.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Live-now/Artboard-1.gif",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif",
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
    "https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/update/712x384.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384.png",
  ]);
  console.log("this is it state", imageSlide[data]);

  const addNum = () => setData(data + 1);

  const subNum = () => {
    if (data > 0) {
      setData(data - 1);
    } else {
      setData(0);
    }
  };
  return (
    <>
      <header>
        <img src="https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/BD_Desktop_top_strip.gif" alt="" className="HeaderImg"/>
      </header>
      <article>
        <img src="" alt="" />
      </article>
      <aside>
        <div className="Jumdiv">
            <img src="https://logos-world.net/wp-content/uploads/2022/12/Jumia-Logo.jpg" alt="" className="Jumimg"/>
        </div>
        <div className="Searchdiv">
            <input type="Search" />
            <button className="Searchbtn">Search</button>
        </div>
        <div className="Accountdiv">
            <img src="https://static.vecteezy.com/system/resources/previews/007/335/840/non_2x/account-icon-template-vector.jpg" alt="" className="Accountimg"/>
            <h1>Account</h1>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Help-Icon-by-arus-580x386.jpg" alt="" className="Helpimg"/>
            <h2>Help</h2>
            <img src="https://gallery.yopriceville.com/downloadfullsize/send/28045" alt="" className="Cartimg"/>
            <h3>Cart</h3>
        </div>
      </aside>
      <main>
        <div className="MainLeft">
            <ul className="Appliances">
                <li>Appliances</li>
                <li>Phones & Tablets</li>
                <li>Health & Beauty</li>
                <li>Home & Office</li>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Supermarket</li>
                <li>Computing</li>
                <li>Baby Products</li>
                <li>Gaming</li>
                <li>Musical Instruments</li>
                <li>Other categories</li>
            </ul>
        </div>
        <div className="MainCenter">
            <section className="LeftSection">
                <button onClick={subNum} className="Leftbtn">-</button>
            </section>
            <section className="CenterSection">
                <img src={imageSlide[data % imageSlide.length]} alt="slide" className="Proimg"/>
            </section>
            <section className="RightSection">
                <button onClick={addNum} className="Rightbtn">+</button>
            </section>
        </div>
        <div className="MainRight">
            <ul className="Call">
                <img src="" alt="" className="Callimg"/>
                <li>CALL TO ORDER <br/>09063488697</li>
                <img src="" alt="" />
                <li>Sell on Jumia</li>
                <img src="" alt="" />
                <li>Send Your Packages</li>

                
            </ul>
        <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" alt="" />
        </div>

      </main>
    </>
  );
};

export default Header;
