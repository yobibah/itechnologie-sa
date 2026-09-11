export default function SolutionServices({ services }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">
            Nos expertises
          </p>

          <h2 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[38px]">
            Des solutions adaptées à chaque besoin
          </h2>

          <div
            className="mt-7 h-[2px] w-14 bg-[#E10600]"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="grid gap-10 border-t border-[#DDE3EC] pt-10 lg:grid-cols-12 lg:gap-16"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? 'lg:order-2' : ''
                }`}
              >
                <div className="overflow-hidden bg-[#F4F6F9]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[340px]"
                  />
                </div>
              </div>

              <div
                className={`flex flex-col justify-center lg:col-span-7 ${
                  index % 2 !== 0 ? 'lg:order-1' : ''
                }`}
              >
                <span className="text-[13px] font-semibold tracking-[0.18em] text-[#E10600]">
                  {service.number}
                </span>

                <h3 className="mt-3 text-[26px] font-semibold tracking-tight text-[#0B1A38] md:text-[30px]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[15px] leading-[1.8] text-[#6E7A93] md:text-[16px]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-[#33405C]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#E10600]"
                        aria-hidden="true"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}