export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-dvh overflow-y-auto p-4 flex flex-col gap-4 bg-gray-100">
        <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-full bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="max-h-dvh overflow-y-auto p-4 gap-4 flex flex-col md:col-span-2">
        <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-16 bg-gray-200 rounded-lg w-1/2 animate-pulse" />
        <div className="h-16 bg-gray-200 rounded-lg w-1/3 animate-pulse" />
      </div>
    </div>
  );
}
