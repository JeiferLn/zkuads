"use client";

import React, { useState, useEffect, useRef } from "react";
import LocaleIcon from "./LocaleIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import Icons from "../Icons";

// Tipo para manejar el set de claves seleccionadas
type LocaleSet = Set<string>;

const LocaleSwitcher: React.FC = () => {
  const activeLocale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locales = ["en", "es", "pt"];
  const [selectedKeys] = useState<LocaleSet>(new Set([activeLocale || "en"])); // Usando un tipo explícito para el Set

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const languageNames: Record<string, string> = {
    en: "English",
    es: "Español",
    pt: "Português",
  }; 

  // Definición del ref con el tipo HTMLElement o null
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Manejador de eventos con el tipo adecuado para TypeScript
    const handleClickOutside = (event: MouseEvent) => {
      // Verificación del tipo de evento y referencia actual
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Asignar el manejador con la comprobación de tipo
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full inline-grid items-center">
      <motion.div
        className="px-1 py-1 group relative bg-transparent rounded-full cursor-pointer duration-200 inline-flex justify-center mr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LocaleIcon locale={selectedValue} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed w-screen h-screen top-0 left-0 bg-black/40"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              ref={dropdownRef}
              className="p-2 bg-degrade-dark rounded-xl border-none absolute right-[8%] top-[8%] mt-2 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {locales.map((locale) => (
                <motion.div
                  key={locale}
                  className="p-2 min-w-40 rounded-lg duration-200 cursor-pointer flex items-center hover:bg-[#333]"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = `/${locale}`;
                  }}
                >
                  <LocaleIcon locale={locale} />
                  <p className="ml-3">{languageNames[locale]}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocaleSwitcher;