import couplePhoto from "./assets/foto_cover.png";
import photoGroom from "./assets/6.jpg";
import photoBride from "./assets/5.jpg";
import photo1 from "./assets/1.jpg";
import photo2 from "./assets/2.jpg";
import photo3 from "./assets/3.jpg";
import photo4 from "./assets/4.jpg";
import photo5 from "./assets/5.jpg";
import photo6 from "./assets/6.jpg";
import photo7 from "./assets/7.jpg";
import photo8 from "./assets/8.jpg";
import photo9 from "./assets/9.jpg";


export const weddingConfig = {
  // Front
  front: {
    names: "Fhatir dan Tiyas",
    photo: couplePhoto,
  },

  // Couple Section
  couple: {
    names: "Fhatir dan Tiyas",
    date: "Sabtu, 10 Oktober 2026",
    photo: couplePhoto,
  },

  // Mempelai Section
  mempelai: {
    quote:
      "Dan diatas Segalanya kenakanlah Kasih, Sebagai pengingat yang mempersatukan dan menyempurnakan",
    quoteReference: "(Kolose 3 : 21)",
    groom: {
      name: "Fhatir Muhammad Faqqih",
      description:
        "Anak Ke-2 dari<br/>Bapak Roni Febriyanto &amp; Ibu Lisa Tresia",
      photo: photoGroom,
      instagram: "https://instagram.com/fhatir.faqq",
    },
    bride: {
      name: "Tiyas Sari Dewi",
      description:
        "Anak Ke-1 dari<br/>Bapak Munadi &amp; Ibu Tukinah",
      photo: photoBride,
      instagram: "https://instagram.com/tiyassari_",
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date("2026-10-10T15:00:00"),
    akadNikah: {
      title: "Akad Nikah",
      date: "Jumat ,02 Oktober 2026",
      time: "08.00 WIB s/d Selesai",
      location: "Kediaman mempelai wanita, Dsn. Mekar jaya, Ds. Tawang sari, Kec. Sepauk, Kab. Sintang, Kalimantan Barat",
      mapsUrl: "",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Sabtu, 10 Oktober 2026",
      time: "15.00 WIB s/d Selesai",
      location: "Hotel 95, Jl. Imam Bonjol No.95, Bansir Laut, Kec. Pontianak Tenggara, Kota Pontianak, Kalimantan Barat",
      mapsUrl: "https://maps.app.goo.gl/QcteaXrddLwVGiT37?g_st=ipc",
    },
  },

  // Galeri Section
  galeri: {
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9],
  },

  // Penutup Section
  penutup: {
    names: "Fhatir dan Tiyas",
    socialMedia: {
      instagram: "https://www.instagram.com/",
      whatsapp: "https://wa.me/message/",
    },
  },

  // Gift Section
  gift: {
    bankAccounts: [
      {
        bankName: "BCA",
        accountNumber: "7925556548",
        accountName: "Fhatir Muhammad Faqqih",
      },
      {
        bankName: "BCA",
        accountNumber: "5125215685",
        accountName: "Tiyas Sari Dewi",
      },
    ],
    giftShipping: {
      recipientName: "Tiyas Sari Dewi",
      phoneNumber: "-",
      address:
        "Jl.Purnama,Gg.Dinasti no 1E, Parit tokaya,Kec. Pontianak Selatan",
    },
  },
};
