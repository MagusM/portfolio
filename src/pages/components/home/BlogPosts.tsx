import ArrowToRight from "@/components/ArrowToRight";
import BlogPostCard from "@/components/BlogPostCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

const BlogPosts = () => {
    const t = useTranslations('blog_posts');

    return (
        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
                {t('title')}
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
                <BlogPostCard
                    title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                    slug="style-guides-component-libraries-design-systems"
                    gradient="from-[#D8B4FE] to-[#818CF8]"
                />
                <BlogPostCard
                    title="Rust Is The Future of JavaScript Infrastructure"
                    slug="rust"
                    gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                />
                <BlogPostCard
                    title="Past, Present, and Future of React State Management"
                    slug="react-state-management"
                    gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                />
            </div>
            <Link
                href="/blog"
                className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
                <>
                    {t('readAll')}
                    <ArrowToRight />
                </>
            </Link>
        </>
    );
}

export default BlogPosts;