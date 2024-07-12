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
import MainLogo from "../../../assets/assets";

const _1stList = [
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
    url: "/CSR",
    txt: "Careers CSR",
  },
  {
    url: "",
    txt: "Divueens",
  },
  {
    url: "/investor-relation",
    txt: "Investor Relation",
  },
];

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
          url: "/CSR",
          txt: "Careers CSR",
        },
        {
          url: "",
          txt: "Divueens",
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
            } mt-6 space-y-3 text-sm`}
          >
            {lst.chhotiList.map((list2, int) => {
              return (
                <li key={int}>
                  <Link
                    to={list2.url}
                    className="footerList"
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
          className="row_ md:mt-8 md:px-24 px-8 grid grid-cols-1 lg:mt-0 lg:grid-cols-5"
          data-footer-part=""
        >
          <div
            className="col_ col-span-2 sm:col-span-1 lg:col-span-1"
            //  style={{ gridArea: "col_Head" }}
            data-footer-part=""
          >
            <Link to="/" className="logo">
              <img alt="" className="object-contain h-[4.5rem] w-22" src={MainLogo} />
            </Link>
            {/* <ul className="all_Items mt-6 space-y-3 text-sm">
              {_1stList.map((list2, int) => {
                return (
                  <li key={int}>
                    <Link
                      to={list2.url}
                      className="footerList"
                    >
                      {list2.txt}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <ListItemsAll />
          <ul className="col_ col-span-2 flex justify-center gap-8 pt-12 md:pt-0 lg:pr-3 lg:col-span-5 lg:justify-end">
            <li>
              <a
                href=""
                className=''
              >
                <FaFacebookF className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a
                href=""
                 className=''
              >
                <FaInstagram className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a
                href=""
                 className=''
              >
                <FaWhatsapp className="h-6 w-6 text-black hover:text-rose-200" />
              </a>
            </li>
            <li>
              <a
                href=""
                className=""
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
                <a
                  href="/"
                  className="text-black transition hover:underline"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-black/80 transition hover:underline"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-black/80 transition hover:underline"
                >
                  
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
