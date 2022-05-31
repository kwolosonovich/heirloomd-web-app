import { LazyMotion } from 'framer-motion';
import PropTypes from 'prop-types';


// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

export default function MotionLazyContainer({ children }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}

MotionLazyContainer.propTypes = {
  children: PropTypes.node,
};