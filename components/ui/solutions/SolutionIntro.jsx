import { ArrowRightIcon } from 'lucide-react'

export default function SolutionIntro({
  label,
  title,
  paragraphs,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">
              {label}
            </p>

            <h2 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[38px]">
              {title}
            </h2>

            <div
              className="mt-7 h-[2px] w-14 bg-[#E10600]"
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(0, 24)}`}
                  className={
                    index === 0
                      ? 'text-[17px] leading-[1.75] text-[#33405C] md:text-[19px]'
                      : 'text-[15px] leading-[1.8] text-[#6E7A93] md:text-[16px]'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border border-[#DDE3EC] px-6 py-3.5 text-[13px] font-semibold text-[#0B1A38] transition-colors duration-150 ease-institutional hover:border-[#0B1A38] hover:bg-[#0B1A38] hover:text-white"
            >
              Échanger avec un expert

              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-institutional group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}