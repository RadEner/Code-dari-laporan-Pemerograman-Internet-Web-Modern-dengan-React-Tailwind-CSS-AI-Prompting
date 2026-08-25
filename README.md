# Laporan — Student Hub Personal Mahasiswa TI Unud

Mata Kuliah: Pemrograman Internet (26STIE05X020) — Pertemuan 2
Proyek: `student-hub` (React + Vite + Tailwind CSS)
Nama: Rahade · Prodi: S1 Teknologi Informasi, Universitas Udayana
Bidang Minat: IoT & Jaringan (BM-04) · Target Profil Lulusan: PL-02 Entrepreneur Digital

> Data resmi Bidang Minat & Profil Lulusan diambil dari Buku Kurikulum 2026
> PSTI FT Unud (lihat materi Pertemuan 2). Catatan: **NIM** di `src/App.jsx`
> masih placeholder `2505551145` — wajib diganti dengan NIM asli sebelum
> dikumpulkan.

---

## 1. Langkah-Langkah (Step-by-Step)

Runtutan perintah terminal dari awal setup hingga `npm run dev`, mengikuti
alur yang diajarkan di Pertemuan 2 (Environment Setup → Vite → Tailwind).

```bash
# 1. Pastikan Node.js (LTS) & Git sudah terpasang
node -v
git --version

# 2. Buat project React baru dengan Vite
npm create vite@latest student-hub -- --template react

# 3. Masuk folder proyek & install dependency dasar
cd student-hub
npm install

# 4. Install Tailwind CSS sebagai plugin Vite
npm install -D tailwindcss @tailwindcss/vite

# 5. Konfigurasi vite.config.js agar memuat plugin Tailwind
#    (lihat isi file di bawah)

# 6. Ganti isi src/index.css menjadi satu baris:
#    @import "tailwindcss";

# 7. Tulis seluruh UI Student Hub sebagai Single-File Component
#    di src/App.jsx (header, hero, counter, project cards)
#    — tanpa membuat file/komponen tambahan di luar App.jsx.

# 8. Jalankan development server (Hot Module Replacement aktif)
npm run dev
# -> Local: http://localhost:5173/

# 9. (Opsional) Build versi produksi untuk memastikan tidak ada error
npm run build

# 10. (Opsional) Preview hasil build produksi secara lokal
npm run preview
```

**`vite.config.js`** (persis mengikuti materi kelas):

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**`src/index.css`:**

```css
@import "tailwindcss";
```

Struktur folder akhir:

```
student-hub/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx     # Bridge script
    ├── App.jsx      # Single-File Component (seluruh UI + logic)
    └── index.css    # Hanya import Tailwind
```

---

## 2. AI Prompt Log

Prompt persis yang digunakan (diambil dari soal Take-Home Assignment
Pertemuan 2, disampaikan ke Claude):

```
Take-Home Assignment: Student Hub & Code Defense

■ 1. Fitur Web Student Hub (`src/App.jsx`) ■ 2. Laporan & Penjelasan Langkah (README.md)
Buatkan Web Student Hub Personal Mahasiswa TI Unud:
• Header & Navbar Semantik: Nama, NIM, 1 dari 4 Bidang Minat Kurikulum 2026.
• Hero Profile: Bio ringkas & Target Profil Lulusan (PL-01/PL-02/PL-03).
• Interactive Counter (`useState`): Stat Card 'Project Selesai' yang bisa bertambah
nilainya saat tombol diklik.
• Showcase 3 Card Project: 3 Card ide proyek impian selama kuliah.

Wajib mengumpulkan README.md / Laporan PDF berisi:
1. Langkah-Langkah (Step-by-Step): Runtutan perintah terminal dari awal setup hingga
`npm run dev`.
2. AI Prompt Log: Lampirkan prompt persis yang dipakai.
3. Trace Alur Eksekusi: Jelaskan alur `index.html` ➔ `main.jsx` ➔ `App.jsx`.
4. Bedah & HTML5 Semantik: Jelaskan alasan penggunaan tag semantik pada `App.jsx`.
```

**Prompt susulan** (setelah membandingkan hasil awal dengan materi slide
Pertemuan 2 yang mewajibkan Tailwind CSS & Single-File Component):

```
Ubah total ke Tailwind CSS + single-file App.jsx sesuai instruksi dosen persis
```

**Model:** Claude Sonnet 5 (Anthropic), diakses melalui antarmuka chat Claude.

**Ringkasan intervensi manual:**
- Meng-upload materi slide Pertemuan 2 untuk verifikasi ketentuan resmi
  (Tailwind CSS wajib, single-file component, data 4 Bidang Minat & 3 PL resmi).
- Mengoreksi versi awal yang masih memakai CSS custom terpisah menjadi
  Tailwind CSS penuh sesuai instruksi "AI Constraint Rule" di slide.
- Mengganti NIM contoh dengan NIM asli (dilakukan sendiri sebelum submit).
- Menjalankan `npm install` dan `npm run build` secara lokal untuk
  memverifikasi tidak ada error.

---

## 3. Trace Alur Eksekusi: `index.html` ➔ `main.jsx` ➔ `App.jsx`

1. **Browser membuka `index.html` (Entry Point).**
   File ini sangat sepi/kosong — hanya menyediakan satu wadah:
   ```html
   <div id="root"></div>
   <script type="module" src="/src/main.jsx"></script>
   ```
   Karena ini **Single-Page Application (SPA)**, seluruh isi web nantinya
   "digambar" ke dalam wadah kosong ini oleh script React, bukan ditulis
   langsung di HTML.

2. **`src/main.jsx` dieksekusi (Bridge Script).**
   Script ini bertindak sebagai jembatan: ia mengambil elemen `root` dari
   `index.html`, lalu menyuntikkan Root Component `<App />` ke dalamnya:
   ```js
   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   )
   ```
   Setelah baris ini jalan, wadah `<div id="root">` yang tadinya kosong
   mulai berisi output dari komponen `App`.

3. **`src/App.jsx` di-render sebagai UI sesungguhnya (Anatomy of Component).**
   Fungsi `App()` dieksekusi dengan 3 bagian utama:
   - **Imports** (bahan luar): `useState` dari React.
   - **Logic & State** (otak komponen): `const [projectSelesai, setProjectSelesai] = useState(0)`
     menyimpan data hidup; fungsi `tambahProject` adalah event handler yang
     dipanggil saat tombol diklik.
   - **Return JSX** (tampilan): gabungan tag HTML5 semantik + class Tailwind
     CSS, dirender menjadi elemen DOM nyata (`header`, `nav`, `main`,
     `section`, `article`, `footer`) yang disisipkan ke dalam `<div id="root">`.

4. **Siklus interaktif setelah render awal.**
   Saat tombol "+ Tambah Project" diklik, `setProjectSelesai(n => n + 1)`
   mengubah nilai state. React membandingkan state baru dengan versi lama,
   lalu **hanya** merender ulang bagian DOM yang berubah (angka di Stat
   Card) — inilah yang membuat counter terasa instan tanpa reload halaman.

Ringkas: `index.html` = **wadah kosong**, `main.jsx` = **jembatan** yang
menyalakan React ke wadah tersebut, `App.jsx` = **otak & wajah** aplikasi
yang sesungguhnya dilihat dan digunakan pengguna.

---

## 4. Bedah & HTML5 Semantik pada `App.jsx`

Sesuai materi kelas ("HTML5 & Semantik Web: Mengapa Tetap Penting di Era
AI?"), setiap tag dipilih berdasarkan **peran konten**, bukan sekadar
tampilan — untuk menghindari "Div Soup" (semua elemen dibungkus `<div>`
tanpa makna):

| Tag | Digunakan untuk | Alasan pemilihan |
|---|---|---|
| `<header>` | Baris atas: nama, NIM, prodi, badge bidang minat | Menandai konten identitas/pembuka halaman, terpisah dari konten inti |
| `<nav>` di dalam `<header>` | Tautan Profil / Statistik / Proyek | Secara eksplisit menandai "kumpulan navigasi utama" sehingga pengguna screen reader bisa lompat langsung ke sana |
| `<main>` | Pembungkus seluruh konten inti | HTML5 mewajibkan hanya satu `<main>` per halaman untuk menandai konten unik yang tidak berulang (beda dari header/nav/footer) |
| `<section id="profil">` | Blok Hero Profile | Mengelompokkan satu topik utuh ("profil diri"), dilengkapi `aria-labelledby` agar heading di dalamnya jadi label aksesibilitas resmi |
| `<section id="statistik">` | Blok Stat Card / counter | Topik berbeda (data kuantitatif kuliah), dipisah sebagai section tersendiri |
| `<section id="proyek">` | Blok showcase 3 proyek | Satu unit topik "rencana proyek" yang berdiri sendiri |
| `<article>` pada tiap Stat Card & Project Card | Setiap kartu individu | `<article>` dipakai untuk konten yang **masuk akal berdiri sendiri** — sebuah kartu proyek tetap bermakna penuh meski dipindah/dibagikan terpisah, berbeda dari `<div>` yang tidak membawa makna semantik apa pun |
| `<footer>` | Baris bawah (copyright, tech stack) | Konten pelengkap penutup, dipisah dari `<main>` |
| Heading berjenjang (`<h1>` → `<h2>` → `<h3>`) | Judul hero, judul section, judul kartu proyek | Hierarki judul konsisten membantu screen reader membangun "peta" struktur halaman dan membantu SEO |

**Mengapa bukan `<div>` semua saja?**
Secara visual, hasil akhirnya bisa dibuat identik memakai `<div>` polos.
Bedanya ada pada **makna** yang dibawa tag tersebut: `<div>` adalah wadah
generik tanpa arti, sedangkan tag semantik menyampaikan struktur dokumen
kepada mesin — browser, mesin pencari (SEO), dan terutama teknologi bantu
(Screen Reader untuk penyandang disabilitas / Accessibility-a11y) — sehingga
halaman lebih mudah dinavigasi tanpa menambah baris kode ekstra. Ini juga
menjadi bahan utama **Code Defense**: mahasiswa harus bisa menjelaskan
alasan pemilihan tiap tag semantik pada kode yang dipertanggungjawabkan.

---

## Catatan Tambahan

- Seluruh UI ditulis sebagai **Single-File Component** di `src/App.jsx`
  sesuai "AI Constraint Rule" di materi kelas — tidak ada komponen/file
  tambahan di luar file ini.
- Styling 100% memakai **Tailwind CSS utility classes** (dark mode
  slate + aksen teal/amber), tanpa CSS custom terpisah.
- Panel bergaya terminal pada Hero bersifat dekoratif untuk
  merepresentasikan bidang minat IoT & Jaringan, diberi `aria-hidden="true"`
  agar tidak mengganggu pembaca layar.
- Proyek sudah diuji berjalan normal melalui `npm run dev` dan berhasil
  di-build tanpa error melalui `npm run build`.
