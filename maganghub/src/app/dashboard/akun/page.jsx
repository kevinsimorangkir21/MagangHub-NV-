"use client";

import { useState, useEffect } from "react";
import { Mail, Key, Calendar, Activity } from "lucide-react";

export default function AkunPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const current = localStorage.getItem("theme") || "light";
    setTheme(current);
    document.documentElement.classList.toggle("dark", current === "dark");
  }, []);

  const akun = {
    nama: "Kevin Simorangkir",
    email: "kevin@example.com",
    password: "••••••••",
    status: "Aktif",
    lastLogin: "20 Oktober 2025, 10:32",
    joined: "12 September 2025",
  };

  return (
    <div className="space-y-8">
      {/* Judul halaman */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Informasi Akun
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Lihat detail akun dan aktivitas login kamu di bawah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Profil singkat */}
        <div className="bg-white dark:bg-[#1a1f2b] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mb-3"
          />
          <h3 className="text-lg font-semibold">{akun.nama}</h3>
          <p className="text-sm text-gray-500">{akun.email}</p>
          <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full">
            {akun.status}
          </span>
        </div>

        {/* Detail akun */}
        <div className="md:col-span-2 bg-white dark:bg-[#1a1f2b] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm space-y-6">
          {/* 🔹 Info login */}
          <section>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-4">
              Detail Akun
            </h4>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">
                      {akun.email}
                    </p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  Ubah Email
                </button>
              </div>

              {/* Password */}
              <div className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Password
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">
                      {akun.password}
                    </p>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  Ubah Password
                </button>
              </div>
            </div>
          </section>

          {/* 🔹 Aktivitas akun */}
          <section>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-4">
              Aktivitas Akun
            </h4>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex items-center gap-3 p-4">
                <Calendar className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tanggal Bergabung
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    {akun.joined}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <Activity className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Terakhir Login
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 font-medium">
                    {akun.lastLogin}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
