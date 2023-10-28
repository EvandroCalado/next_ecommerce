import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
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
        <div className="flex items-center gap-8">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-md border px-3 py-2 uppercase duration-150 hover:bg-zinc-900">
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
