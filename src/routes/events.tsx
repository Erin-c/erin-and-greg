import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

function RouteComponent() {
  const events = [
    {
      name: "Rehearsal Dinner",
      icon: "🕯️",
      date: "February 26, 2027",
      time: "6:00 PM",
      location: "TBD",
      who: "Family and wedding party only",
    },
    {
      name: "The Ceremony",
      icon: "💍",
      date: "February 27, 2027",
      time: "5:00 PM",
      location: "Swallow's Eve",
      who: "Everyone is welcome!",
    },
    {
      name: "The Reception",
      icon: "🥂",
      date: "February 27, 2027",
      time: "7:00 PM",
      location: "Swallow's Eve",
      who: "Everyone is welcome!",
    },
    {
      name: "Brunch",
      icon: "🍳",
      date: "February 28, 2027",
      time: "11:00 AM",
      location: "TBD",
      who: "Everyone is welcome!",
    },
  ];
  {
    /* <div className="hidden lg:flex absolute origin-center -translate-y-1/2 top-[60%] text-[250px] font-serif opacity-5 text-cream">
        EVENTS
      </div> */
  }
  return (
    <main className="bg-olive bg-[url('../assets/flowers.png')]">
      <div className="flex flex-col gap-10 items-center p-20">
        <span className="font-serif text-6xl text-cream italic">
          Let the celebration begin!
        </span>
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-2 h-fit-content font-serif text-xl">
            {events.map((event) => (
              <div className="flex flex-col justify-between gap-6 grow bg-cream/70 rounded-2xl px-8 py-20 text-autumn">
                <span className="text-6xl sepia">{event.icon}</span>
                <h3 className="text-4xl font-medium text-chestnut font-serif italic break-keep">
                  {event.name}
                </h3>
                <div>
                  <p className="uppercase font-light font-sans text-sm mb-2 text-chestnut">
                    Who
                  </p>
                  <p>{event.who}</p>
                </div>
                <div>
                  <p className="uppercase font-light font-sans text-sm mb-2 text-chestnut">
                    Date
                  </p>
                  <p>{event.date}</p>
                </div>
                <div>
                  <p className="uppercase font-light font-sans text-sm mb-2 text-chestnut">
                    Time
                  </p>
                  <p>{event.time}</p>
                </div>
                <div>
                  <p className="uppercase font-light font-sans text-sm mb-2 text-chestnut">
                    Location
                  </p>
                  <p>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
