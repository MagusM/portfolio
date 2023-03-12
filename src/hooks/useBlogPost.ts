import fetcher from '@/lib/fetcher';
import { getBlogPostBySlug, insertBlogPost } from '@/pages/api/blog/utils';
import { NOT_FOUND_IN_DB_ERROR } from '@/pages/api/views/[slug]';
import useSWR from 'swr';

function useBlogPost(slug) {
    const checkIfBlogPostExist = async (blogPost) => {
        const res = await getBlogPostBySlug(blogPost.slug);
        if (!res) {
            await insertBlogPost();
        }
    }
    const { data, error, mutate } = useSWR(`/api/blog/${slug}`, fetcher, { revalidateOnFocus: false });

    const insertNewBlogPost = async () => {
        return await insertBlogPost();
    }

    return {
        data,
        isLoading: !error && !data,
        notExistingInDB: error && error.message === NOT_FOUND_IN_DB_ERROR,
        isError: error,
        mutate,
        insertNewBlogPost,
        checkIfBlogPostExist
    }
}

export default useBlogPost;