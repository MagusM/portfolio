import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
    const t = useTranslations();

    return (
        <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                    {t('name')}
                </h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                    <span className="font-semibold bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] inline-block text-transparent bg-clip-text">Full stack developer</span>{' '} & {' '}
                    <span className="font-semibold text-[#3B82F6]">Team leader</span> {' '}
                    @ {' '}
                    <span className="font-semibold text-orange-500">Carwiz</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-200 mb-16">
                    {t('home.briefSummary')}
                </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                    alt="Simon Mor"
                    height={176}
                    width={176}
                    src="/avatar1.jpeg"
                    sizes="30vw"
                    priority
                    className="rounded-full filter grayscale"
                />
            </div>
        </div>
    );
}

export default Hero;