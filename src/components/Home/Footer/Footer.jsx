// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";
import { Divueens } from "../../../assets/assets";

const baadiList = [
  {
    title: "About us",
    chhotiList: 
      [
        {
          url: "/about-us",
          txt: "Who are we ?",
        },
        {
          url: "/our-team",
          txt: "Our Team",
        },
        {
          url: "",
          txt: "Press",
        },
        {
          url: "/authenticity",
          txt: "Authenticity",
        },
        {
          url: "/careers",
          txt: "Careers",
        },
        {
          url: "/CSR",
          txt: "Divueens CSR",
        },
        {
          url: "/investor-relation",
          txt: "Investor Relation",
        },
      ]
    
  },
  {
    title: "Help",
    chhotiList: [
      {
        url: "/contact-us",
        txt: "Contact Us",
      },
      {
        url: "/help-center",
        txt: "FAQs",
      },
      {
        url: "/return-policy",
        txt: "Cancellation and Return",
      },
      {
        url: "/shipping-delivery",
        txt: "Shipping and Delivery ",
      },
      {
        url: "/sell-on-divueens",
        txt: "Sell on Divueens",
      },
      {
        url: "/privacy-policy",
        txt: "Privacy Policy",
      },
    ],
  },
  {
    title: "Inspire Us",
    chhotiList: [
      {
        url: "/blogs",
        txt: "Beauty Books",
      },
      {
        url: "",
        txt: "Divueens Network",
      },
    ],
  },
  {
    title: "Quick Links",
    chhotiList: [
      {
        url: "/special-offers",
        txt: "Special Offers",
      },
      {
        url: "/trendings",
        txt: "Trendings",
      },
      {
        url: "",
        txt: "New Launches",
      },
      {
        url: "",
        txt: "Divueens Fashion",
      },
    ],
  },
  {
    title: "Top Categories",
    chhotiList: [
      {
        url: "",
        txt: "Makeup",
      },
      {
        url: "",
        txt: "Hair",
      },
      {
        url: "",
        txt: "Organics",
      },
    ],
  },
];

function Footer() {
  const [toggleView, cngView] = useState(0);
  const [prev, cngPrev] = useState(0);
  const [textStyle, cngTextStyle] = useState('text-black transition hover:text-rose-700');

  function ListItemsAll() {
    return baadiList.map((lst, index) => {
      return (
        <div
          className="col_ col-span-2 sm:col-span-1"
          // style={{ gridArea: `col_${index}` }}
          key={index}
          data-footer-part=""
        >
          <h3
            onClick={() =>
              prev !== index + 1 ? cngView(index + 1) : cngView(0)
            }

            className="drpBtn text-black text-base font-bold"
          >
            {lst.title}
            {toggleView === index + 1 ? (
              <FaChevronUp className="btnShow" />
            ) : (
              <FaChevronDown className="btnShow" />
            )}
          </h3>
          <ul
            className={`close ${
              toggleView === index + 1 ? "all_Items" : ""
            } mt-4 space-y-1 text-sm`}
          >
            {lst.chhotiList.map((list2, int) => {
              return (
                <li key={int}>
                  <Link
                    to={list2.url}
                    className={textStyle}
                  >
                    {list2.txt}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  useEffect(() => {
    ListItemsAll();
    cngPrev(toggleView);
  }, [toggleView]);

  return (
    <footer data-footer-part="" >
      <div className="md:pt-16 pt-14 ">
        <div
          className="row_ md:mt-8 md:px-24 px-8 grid md:grid-cols-3 lg:mt-0 lg:grid-cols-6 lg:gap-x-12 sm:gap-y-8"
          data-footer-part=""
        >
          <div
            className="col_ col-span-2 sm:col-span-1 lg:col-span-1"
            //  style={{ gridArea: "col_Head" }}
            data-footer-part=""
          >
            <Link to="/" className="logo">
              <img alt="" className="object-contain h-[10rem] w-22" src={Divueens} />
            </Link>
            {/* <ul className="all_Items mt-6 space-y-3 text-sm">
              {_1stList.map((list2, int) => {
                return (
                  <li key={int}>
                    <Link
                      to={list2.url}
                      className={textStyle}
                    >
                      {list2.txt}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <ListItemsAll />
          <ul className="col_ col-span-2 flex justify-center gap-8 pt-12 md:pt-5 lg:pr-12 lg:mr-6 sm:col-span-3 lg:col-span-4 lg:justify-end">
            <li>
              <a href="/"
                className={textStyle}
              >
                <FaFacebookF className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a href="/"
                 className={textStyle}
              >
                <FaInstagram className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a href="/"
                 className={textStyle}
              >
                <FaWhatsapp className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a href="/"
                className={textStyle}
              >
                <FaPinterest className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
          </ul>
        </div>

        <hr data-footer-part="" className="mt-6 mx-4 mb-3 border-none h-[0.06em] bg-rose-950" />

        <div className="py-4 ">
          <div className="sm:flex sm:justify-between">
            <p className="copyright text-sm md:text-base pb-3 md:pb-0 text-black md:ml-20" data-footer-part="">
              DIVUEENS ©️ 2024 - All Rights Reserved
            </p>
            <ul className="flex flex-wrap justify-center md:mr-20 md:gap-4 gap-2 text-xs sm:mt-0">
              <li>
                <Link to="/terms-and-conditions" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
