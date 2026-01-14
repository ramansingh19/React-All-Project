import { useState } from "react";

import Counter from "../Components/Counter.jsx";
import BgChanger from "../Components/bgChanger.jsx";
import PasswordChanger from "../Components/Passwordchg.jsx";
import CurrencyConverter from "../CurrencyConvertor/CurrencyCov.jsx";
import Todo from "../Todo/todo.jsx";
import RouterProject from "../reactRouter/RouterProject";

export default function Showcase() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      name: "Counter App",
      desc: "A simple counter with min and max limits.",
      image: "/counter.png",
      component: <Counter />,
    },
    {
      name: "Background Changer",
      desc: "Change the background color dynamically.",
      image: "/bgchanger.png",
      component: <BgChanger />,
    },
    {
      name: "Password Generator",
      desc: "Generate secure random passwords.",
      image: "/password.png",
      component: <PasswordChanger />,
    },
    {
      name: "Currency Converter",
      desc: "Convert currencies using real-time data.",
      image: "/currency.png",
      component: <CurrencyConverter />,
    },
    {
      name: "Todo App",
      desc: "Manage daily tasks easily.",
      image: "/todo.png",
      component: <Todo />,
    },
    {
      name: "React Router Project",
      desc: "Multi-page React app using React Router.",
      image: "/reactrouter.png",
      component: <RouterProject />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-12 py-20">

  <div className="max-w-7xl mx-auto space-y-28">

    <h1 className="text-5xl font-bold tracking-tight text-center">
      All React Projects
    </h1>

    {projects.map((p, i) => (
      <div
        key={i}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold">{p.name}</h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {p.desc}
          </p>

          <button
            onClick={() => setActive(p)}
            className="mt-4 px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
          >
            Open Project
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div
          onClick={() => setActive(p)}
          className="w-full h-[340px] bg-gray-800 rounded-xl overflow-hidden cursor-pointer border border-gray-700 hover:border-gray-500 transition"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    ))}

  </div>

  {/* FULL SCREEN MODAL */}
  {active && (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-gray-900 w-[95%] h-[90%] rounded-xl relative p-4">

        <button
          onClick={() => setActive(null)}
          className="absolute top-3 right-5 text-white text-2xl"
        >
          ✕
        </button>

        <div className="w-full h-full overflow-auto rounded-lg border border-gray-700">
          {active.component}
        </div>

      </div>
    </div>
  )}
</div>

  );
}
