'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-white to-sky-100"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col items-center gap-6"
          >
            <Image src="/logo2.png" alt="Cafe Cosmo Logo" width={90} height={90} className="rounded-full shadow-lg" />
            <h1 className="text-3xl font-extrabold bg-gradient-to-tr from-amber-500 via-pink-500 to-sky-500 bg-clip-text text-transparent tracking-tight text-center">Café Cosmo</h1>
            <p className="text-gray-500 text-lg font-medium">Loading your experience...</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-2 rounded-full bg-gradient-to-r from-amber-400 via-pink-400 to-sky-400 mt-6 shadow-inner"
              style={{ maxWidth: 220 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-2 rounded-full bg-gradient-to-r from-amber-400 via-pink-400 to-sky-400"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  );
}