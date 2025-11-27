import { useParams } from 'react-router-dom';
import { usePost } from '@/hooks/useSanity';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PortableText } from '@portabletext/react';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { client, urlFor } from '@/lib/sanity';

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(800).fit('max').auto('format').url()}
                    className="my-8 rounded-lg w-full"
                />
            );
        }
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const { data: post, loading } = usePost(slug || '');

    if (loading) return <div className="pt-32 text-center">Loading...</div>;
    if (!post) return <div className="pt-32 text-center">Post not found</div>;

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow pt-24 pb-16">
                <article className="container-custom max-w-3xl">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Recent'}
                            </span>
                            {post.author && (
                                <span className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {post.author}
                                </span>
                            )}
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                            {post.title}
                        </h1>
                        {post.mainImage && (
                            <img
                                src={post.mainImage}
                                alt={post.title}
                                className="w-full h-[400px] object-cover rounded-xl shadow-md mb-8"
                            />
                        )}
                        {post.excerpt && (
                            <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-accent pl-4">
                                {post.excerpt}
                            </p>
                        )}
                    </div>

                    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent prose-img:rounded-xl">
                        <PortableText value={post.body} components={ptComponents} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
