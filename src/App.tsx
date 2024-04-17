import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import Flame from "./components/Flame";
import { useRef, useState } from "react";

const App = () => {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <main className="w-full h-screen flex place-items-center justify-center">
      <section
        className="card animate-pulse"
        ref={cardsRef}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <CircleStackIcon
              className="w-14 rounded-lg bg-neutral-950/70 
            stroke-emerald-500 p-2 shadow-inner"
            />
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
              Database
            </h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              Every project needs a full Postgres database, the world's most
              trusted relational database.
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>100% Portable</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Easy to extend</p>
            </span>
          </div>
        </div>

        <div className="w-3/5 flex flex-col place-items-center">
          {/* MY SVG HERE */}
          <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
        </div>
      </section>
    </main>
  );
};

export default App;
