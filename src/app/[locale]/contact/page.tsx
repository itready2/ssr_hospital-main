import { useTranslations } from "next-intl";
import Styles from "./Contact.module.scss";
import Contact_form from "@/hooks/contact_form/Contact_form";

const Contact = () => {

  const t = useTranslations();

  const contact = {
    head: t('contact.head'),
    name: t('contact.name'),
    email: t('contact.email'),
    phone: t('contact.phone'),
    detail: t('contact.detail'),
    submit: t('contact.submit'),
    v_name: t('contact.validation.name'),
    v_email: t('contact.validation.email'),
    i_email: t('contact.validation.email_invalid'),
    v_phone: t('contact.validation.phone'),
    i_phone: t('contact.validation.phone_invalid'),
    v_detail: t('contact.validation.detail'),
    address: t('footer.address'),
    modal_head: t('popup.thank'),
    modal_decs: t('popup.submission'),
  }

  return (
    <main>
      <Contact_form contact={contact}/>
      <section>
        <h1>{t('contact.map')}</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684.341323863297!2d100.55361094866916!3d14.005017350002483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e280bd999c18a3%3A0xb166ebb9f33c4685!2sKrung%20Siam%20St.%20Carlos%20Hospital!5e0!3m2!1sen!2sth!4v1712568424282!5m2!1sen!2sth"
          loading="lazy" className={Styles.map} />
      </section>
    </main>
  )
}

export default Contact
