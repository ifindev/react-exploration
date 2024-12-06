type Props = React.ComponentPropsWithRef<'input'> & {
  label: string;
};

export default function FormInput({ label, ...rest }: Props) {
  return (
    <div className="grid grid-cols-5 items-center gap-2">
      <label className="col-span-1" htmlFor={rest.id}>
        {label}:
      </label>
      <input
        className="col-span-4 border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-500"
        {...rest}
      />
    </div>
  );
}
