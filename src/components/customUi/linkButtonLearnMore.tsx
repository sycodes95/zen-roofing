import Link from "next/link";

interface LinkButtonLearnMoreProps {
  route: string; 
}
export default function LinkButtonLearnMore({ route } : LinkButtonLearnMoreProps) {
  return (
    <Link href={route} className='p-3 pl-10 pr-10 w-fit text-sm font-bold text-white transition-colors duration-500 bg-zinc-900 h-fit rounded-xl'>Learn More +</Link>
  )
}