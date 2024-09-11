export default function FeedSkeleton() {
  return (
    <div className="columns-2 gap-2 md:columns-3 md:gap-4 lg:columns-4">
      {Array(24)
        .fill(null)
        .map((_, i) => i)
        .map((item) => (
          <div
            key={item}
            className="w-full bg-gray-300 shadow rounded-md mb-2 md:mb-4 dark:bg-zinc-800"
            style={{ height: `${Math.round(Math.random() * 100 + 200)}px` }}
          ></div>
        ))}
    </div>
  );
}
