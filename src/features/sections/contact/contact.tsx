import { ISectionProps } from "../ISectionProps";
import styles from '../sections.module.css';
import contactStyles from "./contact.module.css";

export default function Contact(props: ISectionProps) {
  const isActiveClass = props.isActive ? contactStyles.active : "";
  const classNames = styles[props.theme] + " " + contactStyles.contactSection + " " + isActiveClass;
  console.debug(classNames);

  return (
    <footer id={contactSectionId} style={props.style} className={classNames}>
      <h1><b>Contact me!</b></h1>
      <div className={contactStyles.details}>
        <p>Email: klejno.przemyslaw@gmail.com</p>
        <p>Mobile: +48 728 180 680</p>
      </div>
    </footer>
  );
}

export const contactSectionId: string = "contact";