import { useEffect, useState } from "react";
import "~/styles/footer.css";
import { itemArray } from "~/mock/itemArray.json";
import { IFooterItem } from "~/types/footer";

const FooterContents = () => {
  const [items, setItemArray] = useState<IFooterItem[]>([]);
  useEffect(() => {
    setItemArray(itemArray);
  }, []);
  return (
    <>
      {items.map((item) => (
        <div className="footer-item" key={item.key}>
          <h1>{item.title}</h1>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};

const FooterLink = () => {
  return <div> this area is decorated Icon and Link</div>;
};

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-items">
          <FooterContents />
        </div>
        <div className="footer-outer-link">
          <FooterLink />
        </div>
      </div>
    </>
  );
};

export default Footer;
