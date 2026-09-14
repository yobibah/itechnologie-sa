"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Details from "../../../../components/ui/evenements/details";
import EventBarnner from "../../../../components/ui/home/event-barnner";
import EvenBarrner from "../../../../components/ui/evenements/event-barnner";

function EventDetailsContent() {
  const searchParams = useSearchParams();
  
  const id = searchParams.get("id");

  return <Details id={id} />;
}

export default function EventDetails() {
  return (
    <> 
    {/* <EvenBarrner/> */}
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-blue-700" />
        </div>
      }
    >
      <EventDetailsContent />
    </Suspense>
    </>
  );
}

