import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithRef<'button'>;

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-blue-800 text-white font-semibold p-2 rounded disabled:bg-blue-200',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
