import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Bagian Kiri - Kontak */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Jalan Letda Lukito Jatiroke Rt 01 Rw 03</p>
              <p className="font-bold text-white">Sumedang, Indonesia</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaPhoneAlt className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white">+62 812-8036-5759</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaEnvelope className="text-white" />
            </div>
            <div>
              <p className="text-blue-400 font-bold">tkqnurulanwar28@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Tentang dan Sosial Media */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Tentang Sekolah</h3>
          <p className="text-gray-400 mb-6">
            TKQ Nurul Anwar adalah tempat terbaik untuk memulai pendidikan anak. 
            Lingkungan Islami, guru berpengalaman, dan pembelajaran kreatif.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/tkq.nurul_anwar/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded">
              <FaInstagram />
            </a>
            <a href="https://wa.me/6281280365759" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@tkq.nurul_anwar?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
