const FeaturesSection = () => (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Learn More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/assets/images/your-image1.jpg" alt="Building Image" className="rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/assets/images/your-image2.jpg" alt="Pool Image" className="rounded-md w-full" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/assets/images/your-image3.jpg" alt="Interior Image" className="rounded-md w-full" />
          </div>
        </div>
      </div>
    </section>
  );
  
export default FeaturesSection;
