interface ValueProps {
  value: string;
}

export default function Value ({ value } : ValueProps) {
  return (
    <span className="p-4 text-black bg-white bg-opacity-70 rounded-xl z-10 ">
      {value}
    </span>
  )
}