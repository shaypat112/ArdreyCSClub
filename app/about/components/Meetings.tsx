import { Calendar, MapPin } from "lucide-react";

export function Meetings() {
  return (
    <section className="container py-20">
      <h2 className="mb-6 text-3xl font-bold">Meetings</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5" />
          <span>Weekly Club Meetings</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5" />
          <span>Ardrey Kell High School</span>
        </div>
      </div>
    </section>
  );
}
