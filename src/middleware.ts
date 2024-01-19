
import createMiddleware from 'next-intl/middleware';
import { i18n } from '@/config/i18n.config';


export default createMiddleware(i18n);

/*export default createMiddleware({
    locales:['en','pt','fr','ar'],
    defaultLocale:'en',
    localeDetection:true
})*/

export const config = {
    matcher: ['/','/(en|pt|fr|ar)/:path*']
}

