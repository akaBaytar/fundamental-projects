import img1 from '/images/tour-1.jpeg';
import img2 from '/images/tour-2.jpeg';
import img3 from '/images/tour-3.jpeg';
import img4 from '/images/tour-4.jpeg';
import img5 from '/images/tour-5.jpeg';
import img6 from '/images/tour-6.jpeg';

export const PageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const SocialLinks = [
  { id: 1, href: 'https://github.com/akaBaytar', icon: 'fab fa-github' },
  { id: 2, href: 'https://www.linkedin.com/in/akabaytar', icon: 'fab fa-linkedin' },
  { id: 3, href: 'https://www.twitter.com/akabaytar', icon: 'fab fa-x-twitter' },
];

export const OurServices = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, accusamus.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Possimus laboriosam vero. Quos, cupiditate eum mollitia eaque deleniti itaque molestiae.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Exercitationem accusantium consequatur animi adipisci non, hic expedita dolorum, inventore cum laborum officia.',
  },
  {
    id: 4,
    icon: 'fas fa-hippo fa-fw',
    title: 'cultural immersion',
    text: 'Integer porttitor non justo vel mollis. Integer ac tempor libero. Aliquam eget velit quam.',
  },
  {
    id: 5,
    icon: 'fas fa-kitchen-set fa-fw',
    title: 'culinary adventures',
    text: 'Etiam metus quam, ultricies et volutpat in, placerat non erat. Pellentesque et risus lacinia, ornare.',
  },
  {
    id: 6,
    icon: 'fas fa-leaf fa-fw',
    title: 'eco-friendly innovations',
    text: 'Maxime minus obcaecati velit repellat eveniet ut alias quos vero quasi asperiores.',
  },
];

export const OurTours = [
  {
    id: 1,
    img: img1,
    date: 'August 26th, 2024',
    title: 'Tibet Adventure',
    description:
      'Cras at erat aliquam, sagittis ipsum quis, efficitur nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: img2,
    date: 'October 1th, 2024',
    title: 'Best Of Java',
    description:
      'Proin consectetur ex mi, vulputate bibendum lectus ultricies posuere. Phasellus vel nisi feugiat mauris convallis dignissim id quis lacus.',
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: img3,
    date: 'September 15th, 2024',
    title: 'Explore Hong Kong',
    description:
      'Nunc vitae ex ut quam auctor tincidunt quis vel nisl. Fusce eu turpis ex. Vivamus lobortis quam sed ex eleifend sagittis',
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: img4,
    date: 'December 5th, 2024',
    title: 'Kenya Highlights',
    description:
      'Fusce malesuada imperdiet risus, at fringilla ipsum. Sed scelerisque risus ac diam lobortis, ac ultrices odio sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    img: img5,
    date: 'July 8th, 2024',
    title: 'Safari Adventure',
    description:
      'Vestibulum mattis rhoncus nisl, non euismod dolor eleifend sit amet. Suspendisse pharetra eros non felis dapibus dignissim. Nam odio justo, fringilla sed massa luctus, ullamcorper tincidunt lorem.',
    location: 'South Africa',
    duration: 8,
    cost: 3300,
  },
  {
    id: 6,
    img: img6,
    date: 'September 24th, 2024',
    title: 'Timeless Beauty',
    description:
      'Vivamus risus sem, consectetur sit amet ultrices sit amet, lacinia et leo. Morbi sit amet massa ornare, ornare odio id, sollicitudin dui. Nullam luctus augue in augue varius tincidunt. Morbi',
    location: 'India',
    duration: 5,
    cost: 900,
  },
];
