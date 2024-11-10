import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Main container */}
      <div className="bg-pink-600 flex flex-col lg:flex-row justify-around items-center lg:items-start p-4 lg:py-8 space-y-8 lg:space-y-0">
        {/* Left side content */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-lg">
          <h1 className="font-pacifico font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl mb-4">
            ice cream
          </h1>
          <h2 className="text-white font-base text-2xl sm:text-3xl lg:text-5xl mb-2">
            Strawberry cone
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-md mt-2">
            Embark on a culinary journey of delight as you immerse yourself in our artisan-crafted ice cream collection — each flavour a story, each scoop an unforgettable chapter in your sweet odyssey!
            <br />
            Indulge in a world of imagination, where every scoop unveils a new taste adventure! Choose your favourite.
          </p>

          {/* Smaller images under the paragraph */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
            {/* Each image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Image 
                src="/ice-1.png" 
                alt="Ice 1"
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Image 
                src="/ice-2.png" 
                alt="Ice 2"
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Image 
                src="/ice-3.png" 
                alt="Ice 3"
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Image 
                src="/ice-4.png" 
                alt="Ice 4"
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right side large image */}
        <div className="flex justify-center lg:justify-end">
          <Image 
            src="/ice-cream.png" 
            alt="Ice Cream"
            width={330}
            height={330} 
            className="object-contain w-full h-auto max-w-xs lg:max-w-md"
          />
        </div>
      </div>
    </main>
  );
}
