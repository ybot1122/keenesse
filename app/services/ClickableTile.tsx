export default function ClickableTile({ title }: { title: string }) {
  return (
    <div className="col-span-1 bg-gray aspect-square flex items-center justify-center px-2">
      <h3 className="text-center text-black">{title}</h3>
    </div>
  );
}
