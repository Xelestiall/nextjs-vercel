//nextfont hosts font files with other static assets so that there are no additional network requests.
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Ada beberapa variable front yang gaperlu di specify weight nya
export const inter = Inter({ subsets: ['latin'] });
// Ada juga yang perlu
export const lusitana = Lusitana({  weight: ['400', '700'], subsets: ['latin'] });

