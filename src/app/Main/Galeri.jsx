import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/Landing.JPG";
import image2 from "../../assets/Ms.JPG";
import image3 from "../../assets/Pg.JPG";
import image5 from "../../assets/gtng.JPG";
import image6 from "../../assets/pizza.JPG";
import image7 from "../../assets/Agustus.JPG";
import image8 from "../../assets/Bola.JPG"; 
import image9 from "../../assets/wsd.JPG"
import image10 from "../../assets/olhrg.JPG";
import image11 from "../../assets/Jln.JPG";
 
import image4 from "../../assets/Ge.JPG"; 
import image12 from "../../assets/Sh.JPG";




const belajarImages = [
  { src: image11, desc: "Kegiatan Olahraga di luar" },
  { src: image12, desc: "Kegiatan praktik sholat" },
  { src: image5, desc: "Kegiatan Membuat kerajinan tangan" },
  { src: image10, desc: "Kegiatan Senam" },
  // { src: image2, desc: "Foto Bersama Wisuda TK" },
];

const eventImages = [
  { src: image1, desc: " Rekreasi" },
  { src: image2, desc: "Foto Manasik Haji " },
  { src: image6, desc: "Kunjungan ke Pizza Hut" },
  { src: image7, desc: "Kegiatan Pawai 17 Agustus " },
  { src: image8, desc: "Kegiatan Lomba Futsal" },
  { src: image9, desc: "Kegiatan Wisuda anak tk" },
  { src: image4, desc: "Kegiatan Hari Guru" },
  { src: image3, desc: "Kegiatan Pembagian Plakat" },
  
];

export function GalleryPage() {
  const [selected, setSelected] = useState(null);

  const renderImageGrid = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          onClick={() => setSelected(img)}
        >
          <div className="aspect-[4/3] w-full">
            <img
              src={img.src}
              alt={img.desc}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-yellow-50 min-h-screen p-6 relative">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">
        Galeri Sekolah TK
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
          📘 Kegiatan Belajar
        </h2>
        {renderImageGrid(belajarImages)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
          🎉 Event Sekolah
        </h2>
        {renderImageGrid(eventImages)}
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white rounded-xl p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <img
              src={selected.src}
              alt={selected.desc}
              className="w-full max-h-[70vh] object-contain rounded-lg mb-4"
            />
            <p className="text-center text-gray-700 text-lg">{selected.desc}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
