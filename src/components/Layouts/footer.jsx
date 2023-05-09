import logoKasaFooter from 'src/assets/images/LOGO_footer.png';

const Footer = () => {
    return (        
        <footer className="footer">
            <img src={logoKasaFooter} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer