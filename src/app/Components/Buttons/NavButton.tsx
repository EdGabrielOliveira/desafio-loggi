"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownOption {
  label: string;
  url: string;
}

interface DropdownProps {
  name: string;
  link?: string;
  options?: DropdownOption[];
}

export default function Dropdown({ name, options, link }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left font-sans font-semibold"
    >
      <a
        onClick={() => setIsOpen(!isOpen)}
        className={`flex transition-all items-center gap-2 hover:text-sky-500 text-gray-700 cursor-pointer
        ${isOpen && options ? "text-sky-500" : ""}`}
        href={link}
      >
        {name}
        <FiChevronDown
          className={`transition-transform duration-300 font-semibold ${
            isOpen ? "rotate-180" : "rotate-0"
          } ${options ? "block" : "hidden"}`}
        />
      </a>
      {isOpen && (options?.length ?? 0) > 0 && (
        <div className="absolute mt-4 w-[16rem] rounded-lg shadow-lg ">
          <ul className="py-2 text-gray-500 shadow-md shadow-gray-600 rounded-lg bg-gray-100">
            {options?.map((option) => (
              <a
                href={option.url}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex hover:text-sky-500"
                key={option.label}
              >
                {option.label}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
