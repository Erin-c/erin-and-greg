import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "radix-ui";

const MenuItems: { name: string; to: string }[] = [
  { name: "Our Story", to: "/" },
  { name: "Events", to: "/events" },
  { name: "Registry", to: "/registry" },
  { name: "Travel", to: "/travel" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-autumn/50 px-4 backdrop-blur-lg bg-white">
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 shrink-0 font-semibold tracking-tight">
          <Link
            to="/"
            className="font-serif no-underline italic text-autumn text-4xl font-light"
          >
            E & G
          </Link>
        </h2>

        <div className="flex-wrap items-center gap-x-4 gap-y-1 pb-1 uppercase font-light text-sm text-walnut tracking-[3px] hidden md:flex ">
          {MenuItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-autumn">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
}

const Menu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options">
          <i className="bi bi-list text-2xl border-autumn/50"></i>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent bg-white z-60 shadow-2xl rounded-2xl mx-4 p-3 uppercase font-light tracking-[3px] w-60 text-walnut"
          hideWhenDetached
        >
          {MenuItems.map((item) => (
            <DropdownMenu.Item
              key={item.to}
              className="outline-none hover:text-autumn"
            >
              <Link to={item.to}>{item.name}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
