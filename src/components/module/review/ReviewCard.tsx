import { IReview } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ index, review }: { index: string; review: IReview }) => {
  return (
    <div
      key={index}
      className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
    >
      <div className="h-full text-card-foreground rounded-xl border border-border p-6 shadow-sm transition-all hover:shadow-md flex flex-col justify-between">
        <div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <h4 className="font-semibold text-xl mb-3 tracking-tight leading-none">
            {review.heading}
          </h4>
          <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
            &quot;{review.description}&quot;
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted border border-border">
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm leading-none">
              {review.name}
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              {review.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
