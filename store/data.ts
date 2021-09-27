import Slide_1 from '../pagesLayout/Mood/assets/static/slide_1.jpg';
import Slide_2 from '../pagesLayout/Mood/assets/static/slide_2.png';
import Slide_3 from '../pagesLayout/Mood/assets/static/slide_3.jpg';
import Slide_4 from '../pagesLayout/Mood/assets/static/slide_4.jpg';
import Slide_5 from '../pagesLayout/Mood/assets/static/slide_5.png';
import Slide_6 from '../pagesLayout/Mood/assets/static/slide_6.png';

export const data = {
  mood_page: {
    title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
    metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
    h1: 'Mood - студія дизайну, яка допоможе створити не тільки зовнішню красу, але і Ваш внутрішній настрій. Наша спеціалізація - дизайн інтер’єрів, архітектурне проектування, ландшафтний та технічний дизайн, а також ми надаємо комплекс послуг.',
    slides: [
      { link: '/stages', src: Slide_1, alt: 'послуга - дизайн інтер’єру', blackout: 0.5, heading: 'choose your design', title: 'дизайн інтер’єру', subtitle: 'дізнатись більше' },
      { link: '/stages', src: Slide_2, alt: 'послуга - архітектурне проектування', blackout: 0.45, heading: 'choose your design', title: 'архітектурне проектування', subtitle: 'дізнатись більше' },
      { link: '/stages', src: Slide_3, alt: 'послуга - ландшафтний дизайн', blackout: 0.5, heading: 'choose your design', title: 'ландшафтний дизайн', subtitle: 'дізнатись більше' },
      { link: '/stages', src: Slide_4, alt: 'послуга - технічний дизайн', blackout: 0.4, heading: 'choose your design', title: 'технічний дизайн', subtitle: 'дізнатись більше' },
      { link: '/stages', src: Slide_5, alt: 'послуга - комплекс послуг', blackout: 0.35, heading: 'choose your design', title: 'комплекс послуг', subtitle: 'дізнатись більше' },
      { link: '/stages', src: Slide_6, alt: 'дизайн, який створює настрій', blackout: 0.2, heading: '', title: 'дизайн, який створює настрій', subtitle: 'замовити проект' },
    ],
  },
};
