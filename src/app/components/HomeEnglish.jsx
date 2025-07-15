import Image from 'next/image'

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

export default function HomeEnglish() {
    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-900">
                    Grocery Delivery<br />Simplified
                </h1>
                <p className="text-green-800">Send your handwritten list, we deliver same-day.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
                <Card iconSrc="/icons/list.svg" title="Snap Your List" />
                <Card iconSrc="/icons/whatsapp.svg" title="Send on WhatsApp" />
                <Card iconSrc="/icons/delivery.svg" title="We Deliver Same Day" />

            </div>

            <h2 className="text-xl font-semibold text-center mb-4 text-green-900">Why Choose Habitus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <Card iconSrc="/icons/trust.svg" title="Trust-Based Ordering" />
                <Card iconSrc="/icons/discount.svg" title="Regular Discount" />
                <Card iconSrc="/icons/fast.svg" title="Fast, Same-Day Delivery" />
            </div>

            <div className="text-center text-green-800">
                <p className="text-sm mb-2">Ready to order? Skip the app - Just WhatsApp us.</p>
                <a
                    href="https://wa.me/919266950492?text=Hello%2C%20I%20want%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-white/20 border border-white/30 
              backdrop-blur-md rounded-xl hover:bg-white/30 text-sm text-green-900 font-semibold transition"
                >
                    Send Your List Now
                </a>
            </div>
        </>
    )
}

