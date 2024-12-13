interface SkeletonProps {
  className?: string; // className es opcional
}

export default function CustomSkeleton({ className = "" }: SkeletonProps) {
  return (
    <>
      <div className="container flex flex-row justify-center flex-wrap gap-3 mx-auto h-full w-full px-4">
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
        <div
          className={`bg-gray-200 animate-pulse rounded min-h-[20rem] w-[15rem] ${className}`}
        ></div>
      </div>
    </>
  );
}
