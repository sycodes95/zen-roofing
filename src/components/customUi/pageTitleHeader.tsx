interface PageTitleHeaderProps {
  title: string;
}
export default function PageTitleHeader({title} : PageTitleHeaderProps) {
  return (
    <div className="h-full w-full border-b border-jet border-dashed p-2 pl-0">
      <span className="font-display-2 text-4xl text-jet font-bold">{title}</span>
    </div>
  )
}