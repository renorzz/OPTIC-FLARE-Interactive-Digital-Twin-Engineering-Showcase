# OPTIC-FLARE &bull; Interactive Digital Twin & Engineering Showcase

**Aplikasi Web Interaktif & Prototype Simulasi SCADA**  
Subtema: *Emission Reduction* &bull; Tim **Dicoba Aja Dulu** &bull; Institut Teknologi Sepuluh Nopember (ITS), Surabaya &bull; OGEFEST 2026

---

## 🎨 Color Palette Resmi (Sesuai Desain PPT)
Palette warna yang diimplementasikan pada web prototype ini:
1. **Cobalt Royal Blue:** `#2563EB` &mdash; Brand Utama & Identitas Teknologi
2. **Industrial Cyan Teal:** `#0FA5A4` &mdash; Instrumentasi Sensor & Spektroskopi
3. **High-Efficiency Leaf Green:** `#35D058` &mdash; Indikator Efisiensi Optimal & Emisi Rendah
4. **Fluid Dynamics Cerulean Blue:** `#1583C4` &mdash; Aerodinamika Aliran Fluida & RJICW
5. **Net-Zero Emerald Green:** `#19B981` &mdash; Keberlanjutan & Manfaat ESG Karbon
6. **Soft Mint Highlight:** `#86EFAC` &mdash; Batas Aman & Highlight Telemetri
7. **Atmospheric Sky Blue:** `#93C5FD` &mdash; Lapisan Atmosfer & Lolos Methane Plume

---

## 🚀 Cara Menjalankan Prototype di Laptop / Browser

Folder ini bersifat **100% mandiri (self-contained)**. Semua video CFD, gambar, script matematika, dan styling tersimpan di dalam folder ini.

### Opsi 1: Klik Langsung (Paling Mudah)
* Cukup buka file **`index.html`** dengan klik 2x atau klik kanan &rarr; *Open with Google Chrome / Safari / Edge*.

### Opsi 2: Jalankan via Local Server (Rekomendasi untuk Presentasi)
Buka terminal pada folder ini dan jalankan salah satu:
```bash
# Menggunakan Python 3:
python3 -m http.server 8080
# Lalu buka browser: http://localhost:8080
```
atau
```bash
# Menggunakan npx serve:
npx -y serve .
```

---

## 🛠️ Fitur Utama untuk Presentasi & Sesi Q&A

1. **Laboratorium CFD Terintegrasi (Modul 1):**
   * Video simulasi OpenFOAM (`ReactingFoam`) dapat diputar, diatur kecepatan (0.5x slow-mo), dan dijeda.
   * Switcher ke kontur termal ANSYS Fluent dan pemetaan inframerah VISR.
   * Tooltip hotspot interaktif untuk *Upper Shear Layer*, *Flame Quenching*, dan *Methane Slip Plume*.

2. **Digital Twin Simulator Dinamis (Modul 2):**
   * Slider interaktif untuk Kecepatan Angin Silang (*Crosswind* $0 - 15\text{ m/s}$), Debit Gas Buang ($0.1 - 2.0\text{ MMSCFD}$), dan Nilai Kalor ($\text{LHV}$).
   * Toggle **Open-Loop** vs **OPTIC-FLARE Closed-Loop**: menunjukkan efisiensi konvensional anjlok ke $75.2\%$ saat diterpa angin kencang sementara OPTIC-FLARE mengunci efisiensi pada $\ge 98.2\%$.
   * Animasi Canvas lidah api dinamis yang berbelok dan terdistorsi sesuai hembusan angin.

3. **Fisika Spektroskopi Nirkontak & Uji Fail-Safe (Modul 3):**
   * Visualisasi 3 kanal optik: MWIR $3.4\ \mu\text{m}$ ($\text{CH}_4$), MWIR $4.3\ \mu\text{m}$ ($\text{CO}_2$), dan LWIR $8-14\ \mu\text{m}$ (Soot/Background).
   * Tombol uji coba *"Sim. Failover"* mendemonstrasikan sertifikasi keselamatan **SIL-2** dengan *bumpless transfer* ke model akustik ultrasonik saat badai tropis.

4. **Kalkulator Tekno-Ekonomi & Kredit Karbon (Modul 4):**
   * Perhitungan dinamis kapasitas sumur, valuasi pasar karbon IDXCarbon (Rp69.000/ton), CAPEX Rp890 Jt, payback period 13.4 bulan, dan IRR 68.4%.

5. **Bank Referensi DOI Resmi (Modul 5):**
   * 20 kartu referensi lengkap dengan kutipan, abstrak singkat, dan tautan resmi `https://doi.org/...` aktif yang terhubung langsung ke penerbit (Springer, Elsevier, Science, Nature, dll.).
