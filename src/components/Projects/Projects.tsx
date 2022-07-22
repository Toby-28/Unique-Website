const Projects: React.FC<any> = () => {
  return (
    <div className="section bg-green-100">
      <div className="section-title">Our Projects</div>
      <div className="section-subtitle">
        Explore our rich and diverse portfolio
      </div>
      <nav className="flex justify-center flex-wrap mt-4 mb-8 text-white">
        <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
          All
        </div>
        <div className="h-8 mr-2 px-3 py-1 bg-blue-800 text-center -skewx-20">
          UI Design
        </div>
        <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
          Web Dev
        </div>
        <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
          SEO
        </div>
      </nav>
      <div className="flex justify-center flex-wrap">
        <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-2xl">
          <img
            className="w-full h-full object-cover rounded-tl-xl rounded-br-xl"
            src="https://codeknack.github.io/tailwind-template/design1.jpg"
          />
        </div>
        <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-2xl">
          <img
            className="w-full h-full object-cover rounded-tl-xl rounded-br-xl"
            src="https://codeknack.github.io/tailwind-template/design2.jpg"
          />
        </div>
        <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-2xl">
          <img
            className="w-full h-full object-cover rounded-tl-xl rounded-br-xl"
            src="https://codeknack.github.io/tailwind-template/design3.jpg"
          />
        </div>
        <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-500 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-2xl">
          <img
            className="w-full h-full object-cover rounded-tl-xl rounded-br-xl"
            src="https://codeknack.github.io/tailwind-template/design4.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
