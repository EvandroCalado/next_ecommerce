import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-zinc-100 px-4 py-2 text-zinc-900 shadow-2xl sm:px-6 lg:px-8">
        <Link
          href={'/'}
          className="tracking flex h-12 items-center font-bold uppercase"
        >
          Next Ecommerce
        </Link>
        <div className="flex items-center gap-8">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-md bg-indigo-600 px-3 py-2 uppercase text-white duration-150 hover:bg-indigo-700">
                Entrar
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
      <div className="h-[64px]">{/* Navbar fade */}</div>
    </>
  );
};
