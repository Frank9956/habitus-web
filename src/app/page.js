import Image from 'next/image'
import LanguageToggle from './components/LanguageToggle'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1AA248] to-[#FFE049] text-green-900 px-4 py-6">
      {/* Navbar */}
      <div className="w-full max-w-5xl mx-auto mb-6 flex justify-between items-center px-6 py-3 
        rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        <div className="flex items-center space-x-3">
          <Image src="/Habit-us.png" alt="Habitus" width={40} height={40} />
          <div>
            <div className="font-bold text-lg text-green-900">Habit Us</div>
            <div className="text-xs text-green-800 opacity-80">YOUR GROCERY BUDDY</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-sm text-green-800">Local. Trusted. Delivered.</span>
          <a
            href="https://wa.me/919266950492?text=Hello%2C%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl 
  text-sm text-green-900 font-semibold hover:bg-white/30 transition flex items-center gap-2"
          >
            <span className="hidden sm:inline">Order on</span>
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
            />
          </a>

        </div>
      </div>
      <LanguageToggle />
      <Footer />
    </div>
  )
}
