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

type DatePickerProps = {
  preferredDate: Date | undefined;
  setPreferredDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export default function DatePicker ({ 
  preferredDate, 
  setPreferredDate
} : DatePickerProps) {
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !preferredDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {preferredDate ? format(preferredDate, "PPP") : <span>Preferred Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={preferredDate}
          onSelect={setPreferredDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}