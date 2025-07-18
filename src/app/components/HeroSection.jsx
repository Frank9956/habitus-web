// components/HeroSection.js
export default function HeroSection() {
  return (
    <div className="h-[89vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl sm:text-7xl font-bold mb-4 drop-shadow-md">
        Grocery Delivery<br />Simplified
      </h1>
      <p className="text-2xl font-semibold mb-8 drop-shadow-md">
        Send Your Handwritten List, We Deliver Same-day.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://wa.me/919266950492?text=Hello%2C%20I%20want%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-md 
    bg-green-600/50 border border-white/30 backdrop-blur-md hover:bg-green-600 transition"
        >
          Send Your List Now
        </a>

        <a
          href="https://wa.me/919266950492?text=Hello%2C%20please%20call%20me%20regarding%20my%20grocery%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg bg-white/20 border border-white/30 hover:bg-white/30 text-white font-semibold rounded-xl transition shadow-md backdrop-blur-md"
        >
          Request a Call
        </a>
      </div>
    </div>
  )
}
