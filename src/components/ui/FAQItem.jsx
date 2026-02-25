import { useState } from "react";
import { ChevronDown } from "../icons/Icons";

/**
 * FAQItem — collapsible accordion row.
 *
 * Props:
 *   q  {string}  Question text
 *   a  {string}  Answer text
 */
export default function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-q" onClick={() => setOpen(!open)}>
                {q}
                <span className={`faq-chevron${open ? " open" : ""}`}>
                    <ChevronDown />
                </span>
            </div>
            {open && <div className="faq-a">{a}</div>}
        </div>
    );
}
