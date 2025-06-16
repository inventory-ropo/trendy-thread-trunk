
const Newsletter = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Stay in Style</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion insights.
        </p>
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md sm:rounded-r-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-md sm:rounded-l-none rounded-l-md hover:bg-gray-800 transition-colors font-medium">
            Subscribe
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
