export default function SolutionApproach({ paragraph }) {
  return (
    <section className="bg-[#F4F6F9]">
      <div className="mx-auto max-w-shell px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">
              Notre approche
            </p>

            <h2 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[38px]">
              Une démarche structurée, du conseil à la mise en œuvre
            </h2>

            <div
              className="mt-7 h-[2px] w-14 bg-[#E10600]"
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-8">
            <p className="text-[17px] leading-[1.8] text-[#33405C] md:text-[20px]">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}