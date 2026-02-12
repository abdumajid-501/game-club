"use client"

import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Edit,
  Timer,
  Trash2,
} from "lucide-react"
import { DeleteItem } from "../DeleteItem/DeleteItem"

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    roomId: string
}

export function RoomsCommand({ open, setOpen, roomId }: Props) {
    const [ShowDeleteModal, setShowDeleteModal] = React.useState(false)
    const handleClick = () => {
        setShowDeleteModal(true),
        setOpen(false)
    }
  return (
      <div className="flex flex-col gap-4">
          <DeleteItem roomId={roomId} open={ShowDeleteModal} setOpen={setShowDeleteModal} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="p-3">
          <CommandList>
            <CommandEmpty>Sozlamalar mavjud emas.</CommandEmpty>
            <CommandGroup className="p-4" heading="Sessiya">
              <CommandItem>
                <Timer />
                <span>Sessiya boshlash.</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Sozlamalar">
              <CommandItem>
                <Edit />
                <span>Tahrirlash</span>
              </CommandItem>
              <CommandItem onSelect={handleClick}>
                <Trash2 className="text-red-800" />
                <span>O'chirish</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
