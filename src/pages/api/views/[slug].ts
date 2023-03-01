import { BlogPostProps } from '@/components/BlogPost';
import { queryBuilder } from '@/lib/planetscale';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getBlogPostBySlug } from './utils';

export const NOT_FOUND_IN_DB_ERROR = 'request blog post not found in DB';

export async function insertOrUpdateBlogPost(post: BlogPostProps) {
  const data = await queryBuilder
    .insertInto('blogPosts')
    .values({...post})
    .onDuplicateKeyUpdate({ views: post.views + 1 })
    .execute();

  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let views = 0;
    const slug = req.query.slug.toString();

    //todo: check if post exist in table by slug, if not make an insert query  -> this way all posts clicked will be first inserted to db

    // console.log(`async function handler2 with slug: ${slug}`);
    
    //This will check of posts exists in DB
    const data = await getBlogPostBySlug(slug);

    // console.log(`views slug: ${slug}`);
    // console.log({data});

    if (!data.length) {
      const error = new Error(NOT_FOUND_IN_DB_ERROR);
      return res.status(404).json({
        message: error.message
      });
    }

    views = Number(data[0].views);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('blogPosts')
        .values({ slug, views: 1 })
        .onDuplicateKeyUpdate({ views: views + 1 })
        .execute();

      return res.status(200).json({
        total: views + 1,
      });
    }

    if (req.method === 'GET') {
      console.log('method get');
      return res.status(200).json({ total: views });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
