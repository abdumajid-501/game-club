"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import RoomsModalForm from "../RoomsModalForm/RoomsModalForm"
import { useState } from "react";



export function RoomsModal() {
    const [showModal, setShowModal] = useState(false)
  return (
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogTrigger className="ml-auto" asChild>
                  <Button>
                      <Plus />
                      Xona qo'shish
                  </Button>
        </DialogTrigger>
          {showModal && <RoomsModalForm setShowModal={setShowModal} />}
    </Dialog>
  )
}
