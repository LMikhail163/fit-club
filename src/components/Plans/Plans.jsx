import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css';

const Plans = () => {
  return (
    <section className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        <div className='plans'>
            {plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature, i) => (
                            <div className="feature" key={i}>
                                <img src={whiteTick} alt="whiteTick" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more benefits -{'>'}</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Plans