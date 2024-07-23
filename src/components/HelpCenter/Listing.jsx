import faq from '../../assets/HelpCenter/faq.png';
import order from '../../assets/HelpCenter/order.png';
import account from '../../assets/HelpCenter/account.png';
import terms from '../../assets/HelpCenter/terms.png';
import advertisment from '../../assets/HelpCenter/advertisment.png';
import access_account from '../../assets/HelpCenter/access_account.png';
import community from '../../assets/HelpCenter/community.png';
import contactus from '../../assets/HelpCenter/contactus.png';
import learn from '../../assets/HelpCenter/learn.png';
import { Link } from 'react-router-dom';
export default function Example() {
  const products = [
    {
      id: 1,
      name: 'Frequently asked Question',
      href: '/',
      imageSrc: faq,
      imageAlt: 'a',
    },
    {
      id: 2,
      name: 'Orders and shipping',
      href: '/',
      imageSrc: order,
      imageAlt: 'b',
    },
    {
      id: 3,
      name: 'Account Management',
      href: '/',
      imageSrc: account,
      imageAlt: 'c',
    },
    {
      id: 4,
      name: 'Privacy Policy',
      href: '/privacy-policy',
      imageSrc: terms,
      imageAlt: 'd',
    },
    {
      id: 5,
      name: 'Promotions and discounts',
      href: '/',
      imageSrc: advertisment,
      imageAlt: 'e',
    },
    {
      id: 6,
      name: 'Accessibility Options',
      href: '/',
      imageSrc: access_account,
      imageAlt: 'f',
    },
    {
      id: 7,
      name: 'Community Forum',
      href: '/',
      imageSrc: community,
      imageAlt: 'g',
    },
    {
      id: 8,
      name: 'Contact us',
      href: '/',
      imageSrc: contactus,
      imageAlt: 'h',
    },
    {
      id: 9,
      name: 'Tutorials and Guides',
      href: '/',
      imageSrc: learn,
      imageAlt: 'i',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mt-4 text-3xl font-bold text-gray-700">General Topics</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group relative">
              <div className="aspect-h-1 aspect-w-1 h-64 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 hover:shadow-sm">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-m font-bold text-center text-gray-700 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
