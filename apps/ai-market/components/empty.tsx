import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" src="/empty.png" fill />
      </div>
      <h1 className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-2 rounded-lg">
        {label}
      </h1>
    </div>
  );
};
