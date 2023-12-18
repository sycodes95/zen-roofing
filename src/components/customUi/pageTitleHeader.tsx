interface PageTitleHeaderProps {
  title: string;
  description?: string;
}
export default function PageTitleHeader({
  title,
  description
} : PageTitleHeaderProps) {
  return (
    <div className="h-full w-full p-2 pl-0 flex flex-col">
      <div className="p-2  w-fit h-fit flex border-jet">
        <span className="font-display-2 text-4xl  mt-1 w-fit">{title}</span>
      </div>
      {
      description && 
      <div className="p-2  rounded-xl w-fit h-full flex items-center">
        <span className="text-sm h-full font-inter-tight">{description}</span>
      </div>
      }
    </div>
  )
}