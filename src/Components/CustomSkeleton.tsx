interface SkeletonProps {
  className?: string; // className es opcional
}

export default function CustomSkeleton({ className = "" }: SkeletonProps) {
  const elems = new Array(17).fill(0);
  const elements = elems.map(
    () => Math.floor(Math.random() * (21 - 12 + 1)) + 12
  );

  return (
    <>
      <div className="container  h-full w-full columns-4 px-4">
        {elements.map((value, index) => {
          
          return (
            <div
              key={index}
              style={{ minHeight: `${value}rem` }}
              className={`bg-gray-200 animate-pulse  mb-3 rounded-lg overflow-hidden ${className}`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
