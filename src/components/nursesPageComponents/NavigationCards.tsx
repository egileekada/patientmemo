import React from "react";
import { useNavigate } from "react-router-dom";

// component props types object
type NavigationCardsProps = {
  bgColor: string;
  iconColor: string;
  cardText1: string;
  cardText2: string;
  halfCircleColor: string;
  navigationLink: string;
  Icon: JSX.Element;
};

export default function NavigationCards(props: NavigationCardsProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(props.navigationLink)}
      className={`bg-[${props.bgColor}] w-full rounded-md px-6 py-8 relative cursor-pointer`}
    >
      <div
        className={`w-14 h-14 flex justify-center items-center  rounded-full bg-[${props.iconColor}]`}
      >
        {props.Icon}
      </div>
      <p className="font-Ubuntu-Bold text-xl text-white mt-3 relative z-50">
        <div>{props.cardText1}</div>
        <div>{props.cardText2}</div>
      </p>
      <div
        className={`w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[${props.halfCircleColor}]`}
      />
    </div>
  );
}
