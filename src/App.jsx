import styles from './style';

import { Navbar, CardDeal, Hero, Stats, Business, Billing, Testimonials, Clients, CTA, Footer} from './components/Navbar';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App