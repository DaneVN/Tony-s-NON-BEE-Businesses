function TutorialPage() {
  return (
    <main>
      <h1 className="text-6xl text-center w-full text-(--cl-light-accent) mt-32">
        <strong>Tutorials Page</strong>
      </h1>
      <p className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16">
        Here you can find tutorials on how to use this platform.
      </p>
      <div id="youtube-videos" className="w-3/4 mx-auto mt-10">
        {/* Example YouTube video embeds */}
        <div className="mb-8">
          <h2 className="text-3xl text-(--cl-text-dark) mb-4">
            Listed Businesses Tutorial
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Getting Started Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TutorialPage;
