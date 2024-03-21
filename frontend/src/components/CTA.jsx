import styles from "../style";
import { ProgressBar } from "./ProgressBar";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Track your progress!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Watch as the dynamic progress bar steadily fills up with each payment, 
      allowing you to easily monitor your progress until your EMI payments are successfully completed.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ProgressBar />
    </div>
  </section>
);

export default CTA;
