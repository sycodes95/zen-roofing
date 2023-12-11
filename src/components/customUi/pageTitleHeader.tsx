interface PageTitleHeaderProps {
  title: string;
}
export default function PageTitleHeader({title} : PageTitleHeaderProps) {
  return (
    <div className="h-full w-fit">
      <span className="font-display-2 text-4xl text-jet font-bold">{title}</span>
    </div>
  )
}