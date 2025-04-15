import React from 'react';

export default function Home() {
  return (
    <main className="p-6 md:p-12 max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <img
          src="/logo-ea-bright-futures.png"
          alt="EA Bright Futures logo"
          className="mx-auto w-32 h-32 mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">EA Bright Futures</h1>
        <p className="text-lg text-gray-600">
          Empathy & Action: Empowering Young Minds Through Music, Code, and Care
        </p>
      </section>

      <nav className="flex flex-wrap justify-center gap-6 mb-12 text-blue-600 text-lg font-medium">
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#storytime">Musical Storytime</a>
        <a href="#games">Games by Elena & Friends</a>
        <a href="#contact">Get Involved</a>
      </nav>

      <section id="about" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          @@ EA Bright Futures is a youth-led nonprofit that blends music, coding,
          and health education to uplift and empower children facing physical,
          emotional, or social challenges. The name "EA" stands for Elena and Allen, the young visionaries behind this initiative, and also represents our guiding values: <strong>Empathy & Action</strong>.
        </p>
        <p className="mt-4">
          Founded by a passionate young violinist, aspiring doctor, and budding coder, our mission is to bring joy, knowledge, and healing—one melody, one game, one story at a time.
        </p>
      </section>

      <section id="programs" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          To use the arts and technology to support children's emotional and
          physical well-being, while inspiring a generation of compassionate,
          curious young minds.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Programs</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-medium">🎻 Musical Storytime</h3>
            <p>
              Original recordings and live mini-concerts that combine classical
              music with storytelling, centered on themes of health and
              well-being.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">💻 Code for Care</h3>
            <p>
              Beginner-friendly coding projects teaching health topics—like
              hygiene and the human body—through games and interactive media.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-medium">📚 Little Doctor's Lab</h3>
            <p>
              Short videos and illustrated guides to help children understand
              medical experiences like doctor visits and vaccinations.
            </p>
          </li>
        </ul>
      </section>

      <section id="storytime" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Musical Storytime</h2>
        <p>
          Enjoy heartwarming musical storytelling created by Elena and friends.
          Each video pairs classical music with inspiring stories to help
          children learn, heal, and imagine.
        </p>
        <p className="mt-4 text-gray-600">(Video section coming soon)</p>
      </section>

      <section id="games" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Games by Elena & Friends</h2>
        <p>
          Explore fun, interactive games coded by Elena and her friends!
          Designed to teach kids about health, kindness, and how the body works,
          these games make learning playful and meaningful.
        </p>
        <p className="mt-4 text-gray-600">(Interactive games will be added here soon)</p>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p>
          Whether you're a musician, educator, healthcare worker, or someone
          who believes in the power of children to create positive change—we
          welcome you to be part of EA Bright Futures.
        </p>
        <p className="mt-4">
          <strong>Contact us:</strong> info@eabrightfutures.org<br />
          <strong>Instagram:</strong> @ea.bright.futures<br />
          <strong>Website:</strong> Coming Soon
        </p>
      </section>
    </main>
  );
}