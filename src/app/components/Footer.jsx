import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-16 bg-white/20 backdrop-blur-md border-t border-white/30 text-green-900 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">

        {/* Left - Copyright */}
        <div className="text-center sm:text-left w-full sm:w-auto">
          © {new Date().getFullYear()} <strong>Habit Us</strong>. All rights reserved.
        </div>

        {/* Right - Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-6">
          <a
            href="https://wa.me/919266950492?text=Hello%2C%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:text-green-800 transition"
          >
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/habitus.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:text-green-800 transition"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            Instagram
          </a>

          <a
            href="https://drive.google.com/file/d/1fIgqsIWijbOu_ittCDiqsi4LU0F8SUpO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-800 transition"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
