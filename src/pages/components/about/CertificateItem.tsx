import PureLink from "@/components/PureLink";
import Image from "next/image";

type CertificateItemProps = {
    course: string;
    date: string;
    from: string;
    link: string;
    imgSrc: string;
}

const CertificateItem = ({course, date, from, link, imgSrc}: CertificateItemProps) => {
    return (
        <div className="flex flex-col md:flex-row hover:text-red-600 dark:hover:text-yellow-300">
            {/* this is for details */}
            <div className="flex flex-col w-full md:w-2/3">
                <h5>{course}</h5>
                <p>
                    <span className="w-1/2 md:inline-block md:w-full">Date: {date}</span>
                    <PureLink className="mx-2 md:mx-0" href={link} isExternal>{from}</PureLink>
                </p>
                
            </div>
            {/* this is for cert image */}
            <div className="w-full md:w-1/3">
                <Image 
                    src={imgSrc}
                    width={300}
                    height={300}
                    alt={`${course} course certificate image`}
                />
            </div>
        </div>
    );
}

export default CertificateItem;