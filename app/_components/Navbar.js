"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white lg:top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8 lg:border-b border-stone-400"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <img alt="" src="/images/logo/logo.png" className="h-14 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 g px-3 py-2"
                : "text-sm font-semibold text-gray-900 gray-50 px-3 py-2 hover:bg-gray-50"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/ma-mission"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 g px-3 py-2"
                : "text-sm font-semibold text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Ma mission
          </NavLink>
          <NavLink
            to="/votre-chasseur-immobilier"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 g px-3 py-2"
                : "text-sm font-semibold text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Votre chasseur immobilier
          </NavLink>
          <NavLink
            to="/questions-frequentes"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 g px-3 py-2"
                : "text-sm font-semibold text-gray-900 gray-50 rounded-lg px-3 py-2 hover:bg-gray-50"
            }
          >
            Questions fréquentes
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-base font-semibold bg-indigo-400  text-white px-3 py-2 transition-colors duration-300"
                : "text-base font-semibold bg-gray-900 text-white  px-3 py-2 hover:bg-gray-500 transition-colors duration-300"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base font-semibold text-indigo-400 hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </NavLink>
                <NavLink
                  to="/ma-mission"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base font-semibold text-indigo-400  hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ma mission
                </NavLink>
                <NavLink
                  to="/votre-chasseur-immobilier"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base font-semibold text-indigo-400   hover:bg-gray-50 block rounded-lg px-3 py-2 "
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Votre chasseur immobilier
                </NavLink>
                <NavLink
                  to="/questions-frequentes"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base font-semibold text-indigo-400   hover:bg-gray-50 block rounded-lg px-3 py-2 "
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Questions fréquentes
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-base font-semibold text-indigo-400 hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
