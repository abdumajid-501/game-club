import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDeleteRoom } from "@/hooks/useDeleteRoom"
import { Trash2Icon } from "lucide-react"

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    roomId: string
}

export function DeleteItem({ open, setOpen, roomId }: Props) {
    const {deleteRoom} = useDeleteRoom()
    const handleDelete = () => {
    deleteRoom(roomId);
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Xonani o'chirish?</AlertDialogTitle>
            <AlertDialogDescription>
                Agar element o'chirilsa uni qayta tiklab bo'lmaydi!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Bekor qilish</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} variant="destructive">O'chirish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
