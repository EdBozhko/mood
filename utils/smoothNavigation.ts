import { ChangeEvent } from 'react';
import smoothScroll from 'smoothscroll-polyfill';

export function smoothNavigation(target: HTMLElement, e: any, offset: number, callBack?: void) {
  e && e.preventDefault();
  smoothScroll.polyfill();

  const fixedOffset = offset.toFixed();
  const onScroll = function () {
    if (window.pageYOffset.toFixed() === fixedOffset) {
      window.removeEventListener('scroll', onScroll);
      callBack;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY + offset,
    behavior: 'smooth',
  });
}
