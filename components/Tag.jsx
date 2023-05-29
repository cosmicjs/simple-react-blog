export default function Tag({children}) {
  return (
    <div className="flex bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 justify-center px-2 py-1 rounded-full text-cyan-600 dark:text-cyan-300">
      {children}
    </div> 
  )
}