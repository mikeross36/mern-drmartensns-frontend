export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container grid">
        <div className="footer__box">
          <h3 className="footer__title">explore</h3>
          <ul>
            <li>
              <a
                href="https://blog.drmartens.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                boot blog
              </a>
            </li>
            <li>
              <a
                href="https://www.drmartens.com/us/en/guides/our-soles"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                know your soles
              </a>
            </li>
            <li>
              <a
                href="https://www.drmartens.com/us/en/collaborations"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                collaborations
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <h3 className="footer__title">support</h3>
          <ul>
            <li>
              <a
                href="https://www.drmartens.com/us/en/guides/how-to-break-in-docs"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                how to brake in
              </a>
            </li>
            <li>
              <a
                href="https://www.drmartens.com/us/en/guides/how-to-polish-boots-shoes"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                how to polish
              </a>
            </li>
            <li>
              <a
                href="https://www.drmartens.com/us/en/guides/how-to-protect-maintain"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                how to protect
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__box social">
          <a
            href="https://www.facebook.com/drmartens"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <img
              src="/images/icons/facebook-icon.svg"
              alt=""
              width="30px"
              height="30px"
            />
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fdrmartens%2F"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <img
              src="/images/icons/twitter-icon.svg"
              alt=""
              width="30px"
              height="30px"
            />
          </a>
          <a
            href="https://www.instagram.com/drmartensusa/"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <img
              src="/images/icons/instagram-icon.svg"
              alt=""
              width="30px"
              height="30px"
            />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <img
              src="/images/icons/github-icon.svg"
              alt=""
              width="30px"
              height="30px"
            />
          </a>
        </div>
      </div>
      <p className="footer__copy">&copy;2022 DodaDesign All Rights Reserved</p>
    </footer>
  );
}
