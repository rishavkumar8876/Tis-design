import { footerLinks, school, socials } from '../data/content'
import Photo from './Photo'

const linkClasses = 'transition-colors hover:text-[#ffc928]'

export default function Footer() {
  return (
    <footer className="bg-[#0a1124] px-4 pt-16 pb-8 text-[#c3cae0]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
        <div>
          <Photo src={school.footerLogo} alt={school.name} className="h-16 w-auto" />
          <address className="mt-6 space-y-2 not-italic">
            <p className="font-semibold text-[#f6f2e8]">{school.name}</p>
            <p>{school.address}</p>
            <p>
              Landline No.{' '}
              {school.landlines.map((number, index) => (
                <span key={number}>
                  {index > 0 && ', '}
                  <a href={`tel:${number}`} className={linkClasses}>
                    {number}
                  </a>
                </span>
              ))}
            </p>
            <p>
              <a href={school.helplineHref} className={linkClasses}>
                Admission Helpline No. {school.helpline}
              </a>
            </p>
            <p>
              <a href={`mailto:${school.email}`} className={linkClasses}>
                {school.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={school.virtualTourUrl} target="_blank" rel="noreferrer" className={linkClasses}>
                Virtual Tour
              </a>
            </li>
            <li>
              <a href={school.applyUrl} target="_blank" rel="noreferrer" className={linkClasses}>
                Apply Now
              </a>
            </li>
            <li>
              <a href={school.erpUrl} target="_blank" rel="noreferrer" className={linkClasses}>
                Fedena Login
              </a>
            </li>
          </ul>
        </nav>

        <iframe
          title="Map showing the location of Tulas International School"
          src={school.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full rounded-2xl border-0"
        />
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
        <p>Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer" className={linkClasses}>
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
