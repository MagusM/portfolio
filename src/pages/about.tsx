import Image from 'next/image';

import Container from '@/components/Container';
import avatar from '@/../public/avatar.jpg';
import avatarBW from '@/../public/avatar-bw.jpg';
import PureLink from '@/components/PureLink';
import { EDUCATION, externalLinks, innerLinks, LAST_JOB_TITLE, L_FIRST_PERSON } from '@/lib/utils/constants';

export default function About() {
  // const t = useTranslations();
  return (
    <Container title="About – Simon Mor">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <PureLink href={externalLinks.twitter.href} name={`@${externalLinks.twitter.userName}`} isExternal />
            </li>
            <li>
              GitHub: <PureLink href={externalLinks.github.href} name={`@${externalLinks.github.userName}`} isExternal />
            </li>
            <li>
              LinkedIn: <PureLink href={externalLinks.linkedin.href} name={`@${externalLinks.linkedin.userName}`} isExternal />
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>{LAST_JOB_TITLE}</p>
          <h3>About me</h3>
          <p>
            {L_FIRST_PERSON}
          </p>
          <h3>Education</h3>
          <p>
            {EDUCATION}
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Simon Mor headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Simon Mor headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
