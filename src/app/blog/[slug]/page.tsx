import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';

async function getPostContent(contentPath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), contentPath);
    return await fs.promises.readFile(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error reading blog post from ${contentPath}:`, error);
    return "El contenido de este artículo no se ha podido cargar.";
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = await getPostContent(post.contentPath);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Inicio
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline mb-6">{post.title}</h1>
            <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-wrap">
              {content}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
