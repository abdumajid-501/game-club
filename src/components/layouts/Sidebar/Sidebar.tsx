import Menu from "@/components/common/Menu/Menu"
import { Gamepad2 } from "lucide-react"




function Sidebar() {

             

  return (
      <div className="min-w-72 border-r-2 px-2 py-4">
          <h1 className="font-bold text-2xl flex items-center justify-center gap-1 mb-4"><Gamepad2 size={37} /> Game Club</h1>
          <Menu />
    </div>
  )
}

export default Sidebar