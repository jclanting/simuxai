import { Cog, ImageIcon, Puzzle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import PricingCard from "@/components/pricingcard"
import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

import Feature from "./feature"

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
        <Image
          width={1024}
          height={632}
          alt="Demo gif"
          src="/demo.gif"
        />
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <PricingCard
            title="Basic"
            description="For individuals starting out with essential tools for basic simulation projects"
            price="TBA"
            features={[
              '1 domain',
              '100GB of disk space',
              'Unlimited bandwidth',
              'Shared SSL certificate',
              '10 email addresses',
              '24/7 support'
            ]}
          />
          <PricingCard
            title="Business"
            description="Ideal for small teams managing multiple simulation needs"
            price="TBA"
            features={[
              '5 domains',
              '500GB of disk space',
              'Unlimited bandwidth',
              'Shared SSL certificate',
              '30 email addresses',
              '24/7 support'
            ]}
          />
          <PricingCard
            title="Professional"
            description="Advanced features for businesses scaling their simulations"
            price="TBA"
            features={[
              '10 domains',
              '2GB of disk space',
              'Unlimited bandwidth',
              'Shared SSL certificate',
              '50 email addresses',
              '24/7 support'
            ]}
          />
          <PricingCard
            title="Extended"
            description="Robust resources and support for large-scale enterprise projects"
            price="TBA"
            features={[
              '15 domains',
              '10GB of disk space',
              'Unlimited bandwidth',
              'Shared SSL certificate',
              '100 email addresses',
              '24/7 support'
            ]}
          />
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
      {/* <InfiniteCarousel /> */}
    </div>
  )
}
