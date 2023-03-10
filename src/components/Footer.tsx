import Link from 'next/link';
import { innerLinks, externalLinks } from '@/lib/utils/constants';

import NowPlaying from '@/components/NowPlaying';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        {/* internal links */}
        <div className='flex items-start sm:justify-evenly flex-col sm:flex-row sm:col-span-2'>
          <div className="flex flex-col space-y-4">
            <FooterLink href={innerLinks.home.href} name={innerLinks.home.name} />
            <FooterLink href={innerLinks.about.href} name={innerLinks.about.name} />
            <FooterLink href={innerLinks.newsletter.href} name={innerLinks.newsletter.name} />
          </div>
          <div className="flex flex-col my-4 sm:my-0 space-y-4">
            <FooterLink href={innerLinks.uses.href} name={innerLinks.uses.name} />
            <FooterLink href={innerLinks.guestbook.href} name={innerLinks.guestbook.name} />
            <FooterLink href={innerLinks.snippets.href} name={innerLinks.snippets.name} />
            <FooterLink href={innerLinks.tweets.href} name={innerLinks.tweets.name} />
          </div>
        </div>
        {/* external links */}
        <div className="flex flex-col space-y-4">
          <FooterLink href={externalLinks.twitter.href} name={externalLinks.twitter.name} isExternal={true} />
          <FooterLink href={externalLinks.github.href} name={externalLinks.github.name} isExternal={true} />
          <FooterLink href={externalLinks.youtube.href} name={externalLinks.youtube.name} isExternal={true} />
        </div>
      </div>
    </footer>
  );
}
