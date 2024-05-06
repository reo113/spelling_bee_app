export default function InputError({ error }: { error: string }) {
  return (
    <span className="text-sm font-semibold uppercase text-red-500">
      {error}
    </span>
  );
}
