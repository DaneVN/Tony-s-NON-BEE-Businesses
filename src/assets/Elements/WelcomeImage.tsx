function welcomeImage() {
  return (
    <div className="-mt-15 h-screen w-screen bg-(--cl-Primary) relative overflow-hidden">
      {/* Background image – transparent */}
      <img
        src="./background4.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        alt="Background"
      />

      {/* Overlay content */}
      <div className="text-(--cl-text-dark) relative z-10 flex flex-col items-center justify-center h-full p-8">
        <h2 className="text-3xl">Welcome to</h2>
        <h1 className="text-5xl drop-shadow-lg">
          <strong>BeyondBEE</strong>
        </h1>
      </div>
    </div>
  );
}

export default welcomeImage;
