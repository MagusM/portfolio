import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Views } from '@/lib/types';
import PureLink from './PureLink';
import { NOT_FOUND_IN_DB_ERROR } from '@/pages/api/views/[slug]';
import { useState } from 'react';

export type BlogPostProps = {
  id?: number;
  image: string;
  slug: string;
  publishedAt: Date;
  title: string;
  summary: string;
  type: string;
  views: number;
  _raw?: object;
  _body?: object;
}

export default function BlogPost({ slug, title, summary }: BlogPostProps) {
  const [blogPost, setBlogPost] = useState(null);

  //todo: use kelsey here to query db
  const { data, error, isLoading } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  if (error) {
    //todo: handle error - show error div
    console.log('error was thrown');
    if (error.message === NOT_FOUND_IN_DB_ERROR) {
      console.log(`${slug} not found in DB | now creting a new obj and insert to db`);
      //todo: insert blogPost to DB and continue
    }
  }
  if (isLoading) {
    //todo: handle loading - show laoding div - make it external shared comp
    return (<div>Loading...!</div>)
  }
  // console.log('data is', {data});
  const views = data?.total || 0;

  return (
    <PureLink href={`/blog/${slug}`} className="w-full">
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 hover:text-orange-600 dark:hover:text-red-500">
            {title}
          </h4>
          <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
            {`${views ? new Number(views).toLocaleString() : '–––'} views`}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 w-[80%]">{summary}</p>
      </div>
    </PureLink>
  );
}
