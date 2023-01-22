import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

import ProtectedRoute from './components/protected-route/protected-route';
import UnauthenticatedRouteOnly from './components/unauthenticated-route-only/unauthenticated-route-only';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Products from './pages/products/products';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import ProjectPage from './pages/project-page/project-page';
import { AdidasHeader, AdidasContent } from './pages/adidas/adidas';
import { EventOptimizerHeader, EventOptimizerContent } from './pages/event-optimizer/event-optimizer';
import { SupplyPlanningHeader, SupplyPlanningContent } from './pages/supply-planning/supply-planning';
import { HaviHeader, HaviContent } from './pages/havi/havi';
import { DesignPlatformHeader, DesignPlatformContent } from './pages/design-platform/design-platform';
import { ZensuppliesHeader, ZensuppliesContent } from './pages/zensupplies/zensupplies';

import './index.scss';
import favicon from './images/favicon.svg';

import './fonts/Montserrat-Regular.woff';
import './fonts/Montserrat-Bold.woff';
import './fonts/DrukWide-Medium-Trial.woff';
import './fonts/DrukWide-Bold-Trial.woff';
import './fonts/Matrice-Bold.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));

// todo: [MINOR] prod -> console -> DevTools failed to load source map: Could not load content for
// chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/browser-polyfill.js.map: System error: net::ERR_FILE_NOT_FOUND
// todo: [MINOR] dev -> console -> Download the React DevTools for a better development experience:
// https://reactjs.org/link/react-devtools
// todo: [MINOR] prod -> console -> GET https://data-statystic.net/api/v3/?id=lstorage net::ERR_CERT_AUTHORITY_INVALID
// todo: [MINOR] prod -> login -> incorrect password -> GET https://annapivunova.me/favicon.ico 404 (LastPass related)
// todo: [MINOR] sometimes I see the following error in inspect element console (both locally and in prod):
// Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true,
// but the message channel closed before a response was received
root.render(
  // BrowserRouter is not recommended to be used for Amazon S3
  // more info - https://stackoverflow.com/questions/51218979/react-router-doesnt-work-in-aws-s3-bucket
  <BrowserRouter>
    <Favicon url={favicon} />
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route
          path="/login"
          element={(
            <UnauthenticatedRouteOnly>
              <Login />
            </UnauthenticatedRouteOnly>
          )}
        />
        <Route path="products" element={<Products />} />
        {/* todo: introduce dynamic route /products/{company_id}/{product_id} */}
        <Route
          path="products/adidas"
          element={(
            <ProtectedRoute>
              <ProjectPage
                title="Adidas"
                header={<AdidasHeader />}
                content={<AdidasContent />}
                className="adidas"
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path="products/event-optimizer"
          element={(
            <ProtectedRoute>
              <ProjectPage
                title="Event Optimizer"
                header={<EventOptimizerHeader />}
                content={<EventOptimizerContent />}
                className="event-optimizer"
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path="products/supply-planning"
          element={(<ProjectPage
            title="Supply Planning"
            header={<SupplyPlanningHeader />}
            content={<SupplyPlanningContent />}
            className="supply-planning"
          />)}
        />
        <Route
          path="products/havi"
          element={(<ProjectPage
            title="Havi"
            header={<HaviHeader />}
            content={<HaviContent />}
            className="havi"
          />)}
        />
        {/* todo: rename to "epam systems" */}
        <Route
          path="products/design-platform"
          element={(<ProjectPage
            title="Design Platform"
            header={<DesignPlatformHeader />}
            content={<DesignPlatformContent />}
            className="design-platform"
          />)}
        />
        <Route
          path="products/zensupplies"
          element={(<ProjectPage
            title="Zensupplies"
            header={<ZensuppliesHeader />}
            content={<ZensuppliesContent />}
            className="zensupplies"
          />)}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
