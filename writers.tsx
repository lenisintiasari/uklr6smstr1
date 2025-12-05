// writers.ts 
export interface Writer {
  id: string;
  name: string;
  avatarUrl: string; // real image URL 
  bio: string;
  followers: number; // integer count of followers 
}
export const writers: Writer[] = [
  {
    id: "w1",
    name: "Andrea Hirata",
    avatarUrl:
      "https://4.bp.blogspot.com/-aefSkdnWy5M/Wq8t_k4ETOI/AAAAAAAAACE/LDZSvLkaCUYo-i63dk1IrPRNWJiSdnCygCLcBGAs/s1600/Andrea%2BHirata.jpg",
    followers: 79000,
    bio: `Andrea Hirata, yang memiliki nama lengkap Andrea Hirata Seman Said Harun, adalah seorang novelis Indonesia yang lahir di Gantung, Belitung, pada 24 Oktober 1967. Ia dikenal luas sebagai penulis Laskar Pelangi, sebuah novel inspiratif yang diangkat dari kisah nyata masa kecilnya dan kemudian menjadi karya sastra Indonesia terlaris sepanjang masa. Sebelum terjun sepenuhnya ke dunia kepenulisan, Andrea pernah bekerja sebagai pegawai di PT Telkom. Ia juga menempuh pendidikan tinggi di berbagai universitas bergengsi, termasuk Universitas Indonesia, Sheffield Hallam University di Inggris, dan Université de Paris di Prancis.
Kesuksesan Laskar Pelangi membawanya pada pengakuan internasional, hingga karyanya diterjemahkan ke dalam lebih dari 20 bahasa dan diadaptasi menjadi film, musikal, serta drama panggung. Selain Laskar Pelangi, Andrea juga menulis novel-novel lain seperti Sang Pemimpi, Edensor, Maryamah Karpov, Padang Bulan, Cinta di Dalam Gelas, Ayah, dan Orang-orang Biasa. Ia juga mendirikan Museum Kata Andrea Hirata di Belitung sebagai bentuk dedikasi terhadap dunia literasi dan seni. Hingga kini, Andrea Hirata dikenal sebagai salah satu penulis paling berpengaruh di Indonesia, terutama dalam menginspirasi semangat pendidikan dan mimpi anak-anak daerah.`,
  },
  {
    id: "w2",
    name: "Tere Liye",
    avatarUrl: "https://tse3.mm.bing.net/th/id/OIP.8ZxkgLH7MSfL7oqB1Chx1wAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    followers: 8200,
    bio: `Tere Liye adalah seorang penulis novel asal Indonesia yang sangat populer dan produktif. Nama “Tere Liye” sebenarnya adalah nama pena; identitas aslinya tidak banyak dipublikasikan karena ia dikenal sebagai pribadi yang tertutup dan tidak ingin terlalu tampil di media.
Ia mulai dikenal luas melalui novel-novelnya yang memiliki gaya bahasa sederhana, mudah dipahami, dan sarat pesan moral. Karya-karyanya banyak mengangkat tema keluarga, kehidupan, persahabatan, hingga petualangan fantasi. Beberapa bukunya seperti “Hafalan Shalat Delisa,” “Rembulan Tenggelam di Wajahmu,” “Bumi,” “Pulang,” dan “Hujan” menjadi best seller dan difilmkan.
Tere Liye juga terkenal karena produktif—hampir setiap tahun menerbitkan buku baru. Selain menulis novel, ia sering berbagi pandangan tentang kehidupan melalui unggahan media sosialnya yang bernada reflektif dan motivatif. 
Dengan karakter tulisan yang menyentuh, mudah dipahami, dan dekat dengan realita, Tere Liye menjadi salah satu penulis Indonesia yang paling banyak digemari oleh pembaca berbagai usia.`,
  },
  {
    id: "w3",
    name: "Eka Kurniawan",
    avatarUrl: "https://tse4.mm.bing.net/th/id/OIP.z14klzfYvwUbcDfX-yJsAQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    followers: 12700,
    bio: `Eka Kurniawan adalah seorang novelis, penulis cerita pendek, dan esais asal Indonesia yang dikenal secara internasional. Ia lahir pada 28 November 1975 di Tasikmalaya, Jawa Barat. Karya-karyanya terkenal dengan perpaduan antara realisme magis, kritik sosial, humor gelap, dan penggambaran kehidupan masyarakat Indonesia yang tajam serta berlapis.
Nama Eka Kurniawan mulai dikenal luas setelah novel debutnya, “Cantik Itu Luka,” terbit dan mendapatkan banyak pujian dari kritikus dalam dan luar negeri. Novel ini dianggap sebagai salah satu karya sastra modern Indonesia yang sangat berpengaruh dan bahkan diterjemahkan ke berbagai bahasa. Karya lainnya seperti “Lelaki Harimau” dan “Seperti Dendam, Rindu Harus Dibayar Tuntas” juga menuai pengakuan internasional. Bahkan, novel Lelaki Harimau menjadi buku Indonesia pertama yang masuk nominasi Man Booker International Prize.
Selain menulis novel, Eka aktif menciptakan cerita pendek, esai, dan naskah film. Salah satu novelnya, Seperti Dendam, Rindu Harus Dibayar Tuntas, telah diadaptasi menjadi film dan memenangkan penghargaan internasional.
Dengan gaya penulisan yang khas, cerdas, dan penuh simbol, Eka Kurniawan disebut sebagai salah satu penerus penulis besar Indonesia dan menjadi figur penting dalam perkembangan sastra Indonesia modern.`,
  },
];

export default writers; 