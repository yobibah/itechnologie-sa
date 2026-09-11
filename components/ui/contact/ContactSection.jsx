'use client'

import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status.message) {
      setStatus({
        type: '',
        message: '',
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)

    setStatus({
      type: '',
      message: '',
    })

    try {
      const form = new FormData()

      form.append(
        'access_key',
        'de15eb6a-c4bf-473a-a984-3401d85d35f8'
      )

      form.append(
        'subject',
        `Nouveau message depuis le site - ${formData.sujet}`
      )

      form.append(
        'from_name',
        'Site web iTECHNOLOGIE'
      )

      form.append(
        'nom',
        formData.nom
      )

      form.append(
        'email',
        formData.email
      )

      form.append(
        'telephone',
        formData.telephone
      )

      form.append(
        'sujet',
        formData.sujet
      )

      form.append(
        'message',
        formData.message
      )

      form.append(
        'botcheck',
        ''
      )

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: form,
        }
      )

      const result = await response.json()

      if (result.success) {
        setStatus({
          type: 'success',
          message:
            'Votre message a bien été envoyé. Notre équipe vous répondra dans les meilleurs délais.',
        })

        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message:
            result.message ||
            'Une erreur est survenue lors de l’envoi de votre message.',
        })
      }
    } catch (error) {
      console.error('Erreur formulaire contact :', error)

      setStatus({
        type: 'error',
        message:
          'Impossible d’envoyer votre message pour le moment. Veuillez réessayer plus tard.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">
            Parlons de votre projet
          </p>

          <h2 className="mt-5 text-[30px] font-semibold leading-[1.15] tracking-tight text-[#0B1A38] md:text-[38px]">
            Nous sommes à votre écoute
          </h2>

          <div
            className="mt-7 h-[2px] w-14 bg-[#E10600]"
            aria-hidden="true"
          />

          <p className="mt-6 text-[16px] leading-[1.8] text-[#6E7A93]">
            Une question, un projet ou un besoin d’accompagnement ?
            Contactez notre équipe et échangeons sur vos besoins.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex min-h-[620px] flex-col overflow-hidden border border-[#DDE3EC] bg-[#F4F6F9]">
            <div className="relative flex-1">
              <iframe
                title="Localisation ITECHNOLOGIE"
                src="https://www.google.com/maps?q=12.3069993,-1.5296662&z=17&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-[#0B1A38] px-6 py-6 md:px-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#E10600]">
                  <MapPin
                    className="h-5 w-5 text-white"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Notre adresse
                  </p>

                  <p className="mt-2 text-[15px] leading-relaxed text-white">
                    Cité Azimmo, Ouaga 2000
                    <br />
                    Ouagadougou, Burkina Faso
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#DDE3EC] bg-white p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E10600]">
                Envoyez-nous un message
              </p>

              <h3 className="mt-3 text-[25px] font-semibold tracking-tight text-[#0B1A38]">
                Parlons de vos besoins
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-2 block text-[13px] font-semibold text-[#0B1A38]"
                  >
                    Nom complet
                  </label>

                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="h-12 w-full border border-[#DDE3EC] bg-[#F8F9FB] px-4 text-[14px] text-[#0B1A38] outline-none transition-colors placeholder:text-[#9AA4B5] focus:border-[#0B1A38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold text-[#0B1A38]"
                  >
                    Adresse e-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="h-12 w-full border border-[#DDE3EC] bg-[#F8F9FB] px-4 text-[14px] text-[#0B1A38] outline-none transition-colors placeholder:text-[#9AA4B5] focus:border-[#0B1A38]"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block text-[13px] font-semibold text-[#0B1A38]"
                  >
                    Téléphone
                  </label>

                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+226 XX XX XX XX"
                    className="h-12 w-full border border-[#DDE3EC] bg-[#F8F9FB] px-4 text-[14px] text-[#0B1A38] outline-none transition-colors placeholder:text-[#9AA4B5] focus:border-[#0B1A38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sujet"
                    className="mb-2 block text-[13px] font-semibold text-[#0B1A38]"
                  >
                    Sujet
                  </label>

                  <input
                    id="sujet"
                    name="sujet"
                    type="text"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Objet de votre demande"
                    required
                    className="h-12 w-full border border-[#DDE3EC] bg-[#F8F9FB] px-4 text-[14px] text-[#0B1A38] outline-none transition-colors placeholder:text-[#9AA4B5] focus:border-[#0B1A38]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-semibold text-[#0B1A38]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin ou votre projet..."
                  required
                  rows={7}
                  className="w-full resize-none border border-[#DDE3EC] bg-[#F8F9FB] px-4 py-3 text-[14px] leading-relaxed text-[#0B1A38] outline-none transition-colors placeholder:text-[#9AA4B5] focus:border-[#0B1A38]"
                />
              </div>

              {status.message && (
                <div
                  className={
                    status.type === 'success'
                      ? 'border border-green-200 bg-green-50 px-4 py-3 text-[13px] leading-relaxed text-green-700'
                      : 'border border-red-200 bg-red-50 px-4 py-3 text-[13px] leading-relaxed text-red-700'
                  }
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#E10600] px-7 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-[#0B1A38] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? 'Envoi en cours...'
                  : 'Envoyer le message'}

                {!isSubmitting && (
                  <Send
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                )}
              </button>
            </form>

            <div className="mt-10 grid gap-5 border-t border-[#DDE3EC] pt-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E10600]"
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9AA4B5]">
                    E-mail
                  </p>

                  <p className="mt-1 text-[13px] text-[#33405C]">
                    info@itechnologiesa.ca
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E10600]"
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9AA4B5]">
                    Téléphone
                  </p>

                  <p className="mt-1 text-[13px] text-[#33405C]">
                    +226 79 05 02 02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

