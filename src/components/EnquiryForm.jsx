import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { classOptions, consentText, countryCodes, school, stateOptions } from '../data/content'
import { Reveal } from './Reveal'
import Button from './Button'
import Section from './Section'

const EMPTY_FORM = { name: '', code: '+91', phone: '', grade: '', state: '', consent: false }

const inputClasses =
  'rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-ink-soft/70'

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter the parent’s name.'
  if (!/^\d{7,12}$/.test(values.phone)) errors.phone = 'Enter a valid phone number (digits only).'
  if (!values.grade) errors.grade = 'Please select a class.'
  if (!values.state) errors.state = 'Please select a state.'
  if (!values.consent) errors.consent = 'Please accept to continue.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setValues((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    // No backend is connected in this demo: a valid form simply shows the thank-you state.
    if (Object.keys(found).length === 0) setSubmitted(true)
  }

  const fieldProps = (id) => ({
    id,
    'aria-invalid': errors[id] ? true : undefined,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  })

  return (
    <Section id="enquire" labelledBy="enquire-title" className="bg-surface-alt">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">Admissions open</p>
          <h2 id="enquire-title" className="font-display text-4xl font-extrabold sm:text-5xl">
            Enquire Now!
          </h2>

          <h3 className="mt-10 font-display text-2xl font-extrabold">Contact Us.</h3>
          <address className="mt-4 space-y-3 text-lg not-italic text-ink-soft">
            <p>
              <a href={school.helplineHref} className="font-semibold text-ink hover:text-accent">
                Admission Helpline No. {school.helpline}
              </a>
            </p>
            <p>
              <a href={`mailto:${school.email}`} className="hover:text-accent">
                {school.email}
              </a>
            </p>
            <p>{school.address}</p>
            <p>
              Landline No.{' '}
              {school.landlines.map((number, index) => (
                <span key={number}>
                  {index > 0 && ', '}
                  <a href={`tel:${number}`} className="hover:text-accent">
                    {number}
                  </a>
                </span>
              ))}
            </p>
          </address>
        </Reveal>

        <Reveal delay={0.15} className="rounded-3xl border border-line bg-surface p-6 shadow-xl sm:p-10">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="thanks"
                role="status"
                className="py-10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-accent text-3xl text-accent-ink"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.15 }}
                >
                  ✓
                </motion.div>
                <h3 className="font-display text-3xl font-extrabold">Thank you!</h3>
                <p className="mt-3 text-ink-soft">
                  Your enquiry has been received. Our admissions team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5"
                exit={{ opacity: 0, y: -12 }}
              >
                <Field id="name" label="Parent’s name" error={errors.name}>
                  <input
                    {...fieldProps('name')}
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update('name')}
                    className={`${inputClasses} w-full`}
                  />
                </Field>

                <Field id="phone" label="Phone number" error={errors.phone}>
                  <div className="flex gap-3">
                    <select
                      aria-label="Country code"
                      value={values.code}
                      onChange={update('code')}
                      className={`${inputClasses} w-28 shrink-0`}
                    >
                      {countryCodes.map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                    </select>
                    <input
                      {...fieldProps('phone')}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={values.phone}
                      onChange={update('phone')}
                      className={`${inputClasses} min-w-0 flex-1`}
                    />
                  </div>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="grade" label="Class" error={errors.grade}>
                    <select {...fieldProps('grade')} value={values.grade} onChange={update('grade')} className={`${inputClasses} w-full`}>
                      <option value="">Select Class</option>
                      {classOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="state" label="State" error={errors.state}>
                    <select {...fieldProps('state')} value={values.state} onChange={update('state')} className={`${inputClasses} w-full`}>
                      <option value="">Select State</option>
                      {stateOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className="flex items-start gap-3 text-sm text-ink-soft">
                    <input
                      {...fieldProps('consent')}
                      type="checkbox"
                      checked={values.consent}
                      onChange={update('consent')}
                      className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                    />
                    <span>{consentText}</span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="mt-1.5 text-sm text-red-500">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Enquire Now
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  )
}
