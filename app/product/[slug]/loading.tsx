export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      <p className="text-2xl text-gray-700 ml-4">Loading product details...</p>
    </div>
  );
}
