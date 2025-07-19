import Image from 'next/image';

export default function WhyHabitus() {
    const features = [
        {
            title: 'Trust',
            description: 'Built on community and relationships with local kirana stores you already trust.',
            image: '/icons/trust.gif',
        },
        {
            title: 'Fast & Reliable',
            description: 'We ensure groceries arrive on time, every time—whether urgent or scheduled.',
            image: '/icons/fast.gif',
        },
        {
            title: 'Easy Convenience',
            description: 'Send handwritten lists on WhatsApp. No app needed. It’s as simple as texting a friend.',
            image: '/icons/easy.gif',
        },
        {
            title: 'Discounts',
            description: 'Enjoy special prices and savings without compromising on quality or speed.',
            image: '/icons/discount.gif',
        },
    ];

    return (
        <div className="relative mt-10 mb-16 w-full text-center flex flex-col items-center">
            {/* Faded background text */}
            <h1
                className="absolute text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-extrabold opacity-50 blur-sm pointer-events-none select-none leading-none"
                style={{ color: '#1AA24833' }}
            >
                WHY HABITUS
            </h1>

            {/* Foreground heading */}
            <h2 className="text-5xl sm:text-8xl md:text-8xl font-extrabold relative z-10" style={{ color: '#1AA248' }}>
                WHY HABITUS?
            </h2>

            {/* Cards */}
            <div className="relative z-10 w-full sm:grid sm:grid-cols-2 gap-6 max-w-4xl my-15 mx-auto sm:overflow-visible overflow-x-auto flex sm:flex-none px-2 no-scrollbar">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/30 hover:bg-white/50 backdrop-blur-md border border-green-900/20 rounded-2xl px-6 py-8 text-center transition shadow-lg sm:max-w-[100%] max-w-[60%] sm:min-w-0 mr-4 sm:mr-0 flex-shrink-0 no-scrollbar">
                        <div className="flex justify-center mb-4">
                            <Image src={item.image} alt={item.title} width={60} height={60} />
                        </div>
                        <h3 className="text-2xl text-[#1AA248] font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-black/80">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
