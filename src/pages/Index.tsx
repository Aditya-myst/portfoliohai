import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <main className="min-h-screen bg-purple-500">
      {/* Navigation bar */}
      <Navbar />

      {/* Add margin-top for spacing between navbar and Hero section */}
     

        <Hero />
      
    </main>
  );
};

export default Index;
