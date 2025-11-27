import { usePosts } from '@/hooks/useSanity';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogPage = () => {
    const { data: posts, loading } = usePosts();

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow pt-24 pb-16">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                            News & Updates
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Read about our latest projects, industry insights, and company announcements.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.slug.current} to={`/blog/${post.slug.current}`}>
                                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 shadow-md overflow-hidden">
                                        <div className="relative h-48 overflow-hidden">
                                            {post.mainImage ? (
                                                <img
                                                    src={post.mainImage}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                <Calendar className="w-4 h-4" />
                                                {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Recent'}
                                            </div>
                                            <CardTitle className="font-heading text-xl group-hover:text-accent transition-colors">
                                                {post.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="line-clamp-3">
                                                {post.excerpt}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;
