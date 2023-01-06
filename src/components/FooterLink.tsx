import PureLink from "./PureLink";


export type FooterLinkProps = {
    href: string;
    name: string;
    isExternal?: boolean;
    children?: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, name, isExternal = false, ...props }) => {
    return (
        <PureLink className="footer_link" href={href} name={name} isExternal={isExternal} {...props} />
    )
}

export default FooterLink;