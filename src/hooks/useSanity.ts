import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity';
import { heroQuery, servicesQuery, postsQuery, postQuery } from '@/lib/queries';
import { HeroContent, ServiceItem, BlogPost } from '@/types';
import { heroData as fallbackHero } from '@/data/hero';
import { servicesData as fallbackServices } from '@/data/services';
import * as LucideIcons from 'lucide-react';

export const useHero = () => {
    const [data, setData] = useState<HeroContent>(fallbackHero);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(heroQuery);
                if (result) {
                    setData(result);
                }
            } catch (err) {
                console.error('Error fetching hero data:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        // Only fetch if project ID is configured
        if (client.config().projectId) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    return { data, loading, error };
};

export const useServices = () => {
    const [data, setData] = useState<ServiceItem[]>(fallbackServices);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(servicesQuery);
                if (result) {
                    // Map icon string names to actual Lucide components
                    const mappedData = result.map((item: any) => ({
                        ...item,
                        icon: (LucideIcons as any)[item.iconName] || LucideIcons.HelpCircle
                    }));
                    setData(mappedData);
                }
            } catch (err) {
                console.error('Error fetching services data:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        if (client.config().projectId) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    return { data, loading, error };
};

export const usePosts = () => {
    const [data, setData] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(postsQuery);
                if (result) {
                    setData(result);
                }
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        if (client.config().projectId) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, []);

    return { data, loading, error };
};

export const usePost = (slug: string) => {
    const [data, setData] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(postQuery, { slug });
                if (result) {
                    setData(result);
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        if (client.config().projectId && slug) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [slug]);

    return { data, loading, error };
};
