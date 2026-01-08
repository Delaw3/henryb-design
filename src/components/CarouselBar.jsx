import { useEffect, useState } from "react";

const images = [
  "https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/Projects/c-building.jpg",
  "https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/Projects/c-sittingroom.jpg",
  "https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/Projects/c-bath.jpg",
  'https://pvjwquzgfkspweijebwb.supabase.co/storage/v1/object/public/henryB-designs/Projects/c-pool.jpg'
];

function CarouselBar() {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl items-center">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className=" w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] mx-auto h-full object-cover shrink-0 transform transition-all duration-500 ease-in-out hover:scale-110 opacity-80 hover:opacity-100"
            alt={`slide-${i}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselBar;