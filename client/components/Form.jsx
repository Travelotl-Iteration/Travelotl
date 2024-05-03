import { Outlet, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

import Header from './Header';

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitions = useTransition(location?.pathname, {
    from: { position: 'absolute', width: '100%', opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return transitions(style => (
    <animated.div style={style}>
      <Outlet />
    </animated.div>
  ));
};

const Form = () => {
  
  return (
    <>
      <Header />
      <div className="form-container">
        <div>
          <h2 className='text-2xl text-center font-bold'>Enter in your travel details...</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <AnimatedRoutes />
        </div>
      </div>
    </>
  );
};

export default Form;