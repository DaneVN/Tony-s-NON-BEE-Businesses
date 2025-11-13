import BusinessCard from "./assets/Elements/BusinessCard";
import Footer from "./assets/Elements/Footer";
import Header from "./assets/Elements/Header";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-(--cl-secondary) relative overflow-hidden">
        {/* Background image – transparent */}
        <img
          src="./background1.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          alt="Background"
        />

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h1 className="text-5xl text-cl-text-light drop-shadow-lg">
            <strong>BeyondBEE</strong>
          </h1>
          <h2 className="text-3xl">Welcomes you</h2>
        </div>
      </div>
      <Header />
      <main className="flex justify-items-center items-center w-full h-full">
        {/* Site navigation options goes here */}
        {/* Navigation: List of businesses page */}
        {/* Navigation: About us section */}
        {/* Navigation: Contact us */}
        {/* Navigation: Can I add my business to this list? */}
        <div
          id="placeholder_card"
          className="flex flex-col justify-items-center items-center w-fit h-full"
        >
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
