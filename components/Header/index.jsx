/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { AuthUser } from "@/lib/hooks/useAuth";
import isEmpty from "@/utils/is-empty";
import useAuth from "@/lib/hooks/auth";
import { useMutation } from "react-query";
import { logoutMutation } from "@/utils/resolvers/mutation";

const menus = [
  {
    id: "01",
    menu: "Home",
    url: "/",
  },
  {
    id: "02",
    menu: "Features",
    url: "/feature",
  },
  {
    id: "03",
    menu: "About Us",
    url: "/about",
  },
  {
    id: "04",
    menu: "Price",
    url: "/price",
  },
  {
    id: "05",
    menu: "Contact Us",
    url: "/contact-us",
  },
];

const index = ({ transparent, stickyNav }) => {
  const [sticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const user = AuthUser();
  const { logout } = useAuth({ redirectIfAuthenticated: "/login" });
  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClose = () => {
    setNavOpen((prev) => !prev);
  };

  const { isLoading, mutate } = useMutation(logoutMutation);

  const logoutHandler = () => {
    logout({ mutate, token: user.token });
  };

  return (
    <>
      <header
        id="navbar"
        className={` ${
          transparent ? "bg-transparent fixed" : "bg-[#c2c4ff] "
        }  ${
          sticky && stickyNav
            ? "navbar_scrolled navbar fixed"
            : transparent
            ? "navbar"
            : "navbar sticky text-white"
        }`}
      >
        <div className="container">
          <Link href="/">
            <Image
              className="w-20 md:w-24 lg:w-32"
              src="/img/header/ERP-Logo.png"
              alt="Logo"
              width={300}
              height={150}
            />
          </Link>

          <button
            className="text-white md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <MenuIcon fontSize="large" />
          </button>

          <ul
            className={`${
              transparent && !sticky ? "text-white" : " text-primary"
            } hidden pt-4 font-semibold  md:flex md:justify-between md:items-center md:pt-0`}
          >
            {menus.map((menu) => {
              return (
                <li className="block py-2 md:p-2 lg:p-4" key={menu.id}>
                  <Link
                    className={`${
                      transparent && !sticky ? "border-white" : "border-primary"
                    } py-2 duration-75 hover:border-b `}
                    href={menu.url}
                  >
                    {menu.menu}
                  </Link>
                </li>
              );
            })}

            <li className="block py-2 md:p-2 lg:p-4">
              {isEmpty(user.token) ? (
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login <ArrowForwardIcon className="ml-2" fontSize="small" />
                </Button>
              ) : (
                <Button onClick={logoutHandler}>
                  Logout <ArrowForwardIcon className="ml-2" fontSize="small" />
                </Button>
              )}
            </li>
          </ul>
        </div>

        {/* Backdrop Blur */}

        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-screen fixed top-0 z-20  left-0   w-full   md:hidden backdrop-blur-sm `}
          onClick={handleClose}
        ></div>

        {/*  Mobile Navigation bar .  */}
        <div
          className={`${
            navOpen ? "block" : "hidden"
          }  h-[70vh] fixed  top-0 z-50  right-0  animated_circle w-2/3  md:hidden`}
        >
          <div className="container flex justify-between py-10 h-[95px] ">
            <div></div>
            <button className="text-gray-800 md:hidden" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </button>
          </div>
          <ul className="px-10 font-semibold text-center bg-transparent text-primary md:flex md:justify-between md:items-center md:pt-0">
            {menus.map((item) => {
              return (
                <li className="block py-2 md:p-2 lg:p-4" key={item.id}>
                  <Link
                    className="block px-3 py-2 rounded-md text-primary hover:text-white border-primary hover:bg-primary"
                    href={item.url}
                  >
                    {item.menu}
                  </Link>
                </li>
              );
            })}
            <li className="block ">
              {isEmpty(user.token) ? (
                <Button
                  fullWidth
                  onClick={() => {
                    router.push("login");
                  }}
                >
                  Login <ArrowForwardIcon className="ml-2" fontSize="small" />
                </Button>
              ) : (
                <Button fullWidth onClick={logoutHandler}>
                  Logout <ArrowForwardIcon className="ml-2" fontSize="small" />
                </Button>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default index;
