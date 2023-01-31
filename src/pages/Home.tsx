import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import BlogPostCard from '@/components/BlogPostCard';
import Subscribe from '@/components/Subscribe';
import VideoCard from '@/components/VideoCard';
import ArrowToRight from '@/components/ArrowToRight';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useTranslations } from 'next-intl';

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<HomeProps> = (props) => {
    const t = useTranslations();
    
    return (
        <Suspense fallback={<div>Index page coming right up!</div>}>
            <Container>
                <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
                    {/* todo: add Hero */}
                    {/* todo: add BlogPosts */}
                    {/* todo: add Learn */}
                    {/* <span className="h-16" /> */}
                    {/* todo: add Subscribe */}
                </div>
            </Container>
        </Suspense>
    );
};

//todo: is needed ?
const getStaticProps = async (context) => {
    const locale = context.locale || context.defaultLocale;
    console.log(locale);

    return {
        props: {
            
        }
    };
};

export {
    Home,
    getStaticProps
};