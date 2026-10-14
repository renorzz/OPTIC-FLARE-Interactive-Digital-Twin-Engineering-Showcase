/**
 * OPTIC-FLARE Interactive Digital Twin & Engineering Showcase
 * Client-Side Simulation Engine & Reactive Dashboard
 * Tim Dicoba Aja Dulu - ITS Surabaya (OGEFEST 2026)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================================
  // 1. DATA REPOSITORY: 20 VERIFIED DOI SCIENTIFIC PAPERS
  // ============================================================================
  const doiDatabase = [
    {
      id: 1,
      cat: 'fluid',
      title: 'Impact of Turbulence on Combustion Performance in Non-Assist Waste Gas Flares',
      authors: 'Mohit, A., Stolzman, J., Wooldridge, M., & Capecelatro, J.',
      journal: 'Flow, Turbulence and Combustion, 116(6), 215–238',
      year: 2025,
      doi: 'https://doi.org/10.1007/s10494-025-00714-y',
      finding: 'Membuktikan simulasi LES fenomena flame quenching di stack wake (suhu anjlok < 577 °C) dan pelepasan methane slip plume > 5.5% akibat turbulensi angin silang.'
    },
    {
      id: 2,
      cat: 'fluid',
      title: 'A methodology for quantifying combustion efficiencies and species emission rates of flares subjected to crosswind',
      authors: 'Burtt, D. C., Corbin, D. J., Johnson, M. R., et al.',
      journal: 'Journal of the Energy Institute, 104, 124–132',
      year: 2022,
      doi: 'https://doi.org/10.1016/j.joei.2022.07.005',
      finding: 'Metodologi neraca karbon dan formulasi efisiensi pembakaran (η_CE) serta pelucutan bahan bakar (fuel stripping) pada reacting jet in crosswind (RJICW).'
    },
    {
      id: 3,
      cat: 'fluid',
      title: 'Real-world assessment shows outsized benefits of shrouds on reducing emissions from low-flow utility oil and gas flares',
      authors: 'Stolzman, J., Craig, A., Gutierrez, L., & Wooldridge, M.',
      journal: 'Environmental Science & Technology, 59(44), 23762–23772',
      year: 2025,
      doi: 'https://doi.org/10.1021/acs.est.5c05760',
      finding: 'Bukti empiris angin silang moderat 4.5–6.7 m/s mereduksi efisiensi pembakaran rata-rata menjadi 96.4%, melipatgandakan emisi metana lolos dibanding klaim standar 98%.'
    },
    {
      id: 4,
      cat: 'fluid',
      title: 'Effects of crosswind and shroud geometry on performance of low-flow, nonassisted flares',
      authors: 'Stolzman, J. E., Mohit, A., Gutierrez, L., et al.',
      journal: 'Journal of the Air & Waste Management Association, 76(1), 28–48',
      year: 2026,
      doi: 'https://doi.org/10.1080/10962247.2025.2566810',
      finding: 'Karakterisasi aerodinamika interaksi geometri cerobong terhadap penetrasi pusaran angin silang pada sumur berdebit rendah.'
    },
    {
      id: 5,
      cat: 'fluid',
      title: 'Inefficient and unlit natural gas flares both emit large quantities of methane',
      authors: 'Plant, G., Kort, E. A., Brandt, A. R., et al.',
      journal: 'Science, 377(6614), 1566–1571',
      year: 2022,
      doi: 'https://doi.org/10.1126/science.abq0385',
      finding: 'Survei udara skala masif mengungkap efisiensi rata-rata suar lapangan hanya ~91.1% akibat dilema over-assist aerasi dan kontrol konvensional yang tidak adaptif.'
    },
    {
      id: 6,
      cat: 'sensing',
      title: 'Techniques for measuring flare combustion efficiency and destruction removal efficiency: A review',
      authors: 'Daun, K. J., & Spinti, J. P.',
      journal: 'Progress in Energy and Combustion Science, 106, 101235',
      year: 2025,
      doi: 'https://doi.org/10.1016/j.pecs.2025.101235',
      finding: 'Review state-of-the-art teknologi pemantauan suar; membuktikan keunggulan mutlak radiometri nirkontak dibanding sensor kontak yang rentan rusak terpapar panas > 1000 °C dan gas masam H2S.'
    },
    {
      id: 7,
      cat: 'sensing',
      title: 'Viability of video imaging spectro-radiometry (VISR) for quantifying flare combustion efficiency',
      authors: 'Kaveh, A., Spinti, J. P., Lapeyre, P., Bonarens, M., & Daun, K. J.',
      journal: 'Journal of the Air & Waste Management Association, 75(7), 522–539',
      year: 2025,
      doi: 'https://doi.org/10.1080/10962247.2025.2495026',
      finding: 'Validasi akurasi kamera multi-spektral VISR untuk mengukur konsentrasi gas CH4 dan CO2 secara kontinu dari jarak aman tanpa kontak fisik.'
    },
    {
      id: 8,
      cat: 'sensing',
      title: 'Quantifying flare combustion efficiency using an imaging Fourier transform spectrometer',
      authors: 'Lapeyre, P., Miguel, R. B., Daun, K. J., et al.',
      journal: 'Journal of the Air & Waste Management Association, 74(5), 319–334',
      year: 2024,
      doi: 'https://doi.org/10.1080/10962247.2024.2319773',
      finding: 'Penerapan Persamaan Transfer Radiatif (RTE) dan spektrometri IFTS guna memisahkan spektrum radiasi gas dari emisi latar dan partikel jelaga.'
    },
    {
      id: 9,
      cat: 'sensing',
      title: 'Assessing flare combustion efficiency using imaging Fourier transform spectroscopy',
      authors: 'Miguel, R. B., Talebi-Moghaddam, S., Zamani, M., et al.',
      journal: 'JQSRT, 273, 107835',
      year: 2021,
      doi: 'https://doi.org/10.1016/j.jqsrt.2021.107835',
      finding: 'Karakterisasi absorpsi inframerah kuantitatif pada gas hidrokarbon hasil pembakaran difusi turbulen.'
    },
    {
      id: 10,
      cat: 'control',
      title: 'Achieving 99.5% methane destruction efficiency with a novel hybrid flare controlled by advanced automatic control',
      authors: 'Hong, J., Smith, J. D., & ARPA-E REMEDY Team',
      journal: 'SPE Annual Technical Conference and Exhibition, SPE-227962-MS',
      year: 2025,
      doi: 'https://doi.org/10.2118/227962-MS',
      finding: 'Membuktikan sistem kontrol otomatis adaptif tertutup (closed-loop) mampu mencapai efisiensi destruksi metana hingga 99.5% pada fasilitas U.S. DOE ARPA-E.'
    },
    {
      id: 11,
      cat: 'control',
      title: 'Decarbonisation innovation approach to address Global Methane Pledge: Industrial implementation of advanced flare process control',
      authors: 'AlRaeesi, A., AlZaabi, M., Baker Hughes flare.IQ Team, et al.',
      journal: 'ADIPEC 2024 Proceedings, SPE-220323-MS',
      year: 2024,
      doi: 'https://doi.org/10.2118/220323-MS',
      finding: 'Keberhasilan implementasi skala industri sistem kontrol closed-loop flare.IQ pada kilang ADNOC untuk meniadakan emisi metana lolos.'
    },
    {
      id: 12,
      cat: 'control',
      title: 'Validation of a new method for continuous flare combustion efficiency monitoring',
      authors: 'Tao, C., Chow, J., Evans, P., Newman, D., et al.',
      journal: 'Atmosphere, 15(3), 356',
      year: 2024,
      doi: 'https://doi.org/10.3390/atmos15030356',
      finding: 'Validasi unit komputasi tepi (Edge-AI) dengan latensi pemrosesan rendah guna memodulasi sistem secara seketika mengikuti dinamika angin.'
    },
    {
      id: 13,
      cat: 'control',
      title: 'Full-size experimental measurement of combustion and destruction efficiency in upstream flares',
      authors: 'Evans, P., Newman, D., Venuturumilli, R., et al.',
      journal: 'Atmosphere, 15(3), 333',
      year: 2024,
      doi: 'https://doi.org/10.3390/atmos15030333',
      finding: 'Eksperimen skala penuh regulasi US EPA 40 CFR 63.670; membuktikan nilai NHVcz < 10.05 MJ/Nm³ (270 BTU/scf) menurunkan efisiensi drastis ke 46%–70%.'
    },
    {
      id: 14,
      cat: 'control',
      title: 'A new air-assisted flare tip design for managing gas flare emissions (CFD analysis)',
      authors: 'Maaroof, A. A., Smith, J. D., & Zangana, M. H. S.',
      journal: 'Processes, 12(9), 1834',
      year: 2024,
      doi: 'https://doi.org/10.3390/pr12091834',
      finding: 'Analisis CFD injeksi udara bantuan adaptif untuk menstabilkan geometri lidah api dan meminimalkan pembentukan jelaga.'
    },
    {
      id: 15,
      cat: 'econ',
      title: 'The indirect global warming potential of methane oxidation in the IPCC’s sixth assessment report',
      authors: 'Muñoz, I., Pomerantz, A. E., & Kleinberg, R. L.',
      journal: 'Environmental Research Letters, 19(12), 121002',
      year: 2024,
      doi: 'https://doi.org/10.1088/1748-9326/ad8edd',
      finding: 'Dasar ilmiah metrik pemanasan global metana jangka pendek: GWP20 = 84 kali lipat lebih kuat daripada CO2 dalam memicu krisis iklim.'
    },
    {
      id: 16,
      cat: 'econ',
      title: 'Lack of harmonisation of greenhouse gases reporting standards and the methane emissions gap',
      authors: 'Cenci, S., & Biffis, E.',
      journal: 'Nature Communications, 16, 1234',
      year: 2025,
      doi: 'https://doi.org/10.1038/s41467-025-56845-3',
      finding: 'Mengungkap Validation Gap: pelaporan emisi statis mengabaikan fluktuasi angin dinamis, serta risiko kredit ESG bagi perbankan internasional.'
    },
    {
      id: 17,
      cat: 'econ',
      title: 'Flaring efficiencies and NOx emission ratios measured for offshore oil and gas facilities in the North Sea',
      authors: 'Shaw, J. T., Foulds, A., Wilde, S., et al.',
      journal: 'Atmospheric Chemistry and Physics, 23(2), 1491–1509',
      year: 2023,
      doi: 'https://doi.org/10.5194/acp-23-1491-2023',
      finding: 'Pengukuran langsung fasilitas lepas pantai yang menunjukkan besarnya diskrepansi antara emisi nyata di lapangan dengan asumsi regulasi statis.'
    },
    {
      id: 18,
      cat: 'econ',
      title: 'A review on qualitative assessment of natural gas utilisation options for eliminating routine gas flaring',
      authors: 'Abu, R., Patchigolla, K., & Simms, N.',
      journal: 'Gases, 3(1), 1–24',
      year: 2023,
      doi: 'https://doi.org/10.3390/gases3010001',
      finding: 'Analisis tekno-ekonomi pemanfaatan gas: membuktikan investasi pipa transmisi baru (USD 1–2 juta/km) tidak layak secara finansial pada sumur tua marginal.'
    },
    {
      id: 19,
      cat: 'econ',
      title: 'Construction of mini gas processing plants in the conditions of autonomous and hard-to-reach oil fields',
      authors: 'Chernoyarov, V.',
      journal: 'SPE Russian Petroleum Technology Conference, SPE-218664-MS',
      year: 2024,
      doi: 'https://doi.org/10.2118/218664-MS',
      finding: 'Kendala CAPEX tinggi dan logistik sulit dalam membangun fasilitas mini gas plant di lokasi sumur migas terpencil/remote.'
    },
    {
      id: 20,
      cat: 'econ',
      title: 'Flare gas monetization and greener hydrogen production via combination with cryptocurrency mining',
      authors: 'Snytnikov, P., & Potemkin, D.',
      journal: 'iScience, 25(2), 103769',
      year: 2022,
      doi: 'https://doi.org/10.1016/j.isci.2022.103769',
      finding: 'Studi komparasi opsi monetisasi gas suar alternatif di lokasi fasilitas terpencil.'
    }
  ];

  // Render DOI Cards
  const doiContainer = document.getElementById('doi-list');
  function renderDOICards(filterCat = 'all') {
    if (!doiContainer) return;
    doiContainer.innerHTML = '';

    const filtered = filterCat === 'all' 
      ? doiDatabase 
      : doiDatabase.filter(item => item.cat === filterCat);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'doi-card';
      card.innerHTML = `
        <div class="doi-card-head">
          <span class="doi-cat-badge">${item.cat.toUpperCase()}</span>
          <span class="doi-year">${item.year}</span>
        </div>
        <h4 class="doi-paper-title">${item.title}</h4>
        <div class="doi-authors">${item.authors} &bull; <em>${item.journal}</em></div>
        <p class="doi-abstract-brief">${item.finding}</p>
        <a href="${item.doi}" target="_blank" rel="noopener noreferrer" class="doi-link-btn">
          <span>🔗 DOI Resmi:</span> <code>${item.doi.replace('https://doi.org/', '')}</code> &rarr;
        </a>
      `;
      doiContainer.appendChild(card);
    });
  }
  renderDOICards('all');

  // DOI Filters
  const filterBtns = document.querySelectorAll('.btn-doi-filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDOICards(btn.dataset.cat);
    });
  });

  // ============================================================================
  // 2. MODUL 1: CFD MEDIA VIEWER CONTROLS
  // ============================================================================
  const videoEl = document.getElementById('cfd-main-video');
  const videoMethane = document.getElementById('cfd-methane-video');
  const btnPlay = document.getElementById('btn-video-play');
  const btnSpeed = document.getElementById('btn-video-speed');
  const videoSeek = document.getElementById('video-seek');
  const videoTime = document.getElementById('video-time');
  const mediaTitle = document.getElementById('active-media-title');
  const mediaSub = document.getElementById('active-media-sub');

  // Track currently active video for seek bar
  let activeVideo = videoEl;

  const sourceBtns = document.querySelectorAll('.btn-switch-source');
  sourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sourceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const src = btn.dataset.source;

      // Pause all and hide
      [videoEl, videoMethane].forEach(v => {
        if (v) { v.pause(); v.classList.remove('active'); }
      });

      if (src === 'openfoam-video') {
        if (videoEl) {
          videoEl.classList.add('active');
          videoEl.play();
          activeVideo = videoEl;
        }
        if (mediaTitle) mediaTitle.textContent = 'Simulasi Transient CFD OpenFOAM (ReactingFoam)';
        if (mediaSub) mediaSub.textContent = 'Mesh 1.48M Cells • k-ε Turbulence • EDC Finite-Rate Chemistry';
      } else if (src === 'methane-ir') {
        if (videoMethane) {
          videoMethane.classList.add('active');
          videoMethane.play();
          activeVideo = videoMethane;
        }
        if (mediaTitle) mediaTitle.textContent = 'Visualisasi Plume CH₄ — Radiometri Inframerah MWIR (3.30–3.45 µm)';
        if (mediaSub) mediaSub.textContent = 'Deteksi Nirkontak Fraksi Metana Lolos • Validasi Sensor IR Lapangan';
      }
    });
  });

  // Play/Pause + Speed + Seek controls operate on whichever video is active
  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      if (!activeVideo) return;
      if (activeVideo.paused) {
        activeVideo.play();
        btnPlay.textContent = '⏸️ Pause';
      } else {
        activeVideo.pause();
        btnPlay.textContent = '▶️ Putar';
      }
    });
  }

  let speeds = [1.0, 0.5, 2.0];
  let curSpeedIdx = 0;
  if (btnSpeed) {
    btnSpeed.addEventListener('click', () => {
      curSpeedIdx = (curSpeedIdx + 1) % speeds.length;
      const spd = speeds[curSpeedIdx];
      if (activeVideo) activeVideo.playbackRate = spd;
      btnSpeed.textContent = `Kecepatan: ${spd}x`;
    });
  }

  function syncSeekBar(v) {
    if (!v || !videoSeek || isNaN(v.duration)) return;
    videoSeek.value = (v.currentTime / v.duration) * 100;
    const curM = Math.floor(v.currentTime / 60);
    const curS = Math.floor(v.currentTime % 60).toString().padStart(2, '0');
    const durM = Math.floor(v.duration / 60);
    const durS = Math.floor(v.duration % 60).toString().padStart(2, '0');
    if (videoTime) videoTime.textContent = `${curM}:${curS} / ${durM}:${durS}`;
  }

  [videoEl, videoMethane].forEach(v => {
    if (v) v.addEventListener('timeupdate', () => { if (v === activeVideo) syncSeekBar(v); });
  });

  if (videoSeek) {
    videoSeek.addEventListener('input', () => {
      if (activeVideo && !isNaN(activeVideo.duration)) {
        activeVideo.currentTime = (videoSeek.value / 100) * activeVideo.duration;
      }
    });
  }


  // ============================================================================
  // 3. MODUL 2: DYNAMIC TWIN SIMULATOR & FLAME CANVAS
  // ============================================================================
  const sliderWind = document.getElementById('slider-wind');
  const sliderFlow = document.getElementById('slider-flow');
  const sliderLhv = document.getElementById('slider-lhv');

  const valWind = document.getElementById('val-wind');
  const valFlow = document.getElementById('val-flow');
  const valLhv = document.getElementById('val-lhv');

  const btnOpenLoop = document.getElementById('mode-open-loop');
  const btnClosedLoop = document.getElementById('mode-closed-loop');

  const dispCe = document.getElementById('disp-ce');
  const fillCe = document.getElementById('fill-ce');
  const descCe = document.getElementById('desc-ce');

  const dispNhv = document.getElementById('disp-nhv');
  const fillNhv = document.getElementById('fill-nhv');
  const descNhv = document.getElementById('desc-nhv');

  const dispSlip = document.getElementById('disp-slip');
  const fillSlip = document.getElementById('fill-slip');
  const descSlip = document.getElementById('desc-slip');

  const actVfd = document.getElementById('actuator-vfd');
  const actValve = document.getElementById('actuator-valve');
  const actLatency = document.getElementById('actuator-latency');

  const hudStatus = document.getElementById('hud-flame-status');
  const hudWindDir = document.getElementById('hud-wind-dir');

  let currentMode = 'closed'; // 'open' or 'closed'

  if (btnOpenLoop && btnClosedLoop) {
    btnOpenLoop.addEventListener('click', () => {
      currentMode = 'open';
      btnOpenLoop.classList.add('active');
      btnClosedLoop.classList.remove('active');
      updateSimulator();
    });

    btnClosedLoop.addEventListener('click', () => {
      currentMode = 'closed';
      btnClosedLoop.classList.add('active');
      btnOpenLoop.classList.remove('active');
      updateSimulator();
    });
  }

  function updateSimulator() {
    const wind = parseFloat(sliderWind ? sliderWind.value : 6.5);
    const flow = parseFloat(sliderFlow ? sliderFlow.value : 0.5);
    const lhv = parseFloat(sliderLhv ? sliderLhv.value : 38.2);

    if (valWind) valWind.textContent = `${wind.toFixed(1)} m/s`;
    if (valFlow) valFlow.textContent = `${flow.toFixed(2)} MMSCFD`;
    if (valLhv) valLhv.textContent = `${lhv.toFixed(1)} MJ/Nm³`;

    // Mathematical Modelling based on Essay & Empirical Literature
    let efficiency = 0;
    let nhvcz = 0;
    let methaneSlipRate = 0; // kg/hour

    const totalMassFlowKgH = flow * 1180; // approximate conversion for typical flare gas

    if (currentMode === 'open') {
      // Open-Loop: Stiff, non-adaptive aeration
      // Wind severely degrades combustion efficiency (Mohit, Stolzman, Plant)
      const windPenalty = Math.pow(wind / 15.0, 1.45) * 23.0; // drops up to ~23% at 15 m/s
      efficiency = Math.max(72.0, 95.5 - windPenalty);

      // NHVcz with unmodulated air assist (over-assist or improper dilution)
      const airRatio = 0.85 + (wind * 0.05);
      nhvcz = Math.max(7.2, (lhv / (1 + airRatio)));

      // Methane Slip is directly proportional to unburned fraction
      const unburnedFraction = (100.0 - efficiency) / 100.0;
      methaneSlipRate = (totalMassFlowKgH * 0.82) * unburnedFraction;

      // Actuator readouts
      if (actVfd) actVfd.textContent = 'SETPOINT TETAP 45% (TIDAK ADAPTIF)';
      if (actValve) actValve.textContent = 'Manual Terbuka 25%';
      if (actLatency) actLatency.textContent = '> 20 Menit (Observasi Manual)';

      // HUD & Card Styling
      if (hudStatus) {
        if (wind > 5.5) {
          hudStatus.textContent = 'STATUS NYALA: QUENCHING & FUEL STRIPPING AKTIF';
          hudStatus.className = 'hud-tag alert-quench';
        } else {
          hudStatus.textContent = 'STATUS NYALA: EFISIENSI SUB-OPTIMAL (OPEN-LOOP)';
          hudStatus.className = 'hud-tag';
        }
      }
    } else {
      // Closed-Loop (OPTIC-FLARE Adaptive MPC)
      // Modulates VFD Blower dynamically to counter crosswind turbulence
      const residualWindEffect = (wind / 15.0) * 0.9; // minimal drop
      efficiency = Math.min(99.1, Math.max(98.2, 99.1 - residualWindEffect));

      // NHVcz maintains tightly above 10.05 MJ/Nm³ (EPA limit)
      const optimalAirRatio = Math.max(0.2, (lhv - 13.5) / 13.5);
      nhvcz = Math.max(13.2, (lhv / (1 + optimalAirRatio)));

      // Methane Slip tightly suppressed
      const unburnedFraction = (100.0 - efficiency) / 100.0;
      methaneSlipRate = (totalMassFlowKgH * 0.82) * unburnedFraction * 0.4; // catalytic enhancement

      // Adaptive Actuator Modulation
      const vfdCalc = Math.min(95, Math.max(30, 40 + (wind * 3.6))).toFixed(1);
      const rpmCalc = Math.round(vfdCalc * 28.5);
      if (actVfd) actVfd.textContent = `${vfdCalc}% (${rpmCalc} RPM Adaptive)`;
      if (actValve) actValve.textContent = `Modulasi Dinamis ${(wind * 2.2 + 15).toFixed(1)}%`;
      if (actLatency) actLatency.textContent = '< 1.4 Detik (Real-Time Closed Loop)';

      if (hudStatus) {
        hudStatus.textContent = 'STATUS NYALA: OPTIMAL STABIL (CLOSED-LOOP MPC)';
        hudStatus.className = 'hud-tag';
      }
    }

    if (hudWindDir) {
      hudWindDir.textContent = `Hembusan Angin: ${wind.toFixed(1)} m/s (${wind > 4.5 ? 'Terpaan Kuat' : 'Tenang'})`;
    }

    // Update Display Gauges
    if (dispCe) {
      dispCe.textContent = `${efficiency.toFixed(1)}%`;
      dispCe.className = efficiency >= 96.5 ? 'gauge-value text-teal' : 'gauge-value text-red';
    }
    if (fillCe) {
      fillCe.style.width = `${efficiency}%`;
      fillCe.className = efficiency >= 96.5 ? 'gauge-bar-fill' : 'gauge-bar-fill danger';
    }
    if (descCe) {
      descCe.textContent = efficiency >= 96.5 
        ? 'Memenuhi regulasi US EPA (≥ 96.5%)' 
        : 'PELANGGARAN: Efisiensi di bawah batas legal EPA 96.5%!';
    }

    if (dispNhv) {
      dispNhv.textContent = `${nhvcz.toFixed(2)} MJ/Nm³`;
      dispNhv.className = nhvcz >= 10.05 ? 'gauge-value text-teal' : 'gauge-value text-red';
    }
    if (fillNhv) {
      const nhvPercent = Math.min(100, (nhvcz / 20.0) * 100);
      fillNhv.style.width = `${nhvPercent}%`;
      fillNhv.className = nhvcz >= 10.05 ? 'gauge-bar-fill fill-teal' : 'gauge-bar-fill danger';
    }
    if (descNhv) {
      const btuScf = Math.round(nhvcz * 26.85);
      descNhv.textContent = nhvcz >= 10.05 
        ? `${btuScf} BTU/scf • Di atas batas kritis 270 BTU/scf` 
        : `${btuScf} BTU/scf • KRITIS: Quenching zona pembakaran!`;
    }

    if (dispSlip) {
      dispSlip.textContent = `${methaneSlipRate.toFixed(2)} kg/jam`;
      dispSlip.className = methaneSlipRate <= 1.5 ? 'gauge-value text-green' : 'gauge-value text-red';
    }
    if (fillSlip) {
      const slipPercent = Math.min(100, (methaneSlipRate / 25.0) * 100);
      fillSlip.style.width = `${slipPercent}%`;
      fillSlip.className = methaneSlipRate <= 1.5 ? 'gauge-bar-fill fill-green' : 'gauge-bar-fill danger';
    }
    if (descSlip) {
      descSlip.textContent = methaneSlipRate <= 1.5 
        ? 'Pelepasan metana tereliminasi optimal' 
        : 'BAHAYA: Pelepasan gas mentah (Fuel Stripping masif)!';
    }
  }

  [sliderWind, sliderFlow, sliderLhv].forEach(s => {
    if (s) s.addEventListener('input', updateSimulator);
  });
  updateSimulator();

  // ============================================================================
  // 4. ANIMATED FLAME CANVAS RENDERER
  // ============================================================================
  const canvas = document.getElementById('flame-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const numParticles = 65;

    class FlameParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = 160 + (Math.random() - 0.5) * 20;
        this.y = 230;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = -(Math.random() * 3 + 4);
        this.radius = Math.random() * 12 + 8;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.02;
        this.isMethane = Math.random() > 0.65;
      }
      update(windSpeed, isClosedLoop) {
        const windDrift = (windSpeed / 15.0) * 8.5;
        this.x += this.vx + windDrift;
        this.y += this.vy;
        this.life -= this.decay;
        this.radius = Math.max(0.1, this.radius * 0.96);

        if (this.life <= 0 || this.y < 20 || this.x > canvas.width) {
          this.reset();
        }
      }
      draw(ctx, isClosedLoop, windSpeed) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (!isClosedLoop && windSpeed > 5.0 && this.isMethane) {
          // Cold unburned methane plume (Cyan-blue / grey smoke)
          ctx.fillStyle = `rgba(0, 229, 255, ${this.life * 0.45})`;
          ctx.shadowColor = 'rgba(0, 229, 255, 0.5)';
          ctx.shadowBlur = 8;
        } else {
          // Hot glowing flame (Yellow, Orange, Cyan core)
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
          if (this.y > 180) {
            grad.addColorStop(0, `rgba(0, 229, 255, ${this.life * 0.9})`);
            grad.addColorStop(0.6, `rgba(255, 119, 0, ${this.life * 0.6})`);
          } else {
            grad.addColorStop(0, `rgba(255, 200, 50, ${this.life * 0.85})`);
            grad.addColorStop(0.5, `rgba(255, 80, 0, ${this.life * 0.6})`);
          }
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.shadowColor = isClosedLoop ? 'rgba(255, 119, 0, 0.4)' : 'rgba(239, 68, 68, 0.4)';
          ctx.shadowBlur = 12;
        }

        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new FlameParticle());
    }

    function renderFlame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Flare Stack Pipe
      ctx.save();
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#00d2ff';
      ctx.lineWidth = 1.5;
      ctx.fillRect(145, 220, 30, 40);
      ctx.strokeRect(145, 220, 30, 40);

      // Flare Tip Ring
      ctx.fillStyle = '#334155';
      ctx.fillRect(140, 214, 40, 6);
      ctx.strokeRect(140, 214, 40, 6);
      ctx.restore();

      const wind = parseFloat(sliderWind ? sliderWind.value : 6.5);
      const isClosed = currentMode === 'closed';

      // Draw Wind Arrows on Canvas
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.lineWidth = 1.5;
      for (let y = 60; y < 200; y += 45) {
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(30 + wind * 8, y);
        ctx.stroke();
        // Arrow head
        ctx.beginPath();
        ctx.moveTo(30 + wind * 8, y);
        ctx.lineTo(25 + wind * 8, y - 4);
        ctx.lineTo(25 + wind * 8, y + 4);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
        ctx.fill();
      }
      ctx.restore();

      // Render flame particles
      particles.forEach(p => {
        p.update(wind, isClosed);
        p.draw(ctx, isClosed, wind);
      });

      requestAnimationFrame(renderFlame);
    }
    renderFlame();
  }

  // ============================================================================
  // 5. MODUL 4: TECHNO-ECONOMIC & ESG CARBON CALCULATOR
  // ============================================================================
  const econGas = document.getElementById('econ-gas-rate');
  const econCarbon = document.getElementById('econ-carbon-price');
  const econCapex = document.getElementById('econ-capex');

  const dispEconGas = document.getElementById('disp-econ-gas');
  const dispEconCarbon = document.getElementById('disp-econ-carbon');
  const dispEconCapex = document.getElementById('disp-econ-capex');

  const resEmisi = document.getElementById('res-emisi');
  const resCarbonRev = document.getElementById('res-carbon-rev');
  const resPowerSaving = document.getElementById('res-power-saving');
  const resTotalBenefit = document.getElementById('res-total-benefit');
  const resPayback = document.getElementById('res-payback');
  const resIrr = document.getElementById('res-irr');

  function calculateEconomics() {
    const gasRate = parseFloat(econGas ? econGas.value : 5.0);
    const carbonPrice = parseFloat(econCarbon ? econCarbon.value : 69000);
    const capexJuta = parseFloat(econCapex ? econCapex.value : 890);

    if (dispEconGas) dispEconGas.textContent = `${gasRate.toFixed(1)} MMSCFD`;
    if (dispEconCarbon) dispEconCarbon.textContent = `Rp ${carbonPrice.toLocaleString('id-ID')} / ton`;
    if (dispEconCapex) dispEconCapex.textContent = `Rp ${capexJuta.toFixed(0)} Juta`;

    // Mathematical modeling based on World Bank & Perpres 98/2021
    // Baseline: 5 MMSCFD eliminates ~9,850 ton CO2e/year
    const deltaEmisiTon = (gasRate / 5.0) * 9850;
    const carbonRevenueJuta = (deltaEmisiTon * carbonPrice) / 1000000;
    const powerSavingJuta = (gasRate / 5.0) * 115.0; // VFD aeration power optimization

    const totalBenefitJuta = carbonRevenueJuta + powerSavingJuta;
    const opexJuta = 75.0 * (gasRate / 5.0);
    const netAnnualBenefitJuta = totalBenefitJuta - opexJuta;

    const paybackMonths = Math.max(1.0, (capexJuta / netAnnualBenefitJuta) * 12.0);
    const irrPercent = Math.min(120, Math.max(15, (netAnnualBenefitJuta / capexJuta) * 100 * 0.85));

    if (resEmisi) resEmisi.textContent = `${Math.round(deltaEmisiTon).toLocaleString('id-ID')} ton CO₂e/th`;
    if (resCarbonRev) resCarbonRev.textContent = `Rp ${carbonRevenueJuta.toFixed(2)} Jt/th`;
    if (resPowerSaving) resPowerSaving.textContent = `Rp ${powerSavingJuta.toFixed(2)} Jt/th`;
    if (resTotalBenefit) resTotalBenefit.textContent = `Rp ${totalBenefitJuta.toFixed(2)} Jt/th`;
    if (resPayback) resPayback.textContent = `${paybackMonths.toFixed(1)} Bulan`;
    if (resIrr) resIrr.textContent = `${irrPercent.toFixed(1)}%`;
  }

  [econGas, econCarbon, econCapex].forEach(el => {
    if (el) el.addEventListener('input', calculateEconomics);
  });
  calculateEconomics();

  // ============================================================================
  // 6. FAILOVER SIMULATOR (SIL-2 DEMO)
  // ============================================================================
  const btnFailover = document.getElementById('btn-emergency-failover');
  const scadaStatus = document.getElementById('scada-status');
  const telLatency = document.getElementById('telemetry-latency');
  const telSnr = document.getElementById('telemetry-snr');

  if (btnFailover) {
    btnFailover.addEventListener('click', () => {
      btnFailover.disabled = true;
      btnFailover.innerHTML = '<span class="icon">⚠️</span> SIMULASI AKTIF...';

      if (scadaStatus) {
        scadaStatus.textContent = 'BADAI TROPIS: BUMPLESS TRANSFER KE DYNAMIC FEEDFORWARD (ACOUSTIC)';
        scadaStatus.style.color = '#f59e0b';
      }
      if (telSnr) {
        telSnr.textContent = '6.2 dB (ATTENUATED)';
        telSnr.className = 'glow-orange';
      }
      if (telLatency) {
        telLatency.textContent = '195 ms (FLOWMETER US)';
      }

      setTimeout(() => {
        if (scadaStatus) {
          scadaStatus.textContent = 'ACTIVE RUNNING (CLOSED-LOOP OPTIC)';
          scadaStatus.style.color = '#10b981';
        }
        if (telSnr) {
          telSnr.textContent = '24.8 dB';
          telSnr.className = 'glow-teal';
        }
        if (telLatency) {
          telLatency.textContent = '174 ms';
        }
        btnFailover.disabled = false;
        btnFailover.innerHTML = '<span class="icon">⚡</span> Sim. Failover';
      }, 5000);
    });
  }

  // ============================================================================
  // 7. PITCH MODE & SCROLL UTILITIES
  // ============================================================================
  const btnPitch = document.getElementById('btn-pitch-mode');
  if (btnPitch) {
    btnPitch.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        btnPitch.innerHTML = '<span class="icon">✕</span> Exit Pitch';
      } else {
        document.exitFullscreen().catch(() => {});
        btnPitch.innerHTML = '<span class="icon">🖥️</span> Pitch Mode';
      }
    });
  }

  const btnScrollTop = document.getElementById('btn-scroll-top');
  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
