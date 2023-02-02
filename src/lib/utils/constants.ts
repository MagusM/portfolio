const meta = {
    title: 'Simon Mor – Developer, writer, creator.',
    description: `Front/backend-end developer, JavaScript and coding enthusiast, and course creator.`,
    image: 'https://simonmor.io/static/images/simon-mor.png',
    type: 'website',
};

const innerLinks = {
    home: { 
        href: '/', 
        name: 'Home' 
    },
    about: { 
        href: '/about', 
        name: 'About' 
    },
    newsletter: { 
        href: '/newsletter', 
        name: 'Newsletter' 
    },
    uses: { 
        href: '/uses', 
        name: 'Uses' 
    },
    guestbook: { 
        href: '/guestbook', 
        name: 'Guestbook' 
    },
    snippets: { 
        href: '/snippets', 
        name: 'Snippets' 
    },
    tweets: { 
        href: '/tweets', 
        name: 'Tweets' 
    },
    dashboard: {
        href: '/dashboard',
        name: 'Dashboard',
    },
    blog: {
        href: '/blog',
        name: 'Blog',
    },
    more: {
        href: '/more',
        name: 'More',
    }
};

const externalLinks = {
    github: { 
        href: 'https://github.com/MagusM', 
        name: 'GitHub',
        userName: 'MagusM',
    },
    youtube: { 
        href: 'https://www.youtube.com/channel/UCknEw7ggAYYoK4D7p3tJM6g', 
        name: 'YouTube',
        userName: 'Simon Mor',
    },
    twitter: { 
        href: 'https://twitter.com/simon_mor84', 
        name: 'Twitter',
        userName: 'simon_mor84',
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/simonmor/',
        name: 'LinkedIn',
        userName: 'simonmor84',
    },
    readCV: {
        href: 'https://read.cv/simon_mor',
        name: 'read.cv',
        userName: 'simon_mor',
    }
};

const certificates = {
    coursera: {
        node1: {
            course: 'Server-side Development with NodeJS, Express and MongoDB',
            date: 'August 6, 2019',
            from: 'Coursera',
            link: 'https://www.coursera.org/account/accomplishments/verify/W79CKGJ7AUBX',
            imgSrc: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~W79CKGJ7AUBX/CERTIFICATE_LANDING_PAGE~W79CKGJ7AUBX.jpeg'
        }
    }
};

export {
    meta,
    innerLinks, 
    externalLinks,
    certificates
};