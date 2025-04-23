"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Missions", href: "/missions" },
    { label: "Votre chasseur immobilier", href: "/votre-chasseur-immobilier" },
    { label: "Questions fréquentes", href: "/questions-frequentes" },
  ];

  return (
    <header className="bg-white lg:top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6 lg:px-8 lg:border-b border-stone-400"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image alt="" src="/images/logo/logo.png" width={80} height={100} />
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-sm font-semibold text-[#5F66AC] border-b-1 border-[#5F66AC] px-3 py-2"
                  : "text-sm font-semibold text-gray-900 rounded-lg px-3 py-2 hover:bg-gray-50"
              }
            >
              {item.label}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <Link
            href="/contact"
            className={
              "font-semibold bg-[#EF786F] text-white px-3 py-2 hover:bg-gray-500 transition-colors duration-300"
            }
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
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
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      pathname === item.href
                        ? "text-base font-semibold text-[#5F66AC] hover:bg-gray-50 block rounded-lg px-3 py-2"
                        : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    pathname === "/contact"
                      ? "text-base font-semibold text-[#5F66AC] hover:bg-gray-50 block rounded-lg px-3 py-2"
                      : "text-base font-semibold text-gray-900 hover:bg-gray-50 block rounded-lg px-3 py-2"
                  }
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
