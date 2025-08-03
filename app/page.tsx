'use client'; // Needed for useSession hook

import Link from 'next/link';
import { useSession } from 'next-auth/react'; // Add this import

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'My First Blog Post',
    excerpt: 'This is a sample excerpt for the first post.',
    date: '2025-08-03',
  },
  // Add more mock posts here
];

export default function Home() {
  console.log('💠', );
  const { data: session, status } = useSession(); // status can be 'loading', 'authenticated', or 'unauthenticated'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Session-based greeting */}
      <div className="mb-8">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : session ? (
          <p className="text-xl">Welcome, {session.user?.name}! <Link href="/api/auth/signout" className="text-blue-500">Sign out</Link></p>
        ) : (
          <p className="text-xl">Please <Link href="/login" className="text-blue-500">sign in</Link> to access full features.</p>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-8">My Next.js Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}