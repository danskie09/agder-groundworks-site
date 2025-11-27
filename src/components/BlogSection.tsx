import { usePosts } from '@/hooks/useSanity';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogSection = () => {
    const { data: posts, loading } = usePosts();

    // Show only the latest 3 posts
    const latestPosts = posts.slice(0, 3);

    if (loading) {
        return (
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <p>Loading news...</p>
                </div>
            </section>
        );
    }

    if (posts.length === 0) {
        return null; // Don't show section if no posts
    }

    return (
        <section id="blog" className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                            Latest News
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Updates from our projects and company news.
                        </p>
                    </div>
                    <Link to="/blog">
                        <Button variant="outline" className="group">
                            View All News
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
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
                                    <CardTitle className="font-heading text-xl group-hover:text-accent transition-colors line-clamp-2">
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
            </div>
        </section>
    );
};

export default BlogSection;
