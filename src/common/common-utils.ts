import type { Nil } from './common-types';

export const APP_URL = 'https://click-cart-vert.vercel.app/';
export const APP_TITLE = 'Click&Cart';
export const APP_DESCRIPTION = `${APP_TITLE} — это демонстрация простого полнофункционального e-commerce сайта, разработанного с использованием Next.js.`;
export const APP_REPOSITORY_URL = 'https://github.com/askh95/click-cart';

export const createMockArray = (length: number) => {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(Array.from({ length }).keys());
};

export const isNil = (value: unknown): value is Nil => {
  return value === null || value === undefined;
};
