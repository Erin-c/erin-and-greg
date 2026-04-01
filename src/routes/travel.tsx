import { createFileRoute } from "@tanstack/react-router";

const importantLocations: {
  name: string;
  description: string;
  address: string;
  website?: string;
}[] = [
  {
    name: "Swallow's Eve",
    description: "Location of the ceremony and reception",
    address: "1411 Lower Crabapple Rd, Fredericksburg, TX 78624",
    website: "https://www.swallowseve.com/",
  },
  {
    name: "Austin Airport",
    description: "Austin-Bergstrom International Airport (AUS)",
    address: "3600 Presidential Blvd, Austin, TX 78719",
  },
  {
    name: "Hill Country Herb Garden Lodging",
    description:
      "Hotel accommodations with shuttle service to the venue on the day of the wedding",
    address: "405 Whitney St, Fredericksburg, TX 78624",
    website: "https://www.hillcountryherbgarden.com/",
  },
  {
    name: "Fredericksburg Inn & Suites",
    description:
      "Hotel accommodations with shuttle service to the venue on the day of the wedding",
    address: "201 South Washington, Fredericksburg, TX 78624",
    website: "https://www.fredericksburg-inn.com/",
  },
];

export const Route = createFileRoute("/travel")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col page-wrap px-4 py-12 justify-center items-center gap-6 bg-cream">
      <section className="flex flex-col items-center rounded-2xl p-6 sm:p-8 w-full">
        <span className="font-serif text-6xl text-walnut italic">
          Travel & Accommodations
        </span>
        <p className="mt-4 text-base text-walnut max-w-200">
          We are so excited to celebrate with you! Below is some information to
          help you plan your trip. If you have any questions, please don't
          hesitate to reach out.
          <br />
          <br />
          If you're flying in, the closest airport is Austin-Bergstrom
          International Airport (AUS).
          <br />
          <br />
          On the day of the wedding, we will have shuttles running from the
          hotels listed here to the venue. We will share more information about
          shuttle schedule as we get closer to the date.
        </p>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full sm:px-20 px-10">
        {importantLocations.map((location) => (
          <div className="flex flex-col gap-2 items-center rounded-2xl p-6 w-full border border- text-autumn/50 justify-between">
            <span className="text-2xl text-autumn">{location.name}</span>
            <div className="text-chestnut font-serif italic break-keep max-w-80 text-center">
              {location.description}
            </div>
            <p className="text-base text-walnut">{location.address}</p>
            {location.website && (
              <a
                href={location.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-autumn hover:underline"
              >
                {location.website}
              </a>
            )}
          </div>
        ))}
      </section>
      <div className="w-full px-10">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1LFA4O9vkEsnY_XbqOCM_zEPpLSqJO5g&ehbc=2E312F"
          className="w-full h-140 sm:h-160 rounded-xl border border-walnut"
          loading="lazy"
          title="Wedding Map"
        ></iframe>
      </div>
    </div>
  );
}
