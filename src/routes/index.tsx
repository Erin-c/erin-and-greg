import { createFileRoute } from "@tanstack/react-router";
import Countdown from "react-countdown";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const Completionist = () => (
    <span className="font-serif text-chestnut font-extralight text-2xl">
      Til death do us part!
    </span>
  );

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex w-full px-20 justify-between font-serif text-3xl text-chestnut">
          <div className="flex flex-col items-center">
            <span className="">{days}</span>
            <span className="font-sans font-extralight text-base">days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{hours}</span>
            <span className="font-sans font-extralight text-base">hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{minutes}</span>
            <span className="font-sans font-extralight text-base">minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{seconds}</span>
            <span className="font-sans font-extralight text-base">seconds</span>
          </div>
        </div>
      );
    }
  };
  return (
    <main className="page-wrap bg-cream flex flex-col justify-center pt-20 gap-25">
      <section className="grid grid-cols-1 md:grid-cols-2 px-20">
        <div className="rise-in relative overflow-hidden py-10 px-10 w-full justify-center items-center flex">
          <div className="flex flex-col gap-12 w-full">
            <div className="flex items-center gap-4">
              <hr className="border-autumn w-8" />
              <div className="uppercase text-autumn text-sm max-w-67.5">
                We're getting
                <br />
                married
              </div>
            </div>

            <div className="flex flex-col gap-4 font-serif italic text-8xl">
              <span className="text-autumn">Erin</span>
              <span className="text-autumn/50">&</span>
              <span className="text-walnut">Greg</span>
            </div>
            <hr className="border-walnut/50 w-full" />
            <div className="flex justify-around">
              <div>
                <span className="uppercase font-light text-walnut/70">
                  Date
                </span>
                <p className="m-0 text-2xl font-serif text-walnut">
                  February 27, <br /> 2027
                </p>
              </div>
              <div className="">
                <span className="uppercase font-light text-walnut/70">
                  Location
                </span>
                <p className="m-0 text-2xl font-serif text-walnut">
                  Fredricksburg, <br />
                  TX
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden justify-center items-center mx-auto">
          <img src="../assets/banyanTree.jpg" className="w-full" />
        </div>
      </section>

      <section className="flex gap-6 col-span-full bg-walnut text-cream py-8 justify-center">
        <Countdown
          date={new Date("2027-02-27T18:00:00-06:00")}
          renderer={renderer}
        />
      </section>

      <section className="flex flex-col sm:flex-row mx-auto w-[50vw] mb-25 gap-10 items-center">
        <div className="font-serif text-autumn italic shrink-0 text-4xl">
          Our Story
        </div>
        <div className="font-light">
          Greg and Erin met in 2019 at a bar in Cambridge, MA. They bonded over
          their shared love of video games, dogs, and trying new restaurants.
          After a whirlwind romance filled with adventures and laughter, Greg
          proposed to Erin at the Royal Hawaiian hotel in Hawaii. Now, they are
          excited to celebrate their love with friends and family on February
          27, 2027.
        </div>
      </section>
    </main>
  );
}
