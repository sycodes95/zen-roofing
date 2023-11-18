import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar as CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"

import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { InspectionFormData } from "./bookInspection"

type DatePickerProps = {
  inspectionFormData: InspectionFormData;
  setInspectionFormData: React.Dispatch<React.SetStateAction<InspectionFormData>>
}

export default function DatePicker ({ 
  inspectionFormData, 
  setInspectionFormData
} : DatePickerProps) {
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !inspectionFormData.preferredDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {inspectionFormData.preferredDate ? format(inspectionFormData.preferredDate, "PPP") : <span>Preferred Date (optional)</span>}
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-none">
        <Calendar
          mode="single"
          selected={inspectionFormData.preferredDate}
          onSelect={(newDate)=> setInspectionFormData(prev => { return { ...prev, preferredDate: newDate}})}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}