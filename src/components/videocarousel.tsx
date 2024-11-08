import Link from "next/link"

import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"

export default function VideoCarousel() {
  const videos = [
    {
      id: 1,
      thumbnail: '/LES_Combustion.mp4',
      title: 'LES Combustion Simulation',
      url: '#'
    },
    {
      id: 2,
      thumbnail: '/Ma5.mp4',
      title: ' Multiphase Hypersonic Simulation',
      url: '#'
    },
    {
      id: 3,
      thumbnail: '/65co2.mp4',
      title: 'DNS Combustion Simulation',
      url: '#'
    }
  ]

  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-5xl"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem key={video.id}>
              <Link
                href={video.url}
                className="block"
                prefetch={false}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <video
                    src={video.thumbnail}
                    width={320}
                    height={180}
                    className="aspect-video object-contain w-full h-full"
                    controls
                    muted
                    playsInline
                    autoPlay
                    loop
                  />
                  <div
                    className="absolute inset-0 flex items-end bg-gradient-to-t
                      from-black/50 to-transparent p-4"
                  >
                    <h3 className="text-white text-sm font-medium line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white
            hover:text-gray-300 dark:text-gray-300
            dark:hover:text-gray-400"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white
            hover:text-gray-300 dark:text-gray-300
            dark:hover:text-gray-400"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
