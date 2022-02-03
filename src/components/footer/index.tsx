import '../../Styles/components/footer/index.scss'

import img1 from '../../img/citroen-7.png'

const Footer = () => {
  return (
      <>
        <section>
            <div className="content content-section footer">
                <div className="content email-cta">
                    <div>
                        <span className="img-container" >
                            <img  src={img1} alt="Citroën DS interior" />
                        </span>
                        <div>
                            <p>Sign up to our <b>newsletter</b> and receive exclusive deal on our offerings.</p>
                            <div>
                                <input type="email" />
                                <button type="submit" className="btn emailSubmit">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Follow us on:</p>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        </section>
      </>
  )
};

export default Footer;
