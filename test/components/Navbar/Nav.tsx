"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchInput from "./SearchInput";
import MenuToggle from "./MenuToggle";

export default function Navbar() {
  const menu = [
    {
      name: "หน้าแรก",
      path: "/",
    },
    {
      name: "สินค้า",
      path: "/products",
    },
    {
      name: "การรับประกัน",
      path: "/warranty",
    },
    {
      name: "สั่งซื้อสินค้า",
      path: "/wheretobuy",
    },
    {
      name: "เกี่ยวกับเรา",
      path: "/about-us",
    },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSerch] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const toggleSearch = () => {
    setIsOpenSerch(!isOpenSearch);
  };

  return (
    <nav className="fixed z-50 w-full bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-5">
        {/* Hamburger button */}
        <button
          className="rounded border px-3 py-2 lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Logo */}
        <Link href="/">
          <Image
            src="https://alectric.asia/static/version1698852999/frontend/Alectric/market/th_TH/images/logo.svg"
            alt="logo-alectric"
            width={130}
            height={60}
          />
        </Link>

        {/* Links - desktop */}
        <ul className="text-primary mx-1 hidden flex-1 items-center justify-evenly space-x-12 lg:flex">
          {menu.map((menu, index) => (
            <li key={index}>
              <Link className="font-thin" href={menu.path}>{menu.name}</Link>
            </li>
          ))}
          <li>
            <p>ติดต่อเรา 1277</p>
          </li>
        </ul>

        {/* Search button */}
        <button
          className="rounded border px-3 py-2 lg:hidden"
          onClick={toggleSearch}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
            ></path>
          </svg>
        </button>

        {/* Link - Sidebar Menu */}
        <MenuToggle
          menu={menu}
          toggleMenu={toggleMenu}
          isOpenMenu={isOpenMenu}
        />
      </div>

      {/* Search Box */}
      <div className={`${isOpenSearch ? "flex" : "hidden"}`}>
        <SearchInput />
      </div>
    </nav>
  );
}
