import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PSuspense } from '../../Suspense';

const AppRouter = () => {
  const location = useLocation();

  return (
    <PSuspense>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routeConfig.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {page.element}
                </motion.div>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </PSuspense>
  );
};

export default AppRouter;
