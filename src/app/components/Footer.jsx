export default function Footer() {
    return (
      <footer className="mt-16 bg-white/20 backdrop-blur-md border-t border-white/30 text-green-900 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong>Habitus</strong>. All rights reserved.
          </div>
  
          <div className="flex gap-4">
            <a
             href="https://wa.me/919266950492?text=Hello%2C%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-green-800 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/habitus.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-green-800 transition"
            >
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
    )
  }
  