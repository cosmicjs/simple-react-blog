export default function ArrowRight({ className }: { className?: string }): JSX.Element {
  return (
    <svg height={20} width={20} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7071 6.29291C14.0976 6.68343 14.0976 7.31658 13.7071 7.7071L7.41422 14H25C25.5522 14 26 14.4477 26 15C26 15.5523 25.5522 16 25 16H7.41422L13.7071 22.2928C14.0976 22.6834 14.0976 23.3166 13.7071 23.7072C13.3166 24.0976 12.6834 24.0976 12.2929 23.7072L4.2929 15.7071C3.90236 15.3166 3.90236 14.6834 4.2929 14.2929L12.2929 6.29291C12.6834 5.90236 13.3166 5.90236 13.7071 6.29291Z'
        fill='currentColor'
      />
    </svg>
  );
}
