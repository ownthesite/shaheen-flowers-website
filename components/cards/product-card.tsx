"use client"

import Image from "next/image"
import { memo } from "react"

type Props = {
  title: string
  image: string
  price?: number
  category?: string
  badge?: string
  priority?: boolean
}

function ProductCard({
  title,
  image,
  price = 45,
  category,
  badge,
  priority = false,
}: Props) {
  return (
    <div className="group relative flex flex-col cursor-pointer">

      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 mb-4">

        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-white px-3 py-1 rounded-full text-xs">
            {badge}
          </div>
        )}

        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex justify-between items-start px-1">
        <div>
          {category && (
            <span className="text-xs text-gray-400">{category}</span>
          )}
          <h3 className="text-base font-medium">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductCard)