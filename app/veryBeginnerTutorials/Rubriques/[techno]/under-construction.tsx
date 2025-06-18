import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Truck, Construction } from "lucide-react"

export default function UnderConstruction() {
  return (
    <Alert className="bg-yellow-50 mt-8 border-yellow-400 text-yellow-900">
      <div className="flex items-center gap-3 mb-2">
        <Construction className="w-6 h-6 text-yellow-600" />
        <Truck className="w-6 h-6 text-yellow-600" />
        <AlertTitle className="font-bold text-lg">Site en construction</AlertTitle>
      </div>
      <AlertDescription>
        Cette page est en cours de réalisation. Merci de revenir plus tard !
      </AlertDescription>
    </Alert>
  )
}