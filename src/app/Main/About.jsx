import { FaHeart, FaBook, FaSmile, FaChild, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/Tkq.png";
import guru1 from "../../assets/Op.jpg";

import guru3 from "../../assets/Wawa.JPG";
import { Footer } from "../footer/Footer";
import guru2 from "../../assets/mm.JPG";

export default function AboutPage() {
  return (
    <div className="bg-blue-200 text-gray-800">
      <section className="parallax py-32 text-center text-white">
        <motion.img
          src={logo}
          alt="Logo TKQ Nurul Anwar"
          className="w-24 md:w-32 mx-auto mb-4 drop-shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Tentang TKQ Nurul Anwar
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mx-auto drop-shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Tempat di mana anak-anak tumbuh dengan cinta, bermain sambil belajar, dan menemukan potensi terbaik mereka.
        </motion.p>
      </section>

      <section className="py-16 px-6 md:px-20 bg-green-200">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-yellow-500"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Siapa Kami?
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          TKQ Nurul Anwar berdiri sejak tahun 2004 dengan tujuan membantu anak didik mengembangkan berbagai potensi baik pskis maupun fisik yang meliputi moral dan nilai nilai agama.
        </motion.p>
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Visi</h3>
            <p>Mewujudkan generasi emas yang cerdas, mandiri, melek terhadap teknologi dan berakhlak mulia melalui pembelajaran aktif dan menyenangkan.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Misi</h3>
            <ul className="list-disc list-inside">
              <li>Mengenalkan peraturan dan menanamkan disiplin pada anak.</li>
              <li>Mengenalkan anak pada perkembangan zaman teknologi.</li>
              <li>Mendorong anak untuk aktif, kreatif, dan percaya diri.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-pink-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">Nilai-Nilai Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: FaLaptop, color: "text-pink-500", label: "Belajar Teknologi" },
            { icon: FaBook, color: "text-yellow-500", label: "Belajar Aktif" },
            { icon: FaSmile, color: "text-green-500", label: "Keceriaan" },
            { icon: FaChild, color: "text-blue-500", label: "Kemandirian" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className={`${item.color} text-4xl mx-auto mb-2 cursor-pointer`} />
                <p>{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">Guru-Guru Hebat Kami</h2>
        <div className="grid gap-50 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Ibu Tuti Widaningsih",
              role: "Guru",
              desc: "Penuh kasih dan kreatif dalam membimbing anak-anak usia dini.",
              image: guru2,
            },
            {
              name: "Ibu Lilis Endang Rahmawati",
              role: "Guru",
              desc: "Menyenangkan dan sabar, ahli dalam bermain sambil belajar.",
              image: guru3,
            },
            // {
            //   name: "Bapa Rahmat Suhana",
            //   role: "Guru Kelas C",
            //   desc: "Membimbing dengan senyum dan cinta, dekat dengan anak-anak.",
            //   image: "/guru3.jpg",
            // },
            {
              name: "Syahrul Rachmat H",
              role: "Operator IT Sekolah",
              desc: "Ahli teknologi pendidikan, memastikan pembelajaran digital berjalan lancar.",
              image: guru1,
            },
          ].map((guru, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={guru.image}
                alt={guru.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{guru.name}</h3>
                <p className="italic text-pink-500 mb-2">{guru.role}</p>
                <p className="text-sm text-gray-600 mb-4">{guru.desc}</p>
                <div className="flex justify-center gap-4 text-gray-400 text-sm">
                  <motion.div whileTap={{ scale: 1.2 }}>
                    <FaHeart className="hover:text-pink-500 cursor-pointer" />
                  </motion.div>
                  <motion.div whileTap={{ scale: 1.2 }}>
                    <FaBook className="hover:text-yellow-500 cursor-pointer" />
                  </motion.div>
                  <motion.div whileTap={{ scale: 1.2 }}>
                    <FaSmile className="hover:text-green-500 cursor-pointer" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <section className="bg-yellow-100 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold text-pink-600 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Yuk, Bergabung Bersama Kami!
        </motion.h2>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          Buka pendaftaran tahun ajaran baru untuk anak usia 4-6 tahun. Jadilah bagian dari keluarga besar TKQ Nurul Anwar.
        </motion.p>
        <motion.button
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Daftar Sekarang
        </motion.button>
      </section> */}

      <Footer />
    </div>
  );
}
