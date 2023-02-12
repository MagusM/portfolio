import { NextIntlProvider } from 'next-intl';
import enMessages from '@/locales/en-US.json';

const MessagesProvider = ({
    locale = 'en-US',
    children,
}: React.PropsWithChildren<any>) => {
    console.log(`locale: ${locale}`);
    let messages = null;
    if (locale === 'he') {
        //todo: import he messages
    } else {
        messages = enMessages;
    }
    return (
        <NextIntlProvider
            messages={messages as any}
            locale={locale}
        >
            {children}
        </NextIntlProvider>
    );
};

export default MessagesProvider;