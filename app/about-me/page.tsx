import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutMe() {
  return (
    <div>
      <Header />

      <section className="px-10 py-10 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="flex gap-10  items-center">
          <div className="max-w-md text-sm text-gray-600">
            <p>
              I am a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.
            </p>
            <p className="mt-4">
              You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers. I am passionate about giving back and teaching what I know to the next generation of designers.
            </p>
          </div>

          <Image src="/images.jpg" alt="about" width={300} height={300} className="ml-70" />
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">Clients</h2>
        <div className="text-2xl space-y-2 font-bold">
          <p>Hevy</p>
          <p>Alphavive</p>
          <p>Knack</p>
          <p>JoyPixels</p>
          <p>Themesberg</p>
          <p>Rimgard</p>
          <p>Pumpables</p>
          <p>Solules</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}