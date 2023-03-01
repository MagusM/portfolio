import { Suspense, useMemo, useState } from 'react';
import { allBlogs } from '@/../.contentlayer/generated';
import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { Post } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function Blog({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('pages/blog', { data });
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = useMemo(() => {
      const toReturn = data.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
        }
      );
      console.log({toReturn});
      return toReturn;
  }, [searchValue, data]);

  const tt = useTranslations('blog');

  /**
   * 1. query db most viewed posts to set as Most popular
   */

  return (
    <Container
      title={`${tt('title')} - Simon Mor`}
      description="Thoughts on the software industry, programming, tech, Gaming, Gear, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {tt('title')}
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {tt('description', { length: data.length })}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              {tt('mostPopular')}
            </h3>
            <BlogPost
              title="Rust Is The Future of JavaScript Infrastructure"
              summary="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
              slug="rust"
            />
            {/* <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPost
              title="Building a Design System Monorepo with Turborepo"
              summary="Manage multiple packages with a shared build, test, and release process using Turborepo, Changesets, Storybook, and more."
              slug="turborepo-design-system-monorepo"
            /> */}
          </>
        )}
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            {tt('allPosts')}
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {tt('noPostsFound')}
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  // console.log({allBlogs});
  //todo: quer dB for all blogPosts
  // const data = [allBlogs[0], allBlogs[1]];
  const data = [];

  return {
    props: {
      data
    }
  };
}
