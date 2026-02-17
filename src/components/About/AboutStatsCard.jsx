import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./AboutStatsCard.css";


function AboutStatsCard({ icon, statNumber,suffix, statText }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="about-stats-card-container">
      <div className="icon-holder">{icon}</div>

      <div className="stats-number">
        {inView && (
          <p>
            <CountUp end={statNumber} duration={2} />{suffix}
          </p>
        )}
      </div>

      <div className="stats-text">{statText}</div>
    </div>
  );
}

export default AboutStatsCard