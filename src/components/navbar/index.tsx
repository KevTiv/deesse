import '../../Styles/components/navbar/index.scss'

const Navbar = () => {
  return (
    <>
        <section>
            <nav className="navbar">
                <div>
                    <span className="navbar_logo_font">BC</span>
                    <h3>Book a Citroën</h3>
                </div>

                <ul>
                    <li>Work of Arts</li>
                    <li>Fairs</li>
                    <li>Offerings</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>
    </>
  )
};

export default Navbar;
