import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="loading" src="/logo (1).png" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        Your request is processing...
      </p>
      <p className="text-sm text-muted-foreground">Fetching API...</p>
      <p className="text-sm text-muted-foreground">
        Retriving from database...
      </p>
    </div>
  );
};
