import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import Tweet from '@/components/Tweet';
import components from '@/components/MDXComponents';
import { Post } from '@/lib/types';
import { allBlogs } from '@/../.contentlayer/generated';

export default function PostPage({ post }: { post: Post }) {
  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  
  return {
    paths: allBlogs,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  // const { html, tweetIDs, readingTime } = await mdxToHtml(post.content);
  

  return {
    props: {
      post: {
        ...post
      }
    }
  };
}
