import React from 'react';

const About = () => {
    return (
        <footer style={styles.footer}>
            <section style={styles.container}>
                <h2 style={styles.heading}>Top companies choose Our Platform to build in-demand career skills</h2>
                <div style={styles.companyLogos}>
                    <img src="https://shopnasdaq.com/cdn/shop/files/vest_back.pdf.png?v=1698086820&width=600" alt="Nasdaq" style={styles.logo} />
                    <img src="https://c4.wallpaperflare.com/wallpaper/105/816/23/volkswagen-logo-wet-water-drops-hd-wallpaper-preview.jpg" alt="Volkswagen" style={styles.logo} />
                    <img src="https://www.shutterstock.com/image-vector/abstract-geometric-box-logo-design-260nw-1995359300.jpg" alt="Box" style={styles.logo} />
                    <img src="https://w7.pngwing.com/pngs/1012/624/png-transparent-netapp-logo-horizontal-tech-companies-thumbnail.png" alt="NetApp" style={styles.logo} />
                    <img src="https://www.svgrepo.com/show/330387/eventbrite.svg" alt="Eventbrite" style={styles.logo} />
                </div>
            </section>

            <div style={styles.footerLinksContainer}>
                <div style={styles.footerLinksColumn}>
                    <h4 style={styles.linkHeading}>Our Business</h4>
                    <ul style={styles.linkList}>
                        <li><a href="/udemy-business" style={styles.link}>Our Business</a></li>
                        <li><a href="/teach" style={styles.link}>Teach with Us</a></li>
                        <li><a href="/app" style={styles.link}>Get the App</a></li>
                    </ul>
                </div>
                <div style={styles.footerLinksColumn}>
                    <h4 style={styles.linkHeading}>Company</h4>
                    <ul style={styles.linkList}>
                        <li><a href="/about" style={styles.link}>About Us</a></li>
                        <li><a href="/careers" style={styles.link}>Careers</a></li>
                        <li><a href="/blog" style={styles.link}>Blog</a></li>
                    </ul>
                </div>
                <div style={styles.footerLinksColumn}>
                    <h4 style={styles.linkHeading}>Support</h4>
                    <ul style={styles.linkList}>
                        <li><a href="/help" style={styles.link}>Help and Support</a></li>
                        <li><a href="/affiliate" style={styles.link}>Affiliate</a></li>
                    </ul>
                </div>
                <div style={styles.footerLinksColumn}>
                    <h4 style={styles.linkHeading}>Legal</h4>
                    <ul style={styles.linkList}>
                        <li><a href="/terms" style={styles.link}>Terms</a></li>
                        <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
                        <li><a href="/sitemap" style={styles.link}>Sitemap</a></li>
                        <li><a href="/accessibility" style={styles.link}>Accessibility Statement</a></li>
                    </ul>
                </div>
            </div>
            
            <div style={styles.copyright}>
                <p>© 2024 YourCompany, Inc.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',  
        padding: '40px 20px',
        borderTop: '1px solid #333',
        color: 'white',  
    },
    container: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    heading: {
        fontSize: '20px',
        color: '#E88982',  
        marginBottom: '20px',
    },
    companyLogos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    logo: {
        width: '100px',
        height: 'auto',
    },
    footerLinksContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '40px',
    },
    footerLinksColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    linkHeading: {
        color: '#fff',  
        marginBottom: '10px',
    },
    linkList: {
        listStyleType: 'none',
        padding: 0,
    },
    link: {
        color: '#ccc',  
        textDecoration: 'none',
        marginBottom: '10px',
        fontSize: '14px',
        transition: 'color 0.3s',
    },
    linkHover: {
        color: '#fff',
    },
    copyright: {
        textAlign: 'center',
        color: '#999',  
        fontSize: '12px',
    },
};

export default About;
