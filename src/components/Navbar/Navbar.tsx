import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-zinc-800 px-4 py-2 text-zinc-300 sm:px-6 lg:px-8">
        <Link
          href={'/'}
          className="tracking flex h-12 items-center font-bold uppercase"
        >
          Next Ecommerce
        </Link>
      </nav>
      <div className="h-[64px]">{/* Navbar fade */}</div>
    </>
  );
};
