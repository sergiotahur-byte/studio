import { blogPosts } from '@/lib/blog-posts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function getPostSummary(content: string): string {
  return content.trim().split('\n')[0] || 'Haz clic para leer más.';
}


export default function BlogIndexPage() {
    const postsWithSummary = blogPosts.map((post) => ({
    ...post,
    summary: getPostSummary(post.content),
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Blog Legal</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
                        Artículos y guías sobre derecho inmobiliario en Colombia.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <Button variant="outline" asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a Inicio
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
