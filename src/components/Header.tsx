import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "radix-ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-autumn/50 px-4 backdrop-blur-lg bg-white">
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="font-serif no-underline italic text-autumn text-4xl font-light"
          >
            E & G
          </Link>
        </h2>

        <div className="flex-wrap items-center gap-x-4 gap-y-1 pb-1 uppercase font-light text-base text-walnut tracking-[3px] hidden md:flex">
          <Link to="/">Our Story</Link>
          <Link to="/information">Information</Link>
          <Link to="/events">Events</Link>
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
          className="DropdownMenuContent bg-white z-60 shadow-2xl rounded-2xl mx-4 p-3 uppercase font-light tracking-[3px] w-45 text-walnut"
          hideWhenDetached
        >
          <DropdownMenu.Item className="outline-none hover:font-medium">
            <Link to="/">Our Story</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none hover:font-medium">
            <Link to="/information">Information</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none hover:font-medium">
            <Link to="/events">Events</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
