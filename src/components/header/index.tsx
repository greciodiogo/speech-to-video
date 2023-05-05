import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@theme';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderContainer, HeaderWrapper } from './styled';

export const Header: React.FC = () => {
    // const {} = useTheme();
    const { t } = useTranslation();
    const [lang, changeLang] = useState<'pt' | 'en'>('pt');

    const changeLanguage = () => {
        alert('yha');
        if (lang === 'pt') {
            changeLang('en');
        } else {
            changeLang('pt');
        }
    };

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Image
                    src="/icons/logo-icon.svg"
                    alt={t`common:name`}
                    width="102"
                    height="42"
                />
                <h2>{t`common:name`}</h2>
            </HeaderContainer>
            {/* <Link href={`/${lang}`} locale={lang}>
                <a onClick={changeLanguage}>
                    <FontAwesomeIcon icon={faGlobe} /> {t`common:language`}
                </a>
            </Link> */}
        </HeaderWrapper>
    );
};
