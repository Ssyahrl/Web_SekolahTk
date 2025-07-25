import { motion } from "framer-motion";
import AnimatedCounter from "../../Animation/AnimatedCounter";
import ImageCarousel from "../../Animation/ImageCarousel";
import image1 from "../../assets/Ms.JPG";
import image2 from "../../assets/Landing.JPG";
import image3 from "../../assets/Pg.JPG"
import { Footer } from "../footer/Footer";

const carouselImages = [image1, image2, image3];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] text-gray-900 font-sans">
      <main className="px-6 py-10 md:px-20 md:py-20">
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Kiri - Teks */}
          <div className="w-full md:w-1/2 text-gray-800 p-8 flex flex-col justify-center h-80 md:h-auto flex-shrink-0">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              className="text-4xl font-bold mb-4"
            >
              Awal terbaik <span className="text-orange-500">untuk perjalanan</span><br />pendidikan anak Anda
            </motion.h2>
            <p className="mb-6">Temukan program unggulan kami di sini!</p>
          </div>

          {/* Kanan - Gambar Carousel Responsif */}
          <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-auto">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>

        </div>

        
        <div className="bg-[#e6e1da] mt-36 rounded-xl p-8 md:flex md:space-x-10">
          <div className="flex-1 mb-4 md:mb-0 text-center">
            <p className="text-sm text-gray-600">Jumlah Lulusan</p>
            <p className="font-bold text-2xl text-gray-800">
              <AnimatedCounter to={500} />+ Alumni
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0 text-center">
            <p className="text-sm text-gray-600">Guru Profesional</p>
            <p className="font-bold text-2xl text-gray-800">
              <AnimatedCounter to={3} /> Guru Bersertifikat
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0 text-center">
            <p className="text-sm text-gray-600">Siswa Aktif</p>
            <p className="font-bold text-2xl text-gray-800">
              <AnimatedCounter to={30} /> Siswa
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
