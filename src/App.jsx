function App() {
  return (
    <>
      <div className="pageWrapper">
        <Background />
        <AccentPopEffect />
        <Navbar />
        <main className="mainContent">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>

      <Footer />
    </>
  );
}
