import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />

      <section className="px-10 py-20">
        <div className="flex justify-between items-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold leading-tight">
              I am Trong Canh, a graphic designer & content creator based in Barcelona.
            </h1>
            <p className="mt-4 text-gray-600">
              Available for freelance & collaborations.
            </p>
          </div>
          <Image src="/images.jpg" className="rounded-full mr-36" alt="avatar" width={250} height={250} />
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="mt-2 text-xl mb-3">01 Example</p>
            <Image src="/Rectangle 1.png" className="rounded" alt="project1" width={400} height={200} />
          </div>
          <div>
            <p className="mt-2 text-xl mb-3">02 Example</p>
            <Image src="/Rectangle 2.png" className="rounded" alt="project2" width={400} height={200} />
          </div>
          <div>
            <p className="mt-2 text-xl mb-3">03 Example</p>
            <Image src="/Rectangle 3.png" className="rounded" alt="project3" width={400} height={200} />
          </div>
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">Content Creation</h2>
        <div className="flex justify-between items-start">
          <div className="max-w-md mt-20">
            <p className="text-gray-600 text-sm">
              Join my YouTube channel where I show my design thinking, my process, and my personality. This channel has helped over 200K designers become more proficient in the tools I use everyday: Figma, Webflow & more. Join the journey!
            </p>
            <a href="#" className="text-sm underline mt-4 inline-block">
              Get in contact about a sponsorship
            </a>
          </div>
          <Image src="/YouTube.png" className="mr-4 mt-8" alt="content" width={400} height={200} />
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">About Me</h2>
        <div className="flex gap-10">
          <div className="max-w-md text-sm text-gray-600">
            <p>
              I am a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.
            </p>
            <p className="mt-4">
              You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers. I am passionate about giving back and teaching what I know to the next generation of designers.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold mb-4">Your one stop shop for:</p>
            <ul className="text-sm space-y-2">
              <li className="border-b pb-2">Branding / Logo</li>
              <li className="border-b pb-2">Packaging</li>
              <li className="border-b pb-2">Websites</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">What Clients Say</h2>
        <div className="flex justify-center items-center gap-8 py-10">
          <button className="w-10 h-10 border rounded-full">←</button>
          <div className="text-center max-w-lg">
            <p className="text-gray-600 italic">
              I rehired Arnau to do some additional design work for my private label brand. Again, he was creative and efficient in bringing my ideas to fruition. Thanks Arnau.
            </p>
            <p className="mt-4 font-bold text-sm">— Ronald Weasley</p>
            <p className="text-sm text-gray-400">CEO</p>
          </div>
          <button className="w-10 h-10 border rounded-full">→</button>
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold border-b pb-4 mb-8">Say Hello</h2>
        <div className="flex gap-10">
          <p className="max-w-sm text-sm text-gray-600">
            Looking to start a new project or just want to say hi? Send me an email and I'll do my best to reply within 24 hrs!
          </p>
          <form className="flex-1 grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-2 text-sm" />
            <input type="text" placeholder="Last Name" className="border p-2 text-sm" />
            <input type="text" placeholder="Inquiry" className="border p-2 text-sm" />
            <input type="email" placeholder="Email" className="border p-2 text-sm" />
            <textarea placeholder="Message" className="border p-2 text-sm col-span-2 h-24"></textarea>
            <button className="border px-6 py-2 text-sm w-fit">Send</button>
          </form>
        </div>
      </section>

      <section className="px-10 py-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold border-b w-full pb-4 mb-8 text-center">Recent Blogs</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Image src="/istockphoto-1795222044-612x612.jpg" alt="blog1" width={400} height={200} />
            <p className="mt-2 text-xs text-gray-400">DESIGN</p>
            <p className="text-sm font-bold">The ULTIMATE Figma UI Kit</p>
            <a href="#" className="text-xs underline mt-1 inline-block">See Now →</a>
          </div>
          <div>
            <Image src="/pexels-photo-261662.avif" alt="blog2" width={400} height={200} />
            <p className="mt-2 text-xs text-gray-400">DESIGN</p>
            <p className="text-sm font-bold">The ULTIMATE Figma UI Kit</p>
            <a href="#" className="text-xs underline mt-1 inline-block">See Now →</a>
          </div>
          <div>
            <Image src="/student-849822_1280.jpg" alt="blog3" width={400} height={200} />
            <p className="mt-2 text-xs text-gray-400">DESIGN</p>
            <p className="text-sm font-bold">The ULTIMATE Figma UI Kit</p>
            <a href="#" className="text-xs underline mt-1 inline-block">See Now →</a>
          </div>
        </div>
      </section>

      <section className="px-10 py-10 text-center border-t">
        <h2 className="text-xl font-bold mb-2">Join the Newsletter!</h2>
        <p className="text-sm text-gray-600 mb-4">You will receive emails about new products, events, and more!</p>
        <div className="flex justify-center gap-2">
          <input type="email" placeholder="Your email address" className="border p-2 text-sm w-64" />
          <button className="bg-black text-white px-4 py-2 text-sm">→</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}