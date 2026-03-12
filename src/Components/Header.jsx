import React, { useState } from "react";

const Header = () => {
  const [data, setData] = useState(0);
  const [imageSlide, setImageSlide] = useState([
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/12-march-itel/712x318111.png",
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
    <div>
      <button onClick={subNum}>-</button>
      <span>{data}</span>
      <img src={imageSlide[data % imageSlide.length]} alt="slide" />
      <button onClick={addNum}>+</button>
    </div>
  );
};

export default Header;
