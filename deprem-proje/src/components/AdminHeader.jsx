import tarde from "../images/tarde2.jpg";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { sehirlerData } from "./sehirlerData";
import Logout from "./Logout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminHeader() {
  const history = useHistory();
  return (
    <div className="flex justify-between items-center my-10">
      <div className="w-[9vw]">
        <img src={tarde} alt="Logo" />
      </div>
      <nav className="flex justify-between items-center gap-x-[4vw]">
        <div className="flex-col">
          <div className="flex justify-between items-center gap-x-[4vw]">
            <a className="text-[20px] font-semibold" href="/STK">
              Anasayfa
            </a>
            <a className="text-[20px] font-semibold" href="hakkimizda">
              Hakkımızda
            </a>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-[20px] font-semibold ring-gray-300 items-center">
                  Şehirler
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-slate-950"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sehirlerData.map((sehir) => (
                      <Menu.Item key={sehir.id}>
                        {({ active }) => (
                          <a
                            onClick={() =>
                              history.push(
                                `/${sehir.sehirAdi.toLocaleLowerCase("tr-TR")}`
                              )
                            }
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 cursor-pointer"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {sehir.sehirAdi}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a className="text-[20px] font-semibold" href="panel">
              Yönetici Paneli
            </a>
            <Logout />
          </div>
        </div>
      </nav>
    </div>
  );
}