import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />

      <section className="px-10 py-10">
        <h1 className="text-4xl font-bold mb-8">Say Hello</h1>

        <div className="flex gap-10">
          <div className="max-w-sm text-sm text-gray-600">
            <p>
              Looking to start a new project or just want to say hi? Send me an email and I will do my best to reply within 24 hrs!
            </p>
            <p className="mt-4">
              If contact forms are not your thing, send me an email at hello@arnau.design
            </p>
          </div>

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

      <Footer />
    </div>
  )
}