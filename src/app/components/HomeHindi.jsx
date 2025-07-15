import Image from 'next/image'
export default function HomeHindi() {
    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-900">
                    किराना डिलीवरी<br />अब और आसान
                </h1>
                <p className="text-green-800">हाथ से लिखी लिस्ट भेजें, हम उसी दिन डिलीवर करते हैं।</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
                <Card iconSrc="/icons/list.svg" title="लिस्ट की फोटो भेजें" />
                <Card iconSrc="/icons/whatsapp.svg" title="व्हाट्सएप पर भेजें" />
                <Card iconSrc="/icons/delivery.svg" title="उसी दिन डिलीवरी" />
            </div>

            <h2 className="text-xl font-semibold text-center mb-4 text-green-900">Habit Us क्यों ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <Card iconSrc="/icons/trust.svg" title="भरोसे पर आधारित ऑर्डरिंग" />
                <Card iconSrc="/icons/discount.svg" title="नियमित छूट" />
                <Card iconSrc="/icons/fast.svg" title="तेज़, उसी दिन डिलीवरी" />
            </div>

            <div className="text-center text-green-800">
                <p className="text-sm mb-2">ऑर्डर देने के लिए ऐप की ज़रूरत नहीं — सिर्फ व्हाट्सएप करें।</p>
                <a
                    href="https://wa.me/919266950492?text=नमस्ते%2C%20मैं%20एक%20ऑर्डर%20देना%20चाहता%2Fचाहती%20हूँ।" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-white/20 border border-white/30 
              backdrop-blur-md rounded-xl hover:bg-white/30 text-sm text-green-900 font-semibold transition"
                >
                    अभी लिस्ट भेजें
                </a>
            </div>
        </>
    )
}
function Card({ iconSrc, title }) {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-white/20 
      backdrop-blur-md rounded-2xl shadow-md border border-white/30 text-center">
            <Image
                src={iconSrc}
                alt={title}
                width={48}
                height={48}
                className="mb-2"
            />
            <div className="text-green-900 font-medium">{title}</div>
        </div>
    )
}

