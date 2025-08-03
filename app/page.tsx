import Link from 'next/link';

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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