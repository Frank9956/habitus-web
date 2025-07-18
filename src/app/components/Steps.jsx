"use client";
import Image from 'next/image';

export default function StepsPage() {
  return (
    <div className="min-h-screen text-black bg-transparent">

      {/* SECTION HEADER */}
      <div className="relative h-[30vh] md:h-[25vh] flex items-center justify-center text-center overflow-hidden">
        {/* Glowing Background Text */}
        <h1 className="absolute text-6xl md:text-[10rem] font-extrabold text-black/30 opacity-50 blur-sm pointer-events-none select-none">
          STEPS TO ORDER
        </h1>
        {/* Foreground Title */}
        <h2 className="text-5xl sm:text-8xl md:text-8xl font-extrabold text-[#0000000] z-10 drop-shadow-md">
          STEPS TO ORDER
        </h2>
      </div>

      {/* STEP 1 */}
      <div className=" px-10 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <Image
          src="/List.svg"
          alt="Step 1"
          width={300}
          height={300}
          className="w-full max-w-xs md:max-w-sm drop-shadow-4xl"
        />
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Step 1: <span className="text-[#1AA248]">Write Your List</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Write your grocery list on <span className="text-[#1AA248]">paper</span> or your <span className="text-[#1AA248]">phone</span>. 
            Include <span className="text-[#1AA248]">quantities</span> or preferences if needed.
          </p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className=" px-10 md:px-10 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
        <Image
          src="/Chat.svg"
          alt="Step 2"
          width={300}
          height={300}
          className="w-full max-w-xs md:max-w-sm drop-shadow-4xl"
        />
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Step 2: <span className="text-[#1AA248]">Send It on WhatsApp</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Send us your list via <span className="text-[#1AA248]">WhatsApp</span> through our <span className="text-[#1AA248]">app</span> or <span className="text-[#1AA248]">website</span>. 
            You’ll get <span className="text-[#1AA248]">instant confirmation</span>.
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="pb-10 px-10 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <Image
          src="/Delivery.svg"
          alt="Step 3"
          width={300}
          height={300}
          className="w-full max-w-xs md:max-w-sm drop-shadow-4xl"
        />
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Step 3: <span className="text-[#1AA248]">We Deliver Same-Day</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            We <span className="text-[#1AA248]">deliver</span> to your doorstep 
            <span className="text-[#1AA248]"> same-day</span> – no <span className="text-[#1AA248]">worries</span>, no <span className="text-[#1AA248]">hassle</span>.
          </p>
        </div>
      </div>

    </div>
  );
}
