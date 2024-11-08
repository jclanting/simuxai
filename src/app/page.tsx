import { Cog, ImageIcon, Puzzle } from "lucide-react"
import dynamic from "next/dynamic"
// import Image from "next/image"
import Link from "next/link"

import PricingCard from "@/components/pricingcard"
import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

import Feature from "./feature"

// Dynamically import VideoCarousel to disable SSR
const VideoCarousel = dynamic(async () => await import("@/components/videocarousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Your all-in-one tool for seamless CAE solutions
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Effortlessly create, execute, and visualize
          complex simulations with minimal setup, guided by
          our AI-driven, multi-modal support system.
        </Typography>
        <Link href="https://simuxai.com/" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        {/* Uncomment if you want to include an image */}
        {/* <Image
          width={1024}
          height={632}
          alt="Demo gif"
          src="/demo.gif"
        /> */}
        <VideoCarousel />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-4xl" variant="h1">
            Build, process, and visualize with ease
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Cog size={24} />}
              headline="Full CAE support"
              description="Empowers CAE at every stage with tools and AI insights to optimize and accelerate simulation workflows"
            />
            <Feature
              icon={<Puzzle size={24} />}
              headline="End-to-end solutions"
              description="Automates the entire simulation workflow from setup to post-processing, allowing you to focus on results"
            />
            <Feature
              icon={<ImageIcon size={24} />}
              headline="Multi-modal interactive"
              description="Engages with both text and images to deliver seamless post-processed solutions for your simulation needs"
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          <div className="max-w-sm mx-auto">
            <PricingCard
              title="Basic"
              description="For individuals starting out with essential tools for basic simulation projects"
              price="TBA"
              features={[]}
            />
          </div>
          <div className="max-w-sm mx-auto">
            <PricingCard
              title="Business"
              description="Ideal for small teams managing multiple simulation needs"
              price="TBA"
              features={[]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
