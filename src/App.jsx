import { useState } from 'react'

// ============================================================
// DATA MAHASISWA
// Catatan: NIM di bawah ini CONTOH. Ganti dengan NIM asli sebelum
// dikumpulkan. Bidang Minat & Profil Lulusan (PL) di bawah ini
// SUDAH mengikuti Buku Kurikulum 2026 PSTI FT Unud.
// ============================================================
const PROFILE = {
  nama: 'Rahade',
  nim: '23xxxxxxxxx', // TODO: ganti dengan NIM asli
  prodi: 'S1 Teknologi Informasi — Universitas Udayana',
}

// 4 Bidang Minat Resmi Kurikulum 2026 PSTI FT Unud
const BIDANG_MINAT = [
  { kode: 'BM-01', nama: 'Data Sains & Sistem Cerdas', aktif: false },
  { kode: 'BM-02', nama: 'Tata Kelola & Bisnis TI', aktif: false },
  { kode: 'BM-03', nama: 'Sistem Informasi', aktif: false },
  { kode: 'BM-04', nama: 'IoT & Jaringan', aktif: true },
]
const bidangAktif = BIDANG_MINAT.find((b) => b.aktif)

// 3 Profil Lulusan (PL) Resmi Kurikulum 2026 PSTI FT Unud
const TARGET_PL = {
  kode: 'PL-02',
  nama: 'Entrepreneur Digital',
  deskripsi:
    'Lulusan yang mampu merancang, membangun, dan memasarkan produk/layanan digital berbasis teknologi IoT & jaringan secara mandiri.',
}

const BIO = `Mahasiswa TI Unud yang senang membongkar cara kerja sistem —
dari perangkat IoT, jaringan, sampai keamanan sistem yang "katanya" sudah
aman. Belajar dengan cara mencoba langsung, lalu menuliskan apa yang dipelajari.`

const PROJECTS = [
  {
    id: 'p1',
    path: '~/impian/iot-insinerator-cerdas',
    title: 'Dasbor IoT Pengelolaan Sampah Cerdas',
    desc: 'Sistem insinerator dua tahap berbasis sensor (MQ-7/MQ-135) dengan dasbor web real-time untuk memantau emisi dan mendukung pengelolaan sampah di Bali.',
    tags: ['IoT', 'Arduino', 'Raspberry Pi', 'Dashboard'],
  },
  {
    id: 'p2',
    path: '~/impian/toolkit-recon-otomatis',
    title: 'Toolkit Recon & Fingerprinting Otomatis',
    desc: 'Alat pentest berbasis Node.js untuk fingerprinting stack web, deteksi WAF, dan pemetaan kerentanan awal secara sistematis sebelum pengujian manual.',
    tags: ['Cybersecurity', 'Node.js', 'Automation'],
  },
  {
    id: 'p3',
    path: '~/impian/portfolio-3d-interaktif',
    title: 'Portofolio Web 3D Interaktif',
    desc: 'Portofolio pribadi dengan visual 3D yang bisa dieksplor langsung di browser, dibangun memakai Three.js dan Spline untuk pengalaman yang lebih hidup.',
    tags: ['Three.js', 'Spline', 'Frontend'],
  },
]

export default function App() {
  // Interactive Counter (useState) untuk Stat Card "Project Selesai"
  const [projectSelesai, setProjectSelesai] = useState(0)
  const tambahProject = () => setProjectSelesai((n) => n + 1)
  const resetProject = () => setProjectSelesai(0)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* ============================================================
          HEADER & NAVBAR SEMANTIK
          <header> = identitas/pembuka halaman. <nav> dipisah agar
          screen reader bisa lompat langsung ke navigasi utama.
      ============================================================ */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-slate-50">{PROFILE.nama}</span>
            <span className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
              <span>NIM {PROFILE.nim}</span>
              <span className="text-slate-600">·</span>
              <span>{PROFILE.prodi}</span>
              <span className="text-slate-600">·</span>
              <span className="rounded-full border border-teal-500/40 bg-teal-500/10 px-2 py-0.5 text-teal-300">
                {bidangAktif.nama}
              </span>
            </span>
          </div>

          <nav aria-label="Navigasi utama">
            <ul className="flex gap-5 text-sm font-medium text-slate-400">
              <li>
                <a href="#profil" className="border-b-2 border-transparent pb-1 hover:border-teal-400 hover:text-slate-100">
                  Profil
                </a>
              </li>
              <li>
                <a href="#statistik" className="border-b-2 border-transparent pb-1 hover:border-teal-400 hover:text-slate-100">
                  Statistik
                </a>
              </li>
              <li>
                <a href="#proyek" className="border-b-2 border-transparent pb-1 hover:border-teal-400 hover:text-slate-100">
                  Proyek Impian
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <main> = satu-satunya konten inti halaman */}
      <main className="mx-auto max-w-5xl px-6">
        {/* ==========================================================
            HERO PROFILE
        ========================================================== */}
        <section id="profil" aria-labelledby="hero-heading" className="grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-amber-400">
              Student Hub · Teknologi Informasi Unud
            </p>
            <h1 id="hero-heading" className="mb-4 text-4xl font-extrabold leading-tight text-slate-50">
              Halo, saya {PROFILE.nama} <span className="text-teal-400">_</span>
            </h1>
            <p className="mb-6 max-w-md text-slate-400">{BIO}</p>

            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/50 p-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Target Profil Lulusan
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 font-mono text-sm font-bold text-amber-400">
                {TARGET_PL.kode}
              </span>
              <span className="text-sm text-slate-200">
                {TARGET_PL.nama} — {TARGET_PL.deskripsi}
              </span>
            </div>
          </div>

          {/* Panel dekoratif bertema terminal (dark mode slate) */}
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950 font-mono shadow-2xl" aria-hidden="true">
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span className="ml-2 text-xs text-slate-500">whoami.sh — bash</span>
            </div>
            <div className="space-y-1 px-4 py-5 text-sm">
              <p><span className="text-teal-400">rahade@ti-unud</span><span className="text-slate-200"> :~$ whoami</span></p>
              <p className="mb-3 text-slate-500">{PROFILE.nama.toLowerCase()}</p>

              <p><span className="text-teal-400">rahade@ti-unud</span><span className="text-slate-200"> :~$ cat bidang_minat.txt</span></p>
              <p className="mb-3 text-slate-500">[{bidangAktif.kode}] {bidangAktif.nama}</p>

              <p><span className="text-teal-400">rahade@ti-unud</span><span className="text-slate-200"> :~$ echo $STATUS</span></p>
              <p className="text-slate-500">
                mengejar {TARGET_PL.kode} — {TARGET_PL.nama}...
                <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-teal-400 align-middle" />
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================
            INTERACTIVE COUNTER — STAT CARD
        ========================================================== */}
        <section id="statistik" aria-labelledby="stat-heading" className="border-t border-slate-800 py-14">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="stat-heading" className="text-2xl font-bold text-slate-50">Statistik Perkuliahan</h2>
            <span className="font-mono text-xs text-slate-500">useState() live counter</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-xl border border-teal-500/30 bg-gradient-to-b from-teal-500/10 to-slate-800/60 p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Project Selesai</span>
              <span className="text-4xl font-extrabold text-slate-50">
                {projectSelesai} <span className="text-base font-medium text-slate-500">proyek</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={tambahProject}
                  className="rounded-lg bg-teal-500 px-3 py-2 font-mono text-sm font-bold text-slate-900 transition hover:bg-teal-400 active:translate-y-px"
                >
                  + Tambah Project
                </button>
                <button
                  onClick={resetProject}
                  className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sm text-slate-400 transition hover:border-teal-400 hover:text-slate-100"
                >
                  Reset
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Klik tombol setiap kali menuntaskan sebuah proyek kuliah atau proyek pribadi.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-800/40 p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Bidang Minat Aktif</span>
              <span className="text-xl font-bold text-slate-50">{bidangAktif.nama}</span>
              <p className="text-xs text-slate-500">Kode kurikulum: {bidangAktif.kode}</p>
            </article>

            <article className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-800/40 p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Target Profil Lulusan</span>
              <span className="text-xl font-bold text-slate-50">{TARGET_PL.kode} — {TARGET_PL.nama}</span>
              <p className="text-xs text-slate-500">{TARGET_PL.deskripsi}</p>
            </article>
          </div>
        </section>

        {/* ==========================================================
            SHOWCASE 3 PROJECT CARDS
        ========================================================== */}
        <section id="proyek" aria-labelledby="proyek-heading" className="border-t border-slate-800 py-14">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="proyek-heading" className="text-2xl font-bold text-slate-50">3 Proyek Impian Selama Kuliah</h2>
            <span className="font-mono text-xs text-slate-500">showcase</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-800/40 p-5 transition hover:-translate-y-1 hover:border-amber-500/40"
              >
                <span className="font-mono text-xs text-slate-500">{p.path}</span>
                <h3 className="text-lg font-bold text-slate-50">{p.title}</h3>
                <p className="flex-1 text-sm text-slate-400">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 font-mono text-[11px] text-amber-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  rencana / belum dimulai
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* <footer> = info pelengkap penutup halaman */}
      <footer className="border-t border-slate-800 px-6 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {PROFILE.nama} · Student Hub TI Unud</span>
          <span className="font-mono">built with React + Vite + Tailwind CSS</span>
        </div>
      </footer>
    </div>
  )
}
