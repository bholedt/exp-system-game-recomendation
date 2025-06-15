import { Rule } from "@/lib/type";
import apexLegends from "@/assets/apex-legends.jpg";
import pubgBattlegrounds from "@/assets/pubg-battlegrounds.jpg";
import bloodStrike from "@/assets/blood-strike.jpg";
import overwatch2 from "@/assets/overwatch2.jpg";
import valorant from "@/assets/valorant.jpg";
import doomEternal from "@/assets/doom-eternal.jpg";
import farCry from "@/assets/far-cry.jpg";
import arenaBreakout from "@/assets/arena-breakout.jpg";
import counterStrike2 from "@/assets/counter-strike2.jpg";
import halfLife2 from "@/assets/half-life2.jpg";
import residentEvilVillage from "@/assets/resident-evil-village.jpg";
import theFinals from "@/assets/the-finals.jpg";
import payday from "@/assets/payday.jpg";
import deltaForce from "@/assets/delta-force.jpg";
import callOfDuty from "@/assets/call-of-duty.webp";

export const rules: Rule[] = [
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Battle Royale",
    },
    result: {
      nama_game: "Apex Legends",
      image: apexLegends,
      deskripsi:
        'Apex Legends adalah permainan battle royale free-to-play yang dikembangkan oleh Respawn Entertainment dan diterbitkan oleh Electronic Arts. Game ini berlatar di alam semesta Titanfall, dan menampilkan pertempuran tim tiga orang (squad) dengan karakter unik yang disebut "Legends". Masing-masing Legend memiliki kemampuan khusus yang dapat digunakan untuk membantu tim mereka. Tujuan utama dalam Apex Legends adalah menjadi satu-satunya tim yang bertahan di arena yang semakin mengecil. ',
    },
  },
  {
    conditions: {
      crossplay: "Mobile, Konsol, PC",
      spesifikasi: "Ringan",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Battle Royale",
    },
    result: {
      nama_game: "PUBG Battlegrounds",
      image: pubgBattlegrounds,
      deskripsi:
        "PUBG: Battlegrounds adalah permainan battle royale multipemain daring yang populer. Dalam permainan ini, 100 pemain terjun payung ke sebuah pulau dan bertarung untuk bertahan hidup hingga menjadi yang terakhir. Pemain harus menjarah perlengkapan, senjata, dan kendaraan untuk bertahan dari pemain lain dan zona aman yang semakin mengecil. ",
    },
  },
  {
    conditions: {
      crossplay: "Mobile, PC",
      spesifikasi: "Ringan",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Battle Royale",
    },
    result: {
      nama_game: "Blood Strike",
      image: bloodStrike,
      deskripsi:
        'Blood Strike adalah game mobile FPS (First Person Shooter) battle royale yang dikembangkan oleh NetEase Games. Game ini dikenal dengan pertandingannya yang cepat, optimasinya yang lancar, dan karakter dengan kemampuan unik. Blood Strike menawarkan berbagai mode permainan, termasuk Battle Royale, Squad Fight, dan Hot Zone, serta berbagai pilihan "Striker" dengan kemampuan berbeda. ',
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Kompetitif",
    },
    result: {
      nama_game: "Overwatch 2",
      image: overwatch2,
      deskripsi:
        "Overwatch 2 adalah permainan video tembak-menembak pahlawan gratis untuk dimainkan yang dikembangkan oleh Blizzard Entertainment. Permainan ini berlatar dunia masa depan yang optimis dan menampilkan pertempuran tim 5v5 yang intens. Pemain memilih dari lebih dari 30 pahlawan unik, masing-masing dengan kemampuan dan gaya bermain yang berbeda, untuk bertarung di berbagai peta dan mode permainan di seluruh dunia. ",
    },
  },
  {
    conditions: {
      crossplay: "PC",
      spesifikasi: "Ringan",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Battle Royale",
    },
    result: {
      nama_game: "Valorant",
      image: valorant,
      deskripsi:
        "Valorant adalah game tembak-tembak taktis orang pertama (FPS) yang dikembangkan dan diterbitkan oleh Riot Games. Game ini gratis untuk dimainkan dan memiliki gameplay berbasis tim di mana dua tim yang masing-masing terdiri dari lima pemain bersaing untuk memenangkan ronde. ",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Tinggi",
      harga: "Berbayar",
      mode: "Singleplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Doom Eternal",
      image: doomEternal,
      deskripsi:
        "Doom Eternal adalah game first-person shooter (FPS) yang dikembangkan oleh id Software dan diterbitkan oleh Bethesda Softworks. Game ini adalah sekuel dari Doom (2016) dan melanjutkan kisah Doom Slayer dalam misinya untuk menghentikan invasi iblis ke Bumi dan dimensi lain. Doom Eternal menawarkan gameplay yang lebih cepat dan intens, dengan berbagai macam musuh, senjata, dan kemampuan yang bisa digunakan untuk menghabisi iblis. Selain mode cerita pemain tunggal, Doom Eternal juga menawarkan mode multipemain yang disebut BATTLEMODE, di mana pemain bisa bermain sebagai Doom Slayer atau iblis. ",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Berbayar",
      mode: "Singleplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Far Cry",
      image: farCry,
      deskripsi:
        "Far Cry adalah seri permainan video tembak-menembak orang pertama yang dikenal dengan dunia terbuka yang luas dan cerita yang menarik. Setiap judul dalam seri ini biasanya menampilkan karakter protagonis yang berjuang untuk bertahan hidup di lingkungan yang berbahaya dan melawan berbagai musuh, seringkali melibatkan konflik politik dan militer.",
    },
  },
  {
    conditions: {
      crossplay: "Mobile, PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Battle Royale",
    },
    result: {
      nama_game: "Arena Breakout",
      image: arenaBreakout,
      deskripsi:
        "Arena Breakout adalah game FPS (First Person Shooter) taktis imersif generasi berikutnya yang menawarkan pengalaman simulasi perang yang realistis di perangkat seluler. Pemain dapat memilih faksi dan terlibat dalam pertempuran tim taktis, menghadapi bos baru, dan merasakan baku tembak intens di berbagai peta dan mode. Game ini juga dikenal dengan sistem gunsmithing yang memungkinkan modifikasi senjata secara detail. ",
    },
  },
  {
    conditions: {
      crossplay: "PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Kompetitif",
    },
    result: {
      nama_game: "Counter Strike 2",
      image: counterStrike2,
      deskripsi:
        "Counter-Strike 2 (CS2) adalah permainan video tembak-menembak taktis orang pertama yang dikembangkan dan diterbitkan oleh Valve pada tahun 2023. Merupakan seri kelima dalam franchise Counter-Strike, yang menggantikan Counter-Strike: Global Offensive (CS:GO) di Steam. CS2 menawarkan grafis yang ditingkatkan, konten baru, dan peningkatan teknis, termasuk pembaruan sub-tick. ",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Ringan",
      harga: "Berbayar",
      mode: "Singleplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Half Life 2",
      image: halfLife2,
      deskripsi:
        "Half-Life 2 adalah permainan video tembak-menembak orang pertama yang dikembangkan dan diterbitkan oleh Valve Corporation pada tahun 2004. Permainan ini merupakan sekuel dari Half-Life dan berlatar di dunia distopia yang dikuasai oleh Combine. Pemain berperan sebagai Gordon Freeman, seorang ilmuwan yang harus berjuang untuk membebaskan umat manusia dari cengkeraman Combine. Permainan ini dikenal dengan cerita yang mendalam, pembangunan dunia yang imersif, fisika yang realistis, dan gameplay yang inovatif. ",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Berbayar",
      mode: "Singleplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Resident Evil Village",
      image: residentEvilVillage,
      deskripsi:
        "Resident Evil Village adalah permainan video survival horror yang dikembangkan dan diterbitkan oleh Capcom, dirilis pada tahun 2021 sebagai sekuel dari Resident Evil 7: Biohazard. Pemain mengendalikan Ethan Winters, yang mencari putrinya yang diculik di sebuah desa misterius yang dihuni oleh berbagai makhluk mutan. Permainan ini menggabungkan elemen horor yang kuat dari Resident Evil 7 dengan aksi yang lebih intens dari Resident Evil 4.",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Kompetitif",
    },
    result: {
      nama_game: "The Finals",
      image: theFinals,
      deskripsi:
        "The Finals adalah game FPS (First Person Shooter) gratis untuk dimainkan yang dikembangkan dan diterbitkan oleh Embark Studios. Dalam game ini, pemain berpartisipasi dalam acara permainan pertarungan virtual, di mana mereka bertarung dalam tim di arena yang dapat dihancurkan. The Finals menawarkan gaya permainan yang unik dengan kemampuan untuk merusak hampir semua objek dalam game, memungkinkan pemain untuk menciptakan strategi dan taktik baru. ",
    },
  },
  {
    conditions: {
      crossplay: "Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Berbayar",
      mode: "Singleplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Payday",
      image: payday,
      deskripsi:
        "Payday adalah seri permainan video penembak orang pertama kooperatif yang berpusat pada perampokan. Pemain dapat bermain sendiri atau bersama tim hingga empat orang, melakukan berbagai perampokan seperti perampokan bank, pencurian, dan kejahatan lainnya. Seri ini terkenal dengan gameplay kooperatifnya, penyesuaian karakter, dan berbagai misi yang menantang. ",
    },
  },
  {
    conditions: {
      crossplay: "Mobile, Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Gratis",
      mode: "Multiplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Delta Force",
      image: deltaForce,
      deskripsi:
        "Delta Force adalah game FPS (First Person Shooter) taktis yang dikembangkan oleh TiMi Studio Group dan Garena. Game ini tersedia untuk PC, iOS, dan Android, dengan rencana untuk merilisnya di konsol. Delta Force menawarkan pengalaman bermain yang realistis dan dinamis dengan berbagai mode permainan, termasuk pertempuran 32v32 dan mode ekstraksi. Pemain dapat memilih berbagai operator dengan kemampuan unik untuk bertempur di medan perang modern yang luas. ",
    },
  },
  {
    conditions: {
      crossplay: "Mobile, Konsol, PC",
      spesifikasi: "Sedang",
      harga: "Berbayar",
      mode: "Multiplayer",
      genre: "Action",
    },
    result: {
      nama_game: "Call of Duty",
      image: callOfDuty,
      deskripsi:
        "Call of Duty (CoD) adalah seri permainan video tembak-menembak orang pertama (FPS) yang sangat populer. Game ini dikenal dengan pengalaman perang yang imersif, baik dalam mode single-player maupun multiplayer. CoD pertama kali dirilis pada tahun 2003 dan sejak itu telah menghasilkan banyak sekuel dan ekspansi, dengan berbagai tema dan pengaturan perang. ",
    },
  },
];
