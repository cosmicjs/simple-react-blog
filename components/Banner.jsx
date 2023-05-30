export default function Banner() {
  return (
    <div className='bg-zinc-100 dark:bg-zinc-900 flex justify-center p-2 space-x-1 text-xs md:text-sm lg:text-base'>
      <span className='text-zinc-800 dark:text-zinc-200'>The source code for this blog is</span>
      <a href='https://github.com/cosmicjs/simple-react-blog' target='_parent' className='underline text-green-500 dark:text-green-300'>
        available on GitHub
      </a>
      .
    </div>
  );
}
