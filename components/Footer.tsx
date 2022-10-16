import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

function Footer() {
  return (
    <div className="mt-6 hidden xl:block">
      <div className="flex flex-wrap gap-2 gap-2 mt-5">
        {footerList1?.map((item, index) => {
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
    </div>
  );
}

export default Footer;
