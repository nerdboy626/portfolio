import { GiJourney } from "react-icons/gi";

export default function Bio() {
  return (
    <section className="section bg-background-alt">
      <div className="container grid gap-16 lg:grid-cols-[300px_1fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Get To Know Me
          </p>
          <h2 className="mb-5 text-3xl md:text-4xl">My Journey</h2>
          <GiJourney className="h-48 w-48 text-primary/70" />
        </div>
        <div className="space-y-6">
          <p className="mb-6 text-lg leading-8">Education...</p>
          <p className="mb-6 text-lg leading-8">Post-Graduation...</p>
          <p className="mb-6 text-lg leading-8">Hopes and goals...</p>
          <p className="mb-6 text-lg leading-8">Beyond coding...</p>
        </div>
      </div>
    </section>
  );
}
