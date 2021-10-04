import theme from '@themeConfigs/theme';
//==========mood
import Slide_1 from '../pagesLayout/Mood/assets/static/slide_1.jpg';
import Slide_2 from '../pagesLayout/Mood/assets/static/slide_2.png';
import Slide_3 from '../pagesLayout/Mood/assets/static/slide_3.jpg';
import Slide_4 from '../pagesLayout/Mood/assets/static/slide_4.jpg';
import Slide_5 from '../pagesLayout/Mood/assets/static/slide_5.png';
import Slide_6 from '../pagesLayout/Mood/assets/static/slide_6.png';
//==========portfolio
import { Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio } from '../pagesLayout/Portfolio/components/Gallery';
//==========stages
// import stagesBackgroundImg from './assets/static/stages.jpg';
import Stage_1 from '../pagesLayout/Stages/assets/static/stage_1.png';
import Stage_2 from '../pagesLayout/Stages/assets/static/stage_2.jpg';
import Stage_3 from '../pagesLayout/Stages/assets/static/stage_3.png';
import Stage_4 from '../pagesLayout/Stages/assets/static/stage_4.jpg';
import Stage_5 from '../pagesLayout/Stages/assets/static/stage_5.png';
import stagesCallToActionImg from '../pagesLayout/Stages/assets/static/callToAction.jpg';
//==========about
import aboutBackgroundImg from '../pagesLayout/About/assets/static/about.png';
import AboutCallToActionImg from '../pagesLayout/About/assets/static/callToAction.jpg';
import Team from '../pagesLayout/About/assets/static/team.jpg';
import TeamMember_1 from '../pagesLayout/About/assets/static/team_member_1.jpg';
import TeamMember_2 from '../pagesLayout/About/assets/static/team_member_2.jpg';
import TeamMember_3 from '../pagesLayout/About/assets/static/team_member_3.jpg';
import TeamMember_4 from '../pagesLayout/About/assets/static/team_member_4.jpg';
import TeamMember_5 from '../pagesLayout/About/assets/static/team_member_5.jpg';
import TeamMember_6 from '../pagesLayout/About/assets/static/team_member_6.jpg';
import TeamMember_7 from '../pagesLayout/About/assets/static/team_member_7.jpg';
//==========contacts
import contactsBackgroundImg from '../pagesLayout/Contacts/assets/static/contacts.jpg';
//==========error

//==========landing
import Call from '../pagesLayout/Landing/assets/static/call-k.svg';
import Dreams from '../pagesLayout/Landing/assets/static/dreams-k.svg';
import Enjoy from '../pagesLayout/Landing/assets/static/enjoy.svg';

export const data = {
  mood_page: {
    seo: {
      title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
      metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
    },
    page: {
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
  },
  portfolio_page: {
    seo: {
      title: 'Портфоліо | mood-design.com.ua',
      metaDescriptionContent: 'Знайдіть своє натхнення у наших роботах.',
    },
    page: {
      h1: 'Mood - наше портфоліо. Знайдіть своє натхнення поміж наших робіт.',
      title: 'портфоліо',
      subtitle: 'знайдіть своє натхнення',
      galleries: [Bathroom, Bedroom1, Bedroom2, DressingRoom, Facade, Guest1, Guest2, Hallway, Kitchen, Office, Patio],
    },
  },
  stages_page: {
    seo: {
      title: 'Етапи роботи | mood-design.com.ua',
      metaDescriptionContent: 'Ми чітко плануємо та продумовуємо кожен рух задля забеспечення найкращого результату.',
    },
    page: {
      h1: 'Mood - кожен етап нашої співпраці ретельно зважений та продуманих, щоб реалізувати Ваші найсміливіші фантазії.',
      title: 'етапи роботи',
      subtitle: 'індивідуальний підхід від концепції до реалізації',
      blackout: 0.45,
      // backgroundImg: stagesBackgroundImg,
      backgroundImg: '',
      stages: [
        {
          src: Stage_1,
          alt: 'етап - планування та розробка концепту',
          number: '01',
          title: 'планування та розробка концепту',
          description:
            'Заповнюємо технічне завдання, виходячи з ваших побажань, фіксуємо важливі складові майбутнього інтер’єру, усі ваші вподобання по кольорах, функціональних призначеннях, меблюванню і оздоблювальних матеріалів.',
          textColor: theme.colors.brown,
          backgroundColor: theme.colors.beige,
        },
        {
          src: Stage_2,
          alt: 'етап - дизайн та розробка',
          number: '02',
          title: 'планування',
          description:
            'Виходячи з технічного завдання, пропонуємо кілька варіантів планувань, обговорюємо плюси і мінуси кожного варіанту і погоджуємо той, що найбільше підходить вам. Вивчаємо планування у 2D реалізації.',
          textColor: theme.colors.grey,
          backgroundColor: theme.colors.orange,
        },
        {
          src: Stage_3,
          alt: 'етап - креслення та документація',
          number: '03',
          title: 'візуалізація',
          description: 'Розробляємо фотореалістичні зображення готового інтер’єру зі всіма меблями і опрацьованими деталями.',
          textColor: theme.colors.beige,
          backgroundColor: theme.colors.brown,
        },
        {
          src: Stage_4,
          alt: 'етап - координація і контроль',
          number: '04',
          title: 'креслення та документація',
          description: 'Презентуємо повний пакет документів, докладну інструкцію з переліком всього необхідного для реалізації об’єкта.',
          textColor: theme.colors.grey,
          backgroundColor: theme.colors.azure,
        },
        {
          src: Stage_5,
          alt: 'етап - фінальні штрихи',
          number: '05',
          title: 'реалізація проекту',
          description:
            'Бригада будівельників, яку Ви оберете, здійснює усі будівельні та оздоблювальні роботи, суворо дотримуючись узгодженого проекту. Дизайнер забезпечує повну комплектацію об’єкта.',
          textColor: theme.colors.beige,
          backgroundColor: theme.colors.grey,
        },
      ],
      callToAction: {
        href: '/portfolio',
        blackout: 0.5,
        title: 'знайди своє натхнення',
        subtitle: 'перейти до портфоліо',
        src: stagesCallToActionImg,
        alt: 'перейти до портфоліо',
      },
    },
  },
  about_page: {
    seo: {
      title: 'Про нас | mood-design.com.ua',
      metaDescriptionContent: 'MOOD - наш досвід та пристрасть створить Ваш настрій та комфорт!',
    },
    page: {
      h1: 'Mood - наш дизайн створить Ваш настрій.',
      title: 'про нас',
      subtitle: 'розробляємо дизайн, який створює настрій',
      backgroundImg: aboutBackgroundImg,
      blackout: 0.18,
      callToAction: {
        href: '/portfolio',
        blackout: 0.5,
        title: 'знайди своє натхнення',
        subtitle: 'перейти до портфоліо',
        src: AboutCallToActionImg,
        alt: 'перейти до портфоліо',
      },
      textBlocks: {
        block_1: {
          text_1:
            'MOOD design studio – це сучасна архітектурно-дизайнерська компанія з комплексним підходом, націлена на те, щоб клієнт був задоволений нашою роботою на всі 100%.<br/><br/>Ми – практики.<br/><br/>Наша історія почалась ще у 2007-му році.<br/><br/>Завдяки професійній діяльності у покрівельному та віконному бізнесі, ми неодноразово співпрацювали з дизайнерами, архітекторами та виконробами, реалізуючи масштабні та цікаві проекти.<br/><br/>Наша команда зростала професійно, компанія ставала успішнішою. Невдовзі, завдяки кваліфікованим інженерам та проектувальникам, ми змогли самостійно розробляти та реалізовувати власні проекти.<br/><br/>Коли штат працівників збільшився втричі, ми прийняли рішення розділити наші напрями діяльності, відокремивши покрівельну, віконну та архітектурно-дизайнерську справи.<br/><br/>Тепер раді повідомити, що ми відкриваємо ще один офіс, в якому професійно та повноцінно зможемо надавати послуги з інтер’єрного, ландшафтного та технічного дизайну, а також архітектурного проектування.<br/><br/>14 років досвіду дають нам можливість бачити потребу клієнта конкретно та в цілому, реалізовувати її якісно, наперед враховуючи кожен нюанс при проектуванні, розуміючи, як робота має бути виконана майстрами та спеціалістами.<br/><br/>Наша місія – надати максимально якісну послугу, в якій наші клієнти отримають комплексне рішення, де кожна деталь буде функціональною та надійною, приноситиме естетичне задоволення та почуття комфорту і буде зручною у користуванні.<br/><br/>У наших проектах Ви отримаєте неповторний, індивідуальний, інноваційний та сучасний стиль.<br/><br/>MOOD – дизайн, який створює настрій.',
        },
      },
      photoBlock: Team,
      team: [
        { name: 'Дьопйош Юрій', photoSrc: TeamMember_1, telephone: '', position: 'засновник компанії' },
        { name: 'Зеленюк Ірина', photoSrc: TeamMember_2, telephone: '', position: 'арт-директор, дизайнер інтер’єрів' },
        { name: 'Дьопйош Світлана', photoSrc: TeamMember_3, telephone: '', position: 'ландшафтний дизайнер' },
        { name: 'Бистряник Василь', photoSrc: TeamMember_4, telephone: '', position: 'інженер, точні розрахунки та кошторис матеріалів' },
        { name: 'Стегура Віктор', photoSrc: TeamMember_5, telephone: '', position: 'менеджер-консультант по всім видам покрівельних матеріалів' },
        { name: 'Качур Василь', photoSrc: TeamMember_6, telephone: '', position: 'інженер-геодезист' },
        { name: 'Шелепець Андрій', photoSrc: TeamMember_7, telephone: '', position: 'менеджер-консультант підьємно-розсувних систем, панорамних вікон, маркізам' },
      ],
    },
  },
  contacts_page: {
    seo: {
      title: 'Контакти | mood-design.com.ua',
      metaDescriptionContent: 'Наші спеціалісти з готовністю дадуть відповіді на всі Ваші запитання.',
    },
    page: {
      h1: 'Mood - наші дизайнери з готовністю дадуть відповіді на всі Ваші питання.',
      title: 'контакти',
      subtitle: 'давайте обговоримо Ваш дизайн',
      blackout: 0.1,
      // backgroundImg: contactsBackgroundImg,
      backgroundImg: '',
      telephoneBlock: {
        title: 'Зателефонуйте нам',
        telephoneHref: '+380972577591',
        telephone: '+38 097 257 75 91',
      },
    },
  },
  error_page: {
    seo: {
      title: '404 | mood-design.com.ua',
      metaDescriptionContent: 'Х’юстон, у нас проблема...',
    },
    page: {
      title: '404',
      subtitle: 'Х’юстон, у нас проблема...',
    },
  },
  landing_page: {
    seo: {
      title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
      metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
    },
    page: {
      h1: 'Mood - студія дизайну, яка допоможе створити не тільки зовнішню красу, але і Ваш внутрішній настрій. Наша спеціалізація - дизайн інтер’єрів, архітектурне проектування, ландшафтний та технічний дизайн, а також ми надаємо комплекс послуг.',
      title: 'mood',
      subtitle: 'реалізуй свої мрії',
      telephoneBlock: {
        title: 'Зателефонуйте нам',
        telephoneHref: '+380972577591',
        telephone: '+38 097 257 75 91',
      },
      stepsList: [
        {
          imgUrl: Call,
          description: 'ЗАТЕЛЕФОНУЙТЕ НАМ АБО ЗАЛИШІТЬ СВОЇ КОНТАКТИ',
        },
        {
          imgUrl: Dreams,
          description: 'РОЗКАЖІТЬ НАМ СВОЇ МРІЇ, ІДЕЇ ТА ФАНАТАЗІЇ',
        },
        {
          imgUrl: Enjoy,
          description: 'НАСОЛОДЖУЙТЕСЬ РЕЗУЛЬТАТОМ',
        },
      ],
    },
  },
};
