const LAST_JOB_TITLE = 'Team Leader & Full Stack Software Developer';
const L_THIRD_PERSON = `Simon Mor is the development team leader at {carwiz} 
    where he helps the product and the team build a better web app and leads the Next.js app forward. 
    He is an open-source contributor. An educator, writer, and speaker, Simon has created
    courses on React, Next.js, and web development.`;
const L_FIRST_PERSON = `Hey, I'm Simon. I'm the development team leader at {carwiz} 
    where I'm helping the product and the team build a better web app and leads the Next.js app forward. 
    I'm passionate about software developemnt frontend AND backend. an open-source contributor. An educator, writer, and speaker, 
    I have created courses on React, Next.js, and web development.`;
const S_THIRD_PERSON = `Simon Mor is a software developer and team leader at {carwiz} Lead the Next.js app forward.`;
const S_FIRST_PERSON = `Hey, I'm Simon. I'm a software developer and team leader at {carwiz} Leading the Next.js app forward.`;
const EDUCATION = 'BSc in Chemistry engineering';

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
};

const externalLinks = {
    github: { 
        href: 'https://github.com/MagusM', 
        name: 'GitHub',
        userName: 'MagusM',
    },
    youtube: { 
        href: 'https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw', 
        name: 'YouTube',
        userName: 'Simon Mor',
    },
    twitter: { 
        href: 'https://twitter.com/simon_mor84', 
        name: 'Twitter',
        userName: 'simon_mor84',
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/simonmor84',
        name: 'LinkedIn',
        userName: 'simonmor84',
    },
};

export { 
    LAST_JOB_TITLE,
    L_THIRD_PERSON,
    L_FIRST_PERSON,
    S_THIRD_PERSON,
    S_FIRST_PERSON,
    EDUCATION,
    innerLinks, 
    externalLinks 
};