import CurrentAffair from "@/components/CurrentAffair";

export default function Page() {

  return (
    <>
      <section className="relative md:pt-32">
        <div className="container-fluid relative">
          <div className="grid md:grid-cols-3">
            <CurrentAffair
              title="Current Affairs (English)"
              image="https://radianbooks.in/img/current-af/eng.png"
              link="/current-affair/english"
            />
            <CurrentAffair
              title="Current Affairs (हिन्दी)"
              image="https://radianbooks.in/img/current-af/hi.png"
              link="/current-affair/hindi"
            />
          </div>
        </div>
      </section>
    </>
  );
}