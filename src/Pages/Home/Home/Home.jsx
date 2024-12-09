import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import OurMenu from '../OurMenu/OurMenu';
import OurChefs from '../OurChefs/OurChefs';
import Newsletter from '../Newsletter/Newsletter';
import { Toaster } from 'sonner';

const Home = () => {
    return (
        <div className='w-full'>
            <Toaster richColors/>
           <Banner/>
           <AboutUs/>
           <Services/>
           <OurMenu/>
           <OurChefs/>
           <Newsletter/>
        </div>
    );
};

export default Home;