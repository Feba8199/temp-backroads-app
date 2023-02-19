import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'





export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
    {id:1, url:'https://www.twitter.com', icon:'fab fa-facebook',rel:'noreferrer'},
    {id:2, url:'https://www.twitter.com', icon:'fab fa-twitter',rel:'noreferrer'},
    {id:3, url:'https://www.twitter.com', icon:'fab fa-squarespace',rel:'noreferrer'},
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
{
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
    {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
]

export const tours = [
  {
    id:1,
    img: img1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    place: 'China',
    days: '6 days',
    cost: 'from $2100'

  },
    {
    id:2,
    img: img2,
    date: 'august 25th, 2020',
    title: 'Bali Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    place: 'Thailand',
    days: '4 days',
    cost: 'from $1100'

  },
    {
    id:3,
    img: img3,
    date: 'august 27th, 2020',
    title: 'Maldives Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    place: 'Maldive',
    days: '3 days',
    cost: 'from $1000'

  }
]