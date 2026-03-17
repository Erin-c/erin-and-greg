export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-autumn/50 px-4 pb-14 pt-10 bg-walnut">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center text-desert">
        <p className="m-0 text-6xl tracking-[3px]  font-serif italic">E & G</p>
        <p className="m-0 font-light uppercase text-desert/50">
          Made with love · 02/27/2027
        </p>
      </div>
    </footer>
  );
}
