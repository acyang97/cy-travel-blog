"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import ScrollUp from "@/components/ScrollUp";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <ScrollUp />
      <LoadingSpinner />
    </div>
  );
}
