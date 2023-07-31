import Header from '../component/Header';
import Footer from '../component/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="font-Roboto text-base">
            <Header />
            <div className="flex justify-center maxWidth='1440px'">
                    {children}  
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
