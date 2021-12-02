import {React, useEffect} from "react";

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact'
  })
  return (
    <div className="section">
      <h1 className="section-title">Contact Pages</h1>
      <p className="section-description">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
    </div>
  );
}
