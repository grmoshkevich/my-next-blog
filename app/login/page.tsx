'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
  console.log('🎐', );
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  );
}