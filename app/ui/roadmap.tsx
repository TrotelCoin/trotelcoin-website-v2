"use client";

import { useInView } from "react-intersection-observer";

const timeline = [
  {
    name: "Creation of TrotelCoin",
    description:
      "A student passionate about cryptocurrencies and blockchain technology decided to create TrotelCoin.",
    date: "May 2023",
    dateTime: "2023-05",
  },
  {
    name: "Project Defined",
    description:
      "The distribution of project tokens, the whitepaper, and related details were finalized.",
    date: "October 2023",
    dateTime: "2023-10",
  },
  {
    name: "Beta Version",
    description:
      "The beta version is online, and the platform is undergoing user testing.",
    date: "June 2024",
    dateTime: "2024-06",
  },
  {
    name: "Global Deployment",
    description:
      "The platform is launched globally, providing access to learning for all.",
    date: "October 2024",
    dateTime: "2024-10",
  },
];

export default function Roadmap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="bg-white dark:bg-black py-24 sm:py-32">
        {inView ? (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Roadmap.
            </h2>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-blue-700 dark:text-blue-200"
                  >
                    {item.date}
                  </time>
                  <p className="mt-1 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
