'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

function getPostSummary(content: string): string {
  // Extract the first line/paragraph.
  return content.trim().split('\n')[0] || 'Haz clic para leer más.';
}

export default function Blog() {
  const postsWithSummary = blogPosts.map((post) => ({
    ...post,
    summary: getPostSummary(post.content),
  }));

  return (
    <section id="blog" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Blog Legal</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
            Explora artículos cortos y útiles sobre derechos del arrendador, recuperación de inmuebles, contratos y más.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsWithSummary.map((post) => (
            <Card key={post.title} className="bg-card flex flex-col rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-headline">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/90">{post.summary}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href="#contacto">Ver más artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}