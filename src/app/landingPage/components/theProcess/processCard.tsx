import { ProcessCard } from "./theProcess";

interface ProcessCardProps {
  card: ProcessCard;
  index: number;
}

export default function ProcessCard ({card, index} : ProcessCardProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-8 p-8 text-jet bg-white bg-opacity-30  h-full border-4 border-jet border-opacity-30 ' key={index} >
      {card.icon}
      <span className='font-semibold font-display-2  text-center h-12'>{card.description}</span>
    </div>
  )
}