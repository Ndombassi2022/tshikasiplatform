import { getDisctionaryUserClient } from '@/app/dictionaries/default-dictionary-use-client';

import { Locale } from '@/config/i18n.config';
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export function ChangeLinguage({lang}: {lang: Locale}) {
    const dictionary = getDisctionaryUserClient(lang)
    const pathname = usePathname();
   // const router = useRouter();
    return(
        <select>
            <option value="" >{dictionary.language.english}</option>
            <option value="" >{dictionary.language.portuguese}</option>
            <option value="" >{dictionary.language.french}</option>
            <option value="" >{dictionary.language.arabic}</option>
        </select>
    )
}