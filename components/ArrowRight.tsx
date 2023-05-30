export default function ArrowRight({ className }: { className?: string }): JSX.Element {
  return (
    <svg width='22' height='18' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.2929 0.292905C12.6834 -0.097635 13.3166 -0.097635 13.7071 0.292905L21.7072 8.2929C22.0976 8.68342 22.0976 9.31658 21.7072 9.7071L13.7071 17.7072C13.3166 18.0976 12.6834 18.0976 12.2929 17.7072C11.9024 17.3166 11.9024 16.6834 12.2929 16.2928L18.5858 10H1C0.44772 10 0 9.55228 0 9C0 8.44772 0.44772 8 1 8H18.5858L12.2929 1.7071C11.9024 1.31658 11.9024 0.683425 12.2929 0.292905Z'
        fill='currentColor'
      />
    </svg>
  );
}
