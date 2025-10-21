"use client";
import { useState } from "react";
import { CheckCircle, Clock, Circle, User, Briefcase } from "lucide-react";

export default function ManajemenStatusLamaran() {
  const [lamaran, setLamaran] = useState([
    {
      id: 1,
      peserta: "Kevin Simorangkir",
      posisi: "Frontend Developer",
      perusahaan: "Telkom Indonesia",
      tahap: 2, // 0 = dikirim, 1 = seleksi, 2 = wawancara, 3 = hasil akhir
      tanggal: ["12 Okt 2025", "14 Okt 2025", "18 Okt 2025", "-"],
    },
    {
      id: 2,
      peserta: "Aulia Rahma",
      posisi: "UI/UX Designer",
      perusahaan: "BRI Digital",
      tahap: 3,
      tanggal: ["10 Okt 2025", "12 Okt 2025", "15 Okt 2025", "20 Okt 2025"],
    },
  ]);

  const tahapList = [
    "Lamaran Dikirim",
    "Seleksi Administrasi",
    "Wawancara",
    "Hasil Akhir",
  ];

  const ubahTahap = (id, tahapBaru) => {
    setLamaran((prev) =>
      prev.map((l) => (l.id === id ? { ...l, tahap: tahapBaru } : l))
    );
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Manajemen Status Lamaran
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Lihat dan ubah progress tahapan lamaran peserta.
        </p>
      </div>

      {lamaran.map((item) => (
        <div
          key={item.id}
          className="p-6 rounded-2xl bg-white dark:bg-[#141a23] border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          {/* Header Peserta */}
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <User className="w-5 h-5" /> {item.peserta}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {item.posisi} — {item.perusahaan}
              </p>
            </div>

            <div>
              <select
                value={item.tahap}
                onChange={(e) => ubahTahap(item.id, Number(e.target.value))}
                className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#1a1f2b] text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              >
                {tahapList.map((t, i) => (
                  <option key={i} value={i}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Progress Step */}
          <div className="flex flex-wrap justify-between items-center mt-6 relative">
            {tahapList.map((tahap, i) => {
              const isActive = i <= item.tahap;
              const isCurrent = i === item.tahap;

              return (
                <div key={i} className="flex flex-col items-center flex-1 text-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2 mb-2 ${
                      isActive
                        ? i === 3
                          ? "border-gray-500 text-gray-500"
                          : isCurrent
                          ? "border-yellow-400 text-yellow-400"
                          : "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-600 text-gray-500"
                    }`}
                  >
                    {isActive ? (
                      isCurrent ? (
                        <Clock className="w-5 h-5" />
                      ) : (
                        <CheckCircle className="w-5 h-5" />
                      )
                    ) : (
                      <Circle className="w-5 h-5 opacity-70" />
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-200 dark:text-gray-100">
                    {tahap}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.tanggal[i] || "-"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
