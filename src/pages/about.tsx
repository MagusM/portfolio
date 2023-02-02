import Image from 'next/image';

import Container from '@/components/Container';
import avatar from '@/../public/avatar1.jpeg';
import avatarBW from '@/../public/avatar2.jpeg';
import PureLink from '@/components/PureLink';
import { externalLinks, certificates } from '@/lib/utils/constants';
import { useTranslations } from 'next-intl';
import CertificateItem from './components/about/CertificateItem';

export default function About() {
  const t = useTranslations();
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
              {externalLinks.twitter.name}: <PureLink href={externalLinks.twitter.href} name={`@${externalLinks.twitter.userName}`} isExternal />
            </li>
            <li>
              {externalLinks.github.name}: <PureLink href={externalLinks.github.href} name={`@${externalLinks.github.userName}`} isExternal />
            </li>
            <li>
              {externalLinks.linkedin.name}: <PureLink href={externalLinks.linkedin.href} name={`@${externalLinks.linkedin.userName}`} isExternal />
            </li>
            <li>
              {externalLinks.readCV.name}: <PureLink href={externalLinks.readCV.href} name={`@${externalLinks.readCV.userName}`} isExternal />
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>{t('about.lastJob.title')}</p>
          <h3>About me</h3>
          <p>
            {t('about.longFirstPerson', { lastJob: t('about.lastJob.company')} )}
          </p>
          <h3>Education</h3>
          <p>
            {t('about.education.degree')}, {t('about.education.institute')}
          </p>
          <h3>Certifications</h3>
          {/* container for Certifications */}
          <div className="flex flex-col justify-center items-start">
            <CertificateItem {...certificates.coursera.node1} />
          </div>
          
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar1.jpeg">
              <Image
                alt="Simon Mor headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar2.jpeg">
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
