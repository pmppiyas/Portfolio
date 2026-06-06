'use client';

import { IReview } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';

const ReviewCard = ({ index, review }: { index: number; review: IReview }) => {
  return (
    <div
      key={index}
      className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] py-4"
    >
      <div className="h-full bg-gray-900/40 backdrop-blur-md text-card-foreground rounded-2xl border border-white/5 p-6 shadow-sm transition-all hover:shadow-xl hover:border-cyan-500/30 flex flex-col justify-between group">
        <div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-cyan-500 text-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              />
            ))}
          </div>
          <h4 className="font-semibold text-xl mb-3 tracking-tight leading-tight text-white group-hover:text-cyan-400 transition-colors">
            {review.heading}
          </h4>
          <p className="text-gray-400 leading-relaxed italic text-sm md:text-base">
            &quot;{review.description}&quot;
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted border border-white/20">
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm leading-none text-white">
              {review.name}
            </span>
            <span className="text-xs text-gray-500 mt-1">{review.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
