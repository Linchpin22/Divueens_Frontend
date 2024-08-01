const BlogComponent = () => {
  return (
    <div className="flex justify-center items-center max-h-4xl mt-4">
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('https://blackhealthmatters.com/wp-content/uploads/2014/01/AdobeStock_251064401.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
         <div className=''>
        <div className="m-5 bg-gray-300 p-8 md:w-1/2 opacity-80">
          <h1 className="text-2xl font-bold mb-4">What is a blog used for?</h1>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Connect with a wider audience.</h2>
            <p className="text-gray-700">
              Blogs connect writers and thought leaders with an online audience passionate about the same subjects.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Build a business.</h2>
            <p className="text-gray-700">
              Blogging helps businesses gain credibility and improve search engine rankings.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Raise awareness.</h2>
            <p className="text-gray-700">
              Many nonprofit groups use blogs to raise awareness about their cause and influence public opinion.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
