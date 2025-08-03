import { auth } from '../../../auth'; // Adjust path
import { notFound, redirect } from 'next/navigation';

// Mock data (in a real app, fetch from API or file)
const posts = {
  '1': {
    title: 'My First Blog Post',
    content: 'Full content here. You can use Markdown or rich text.',
    date: '2025-08-03',
  },
};

interface Params {
  params: { id: string };
}

export default async function PostPage({ params }: Params) {
  console.log('🌺', );
  const session = await auth();
  if (!session?.user) {
    redirect('/login'); // Or throw an error
  }

  const { id } = await params;
  const post = posts[id as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <p>{post.content}</p>
      <p>Signed in as: {session.user?.name}</p>
    </main>
  );
}