import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsappIcon from './WhatsappIcon'
const Layout = ({ children }) => {
  return (
    <div >
        <Header/>
        <WhatsappIcon/>
        <main>{children}</main>
        <Footer/>
    </div>
  );
};

export default Layout;
