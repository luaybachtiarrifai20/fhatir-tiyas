import React from "react";
import bgPanjang from "../assets/bg_utama.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const PageLoveStory: React.FC = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden py-12 px-5"
      style={{
        backgroundImage: `url(${bgPanjang})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}>
      
      {/* ---- When We Met ---- */}
      <div className="reveal w-full flex flex-col items-center text-center mb-10">
        <h2
          className="text-[#D4AF37] text-[24px] font-semibold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}>
          When We Met
        </h2>
        <p
          className="text-[#F5E6D3] text-[13px] leading-relaxed max-w-[320px] px-4"
          style={{ fontFamily: "Lora, serif" }}>
          Kami tidak bertemu lewat rencana besar.
          Hanya sebuah pertemuan sederhana…
          Namun dari sana, percakapan kecil
          berubah menjadi rasa nyaman
          yang diam-diam tumbuh di hati
        </p>
        <p
          className="text-[#D4AF37] text-[12px] mt-4 font-semibold"
          style={{ fontFamily: "Philosopher, sans-serif" }}>
          24 Mei 2023
        </p>
        <p
          className="text-[#F5E6D3] text-[12px] leading-relaxed max-w-[320px] px-4 mt-2"
          style={{ fontFamily: "Lora, serif" }}>
          kami berstatus pacaran. Hari demi hari, kami belajar saling mengenal.
          Bukan hanya tentang bahagia,
          tetapi juga tentang perbedaan, luka, dan doa. Karena cinta bukan tentang kesempurnaan, melainkan tentang saling bertahan 🌱
        </p>
      </div>

      {/* ---- A Sacred Promise ---- */}
      <div className="reveal w-full flex flex-col items-center text-center mb-10">
        <h2
          className="text-[#D4AF37] text-[24px] font-semibold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}>
          A Sacred Promise
        </h2>
        <p
          className="text-[#F5E6D3] text-[13px] leading-relaxed max-w-[320px] px-4"
          style={{ fontFamily: "Lora, serif" }}>
          Dengan keyakinan yang semakin kuat, dan restu dari kedua keluarga, kami mengikat sebuah janji dalam pertunangan pada tanggal 30 Mei 2026💍
          Sebagai langkah serius menuju masa depan bersama.
        </p>
      </div>

      {/* ---- Our Forever Begins ---- */}
      <div className="reveal w-full flex flex-col items-center text-center pb-8">
        <h2
          className="text-[#D4AF37] text-[24px] font-semibold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}>
          Our Forever Begins
        </h2>
        <p
          className="text-[#F5E6D3] text-[13px] leading-relaxed max-w-[320px] px-4"
          style={{ fontFamily: "Lora, serif" }}>
          Kini, dengan niat yang sama dan doa yang menyertai, kami memilih untuk menyempurnakan perjalanan ini dalam ikatan suci pernikahan 🤍
          Sebagai awal baru untuk berbagi hidup, tumbuh, dan menua bersama.
        </p>
      </div>
    </section>
  );
};
