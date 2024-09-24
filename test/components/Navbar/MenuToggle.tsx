import SearchInput from "./SearchInput";
import Link from "next/link";

type MenuItem = {
  name: string;
  path: string;
};

type Props = {
  menu: MenuItem[];
  toggleMenu: () => void;
  isOpenMenu: boolean;
};

const MenuToggle = ({ menu, toggleMenu, isOpenMenu }: Props) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-full transform bg-white shadow-lg md:w-1/2 ${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button
          className="absolute right-0 top-0 mr-4 mt-4"
          onClick={toggleMenu}
        >
          {/* Close Icon */}
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="text-primary flex flex-col space-y-4 p-6 *:border-b">
          <li>
            <h4 className="font-medium">Menu</h4>
          </li>
          {menu.map((menu, index) => (
            <li key={index}>
              <Link onClick={toggleMenu} href={menu.path}>
                {menu.name}
              </Link>
            </li>
          ))}
          <li>
            <p>ติดต่อเรา 1277</p>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <SearchInput />
      </div>
    </>
  );
};

export default MenuToggle;
