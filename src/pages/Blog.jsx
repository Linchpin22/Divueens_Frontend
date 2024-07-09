import react from 'react';
import { Link } from 'react-router-dom';

const blog_list = [
    {
        title: "Do consectetur",
        titleColor: "blue-500",
        imgSrc: "https://i.pinimg.com/originals/75/53/5b/75535b41afb92264d8fbf0a30f1a4ca5.jpg",
        text: "Aliqua Irure Tempor Lorem Occaecat Volup",
        info: "Dec 22, 2022 • 10 mins read",
    },
    {
        title: "Consequat labore",
        titleColor: "green-500",
        imgSrc: "https://blackhealthmatters.com/wp-content/uploads/2014/01/AdobeStock_251064401.jpeg",
        text: "Commodo Deserunt Ipsum Occaecat Qui",
        info: "Nov 20, 2022 • 10 mins read",
    },
    {
        title: "Laboris nulla",
        titleColor: "purple-500",
        imgSrc: "https://www.richbeganyphoto.com/wp-content/uploads/2017/04/BrushKit2-060-11x14.jpg",
        text: "Deserunt Occaecat Qui Amet Tempor Dolore",
        info: "Nov 13, 2022 • 3 mins read",
    },
    {
        title: "Do consectetur",
        titleColor: "blue-500",
        imgSrc: "https://i.pinimg.com/736x/d9/f4/85/d9f48595c43a8a109c2100e0be7364db.jpg",
        text: "Incididunt Sint Eiusmod Dolore Non",
        info: "Oct 17, 2022 • 5 mins read",
    },
    {
        title: "Consequat labore",
        titleColor: "green-500",
        imgSrc: "https://www.austinclinic.com.au/wp-content/uploads/2023/08/How-to-Pair-Your-Skincare-Ingredients.jpg",
        text: "Ullamco in Laborum do eu Fugiat",
        info: "Oct 10, 2022 • 10 mins read",
    },
    {
        title: "Laboris nulla",
        titleColor: "purple-500",
        imgSrc: "https://i.pinimg.com/originals/11/e8/7e/11e87ec1ca6479adc77a82dded3557b6.jpg",
        text: "Amet Est Qui Pariatur Ipsum Magna ut Magna",
        info: "Sep 19, 2022 • 8 mins read",
    },
]

const BlogHome = () => {
    return (
        <>
            <div className="max-w-xll mx-8 my-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img className="w-full h-80 object-cover" src="https://files.thehandbook.com/uploads/2021/05/skincare-1.jpg" alt="Blog Post Image" />
                    <div className="absolute inset-0 "></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-2xl font-bold text-white">Tempor Consectetur Est Elit</h2>
                        <p className="text-gray-300">Consequuntur ex co</p>
                        <p className="text-gray-300">Dec 24, 2022 • 5 min read</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-[#4c0519] text-center">Our Latest Highlights</h1>
                <h2 className="text-l  text-gray-500 text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blog_list.map((item, i) =>
                        <Link key={i} to="/">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                            <img className="w-full h-48 object-cover" src={item.imgSrc} alt={`Blog Post ${i}`} />
                            <div className="p-6">
                                <span className={`text-sm text-${item.titleColor} font-semibold`}>{item.title}</span>
                                <h2 className="text-lg font-bold text-gray-900 my-2">{item.text}</h2>
                                <p className="text-sm text-gray-600">{item.info}</p>
                            </div>
                        </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
};

export default BlogHome;