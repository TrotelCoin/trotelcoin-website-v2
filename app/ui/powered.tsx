"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Powered() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="bg-white dark:bg-black py-12 sm:py-16">
        {inView ? (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn animate__slow">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
              Powered by.
            </h2>
            <div className="mx-auto py-6 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-1">
              <Image
                className="block dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/flooz.svg"
                alt="Flooz"
                width={158}
                height={48}
              />
              <Image
                className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/flooz-white.png"
                alt="Flooz"
                width={158}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <p className="relative rounded-full bg-gray-50 dark:bg-gray-900 px-4 py-1.5 text-sm leading-6 text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
                <span className="hidden md:inline">
                  With Flooz, you have the opportunity to buy TrotelCoin using
                  Apple Pay and Google Pay.
                </span>
                <Link
                  href="https://flooz.xyz/trade/how-to-buy/0x85057d5a8d063f9075Ba963101D76352051675E5?network=polygon"
                  target="_blank"
                  className="font-semibold text-blue-600 dark:text-blue-200"
                >
                  <span className="absolute inset-0" aria-hidden="true" />{" "}
                  What's Flooz ? <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
