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
        "Anak Ke-1 dari<br/>Bapak Roni Febriyanto &amp; Ibu Lisa Tresia",
      photo: photoGroom,
      instagram: "https://instagram.com/fhatir.faqq",
    },
    bride: {
      name: "Tiyas Sari Dewi",
      description:
        "Anak Ke-2 dari<br/>Bapak Munadi &amp; Ibu Tukinah",
      photo: photoBride,
      instagram: "https://instagram.com/tiyassari_",
    },
  },

  // Acara Section
  acara: {
    weddingDate: new Date("2026-10-10T15:00:00"),
    akadNikah: {
      title: "Akad Nikah",
      date: "Rabu, 02 Oktober 2026",
      time: "08.00 WIB s/d Selesai",
      location: "Br. Balu, Desa Abian Tuwung, Kediri, Tabanan, Bali ( Rumah No 47 )",
      mapsUrl: "https://www.google.com/maps/place/8%C2%B033'10.6%22S+115%C2%B009'18.7%22E/@-8.552947,115.1526221,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.552947!4d115.155197?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Rabu, 10 Oktober 2026",
      time: "15.00 WIB s/d Selesai",
      location: "Rumah Kediaman Ibu Ancela susilawati (Sui Jawa)",
      mapsUrl: "https://maps.app.goo.gl/3hL7MxwyeR7TkJ3D9",
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
