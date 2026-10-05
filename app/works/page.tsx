import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Works() {
  return (
    <div>
      <Header />

      <section className="px-10 py-10">
        <h1 className="text-4xl font-bold mb-8">Work</h1>

        <div className="grid grid-cols-2 gap-6">
           <Image src="/1.jpg" alt="work1" width={600} height={300} className=" w-full h-[300px] object-cover" />
           <Image src="/2.jpg" alt="work2" width={600} height={300} className=" w-full h-[300px] object-cover" />
            <Image src="/3.jpg" alt="work3" width={600} height={300} className=" w-full h-[300px] object-cover" />
            <Image src="/4.jpg" alt="work4" width={600} height={300} className=" w-full h-[300px] object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  )
}