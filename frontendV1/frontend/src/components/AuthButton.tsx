 "use server"
import Link from 'next/link';
import { getSignInUrl, getSignUpUrl, withAuth, signOut } from '@workos-inc/authkit-nextjs';

export default async function AuthButton() {
  const { user } = await withAuth();

  if (!user) {
    const signInUrl = await getSignInUrl();
    const signUpUrl = await getSignUpUrl();

    return (
      <div className="flex space-x-4">
        <Link href={signInUrl} className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Log in
        </Link>
        <Link href={signUpUrl} className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
      className="flex items-center space-x-4"
    >
      <p className="text-lg font-medium">Welcome back{user?.firstName && `, ${user?.firstName}`}</p>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
      >
        Sign out
      </button>
    </form>
  );
}
