import * as React from 'react';
import Head from "next/head";
import { externalLinks, meta } from '@/lib/utils/constants';
import { useRouter } from 'next/router';

const Header = ({customMeta}) => {
    const headerMeta = {
        ...meta,
        ...customMeta
    }
    const router = useRouter();

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={headerMeta.description} name="description" />
            <meta property="og:url" content={`https://simonmor.io${router.asPath}`} />
            <link rel="canonical" href={`https://simonmor.io${router.asPath}`} />
            <meta property="og:type" content={headerMeta.type} />
            <meta property="og:site_name" content="Simon Mor" />
            <meta property="og:description" content={headerMeta.description} />
            <meta property="og:title" content={headerMeta.title} />
            <meta property="og:image" content={headerMeta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={`@${externalLinks.twitter.userName}`} />
            <meta name="twitter:title" content={headerMeta.title} />
            <meta name="twitter:description" content={headerMeta.description} />
            <meta name="twitter:image" content={headerMeta.image} />
            {headerMeta.date && (
                <meta property="article:published_time" content={headerMeta.date} />
            )}
        </Head>
    );
}

export default Header;