'use client'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: '/',
      title: 'Services'
      // openInNewTab: true
    },
    // { href: '#pricing', title: 'Features' },
    {
      href: '/',
      title: 'Pricing'
    },
    {
      href: '/',
      title: 'About Us'
    },
    {
      href: '/',
      title: 'Contact'
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img src="/logo.png" className="mr-3 w-auto h-16" />
      <Typography className="!text-white !text-base font-medium ">
        SimuXAI
      </Typography>
    </Link>
  )

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link href="/" target="_blank">
        <Typography variant="p">Login</Typography>
      </Link>
      <Link href="/" target="_blank">
        <Button size="tiny" color="ghost">
          <Typography variant="p" className="text-black">
            Sign Up
          </Typography>
        </Button>
      </Link>
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-auto h-auto px-4 py-4 items-center justify-center
          w-full border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
