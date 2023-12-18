interface PageTitleHeaderProps {
  title: string;
  description?: string;
}
export default function PageTitleHeader({
  title,
  description
} : PageTitleHeaderProps) {
  return (
    <div className="h-full w-full p-2 pl-0 flex flex-col gap-2">
      <span className="font-display-2 text-4xl text-jet ">{title}</span>
      {
      description && 
      <span className="text-sm">{description}</span>
      }
    </div>
  )
}