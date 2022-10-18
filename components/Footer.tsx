import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

type props={
  items:string[],
  mt:boolean
}

const List = ({ items,mt }: props) => {
  return (
    <div className={`flex flex-wrap gap-2 gap-2 ${mt && 'mt-5'}`}>
      {items?.map((item, index) => {
        return (
          <p
            className="text-gray-400 text-sm hover:underline cursor-pointer"
            key={index}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

function Footer() {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false}/>
      <List items={footerList2} mt/>
      <List items={footerList3} mt/>
      <p className="text-gray-400 text-sm">Tiktod 2022</p>
    </div>
  );
}

export default Footer;
