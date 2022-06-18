import React from "react";
import Carditem from "./carditem";

const Cardmaker = () => {
  return (
    <>
      <span> Card Maker </span>
      {/* 반복문으로 파이어베이스에 등록된 카드정보를 불러옴.  */}
      <Carditem />
    </>
  );
};

export default Cardmaker;
