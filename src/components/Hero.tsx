
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-4 animate-fade-in">
          New Collection
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover the latest trends in contemporary fashion
        </p>
        <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
