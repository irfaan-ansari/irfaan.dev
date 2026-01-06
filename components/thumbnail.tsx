"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BlogThumbnail } from "@/lib/types";

const Thumbnail = ({
  src,
  w,
  h,
  alt,
  loading = "eager",
  className,
}: BlogThumbnail) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={loading}
      className={cn(
        "size-full object-cover opacity-0 rounded-lg transition duration-500 data-[loaded=true]:opacity-100",
        className
      )}
      data-loaded={!isLoading}
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default Thumbnail;
