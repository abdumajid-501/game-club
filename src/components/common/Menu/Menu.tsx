"use client";

import { ChartNoAxesColumn, DoorOpen, LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface Menuitem {
    text: string
    href: string
    icon: LucideIcon
}

const menu: Menuitem[] = [
    {
        text: "Asosiy",
        href: "/dashboard",
        icon: ChartNoAxesColumn
    },
    {
        text: "Xonalar",
        href: "/dashboard/rooms",
        icon: DoorOpen
    }
]

function Menu() {
    const pathname = usePathname()
    
  return (
    <nav>
              <ul className="flex flex-col gap-1.5">
                  {menu.map(menuitem => {
                      let Icon = menuitem.icon
                      return <li key={menuitem.href}>
                          <Link href={menuitem.href}>
                              <Button className="w-full justify-start" variant={pathname == menuitem.href ? "default" : "outline"}>
                                <Icon />
                                <span>{ menuitem.text }</span>
                              </Button>
                          </Link>
                      </li>
                  })}
              </ul>
          </nav>
  )
}

export default Menu