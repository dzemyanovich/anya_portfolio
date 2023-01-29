import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Favicon from 'react-favicon';

import ProtectedRoute from './components/protected-route/protected-route';
import UnauthenticatedRouteOnly from './components/unauthenticated-route-only/unauthenticated-route-only';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Products from './pages/products/products';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import CompanyPage from './pages/company-page/company-page';
import { AdidasHeader, AdidasContent } from './pages/adidas/adidas';
import { McdonaldsHeader, McdonaldsContent } from './pages/mcdonalds/mcdonalds';
import { HaviHeader, HaviContent } from './pages/havi/havi';
import { EpamSystemsHeader, EpamSystemsContent } from './pages/epam-systems/epam-systems';
import { ZensuppliesHeader, ZensuppliesContent } from './pages/zensupplies/zensupplies';
import ProductPage from './components/product-page/product-page';
import { HaviLanding } from './pages/havi/havi-landing/havi-landing';
import { SupplyPlanning } from './pages/havi/supply-planning/supply-planning';
import { EventOptimizer } from './pages/mcdonalds/event-optimizer/event-optimizer';
import { DesignLeadership } from './pages/mcdonalds/design-leadership/design-leadership';

import './index.scss';
import favicon from './images/favicon.svg';

// todo: do we really need these imports since we have import in css files?
import './fonts/Montserrat-Regular.woff';
import './fonts/Montserrat-Bold.woff';
import './fonts/DrukWide-Medium-Trial.woff';
import './fonts/DrukWide-Bold-Trial.woff';
import './fonts/Matrice-Bold.woff';
import './fonts/Akira-Expanded.otf';

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
        <Route path="products/:companyId" element={<SelectCompanyPage />} />
        <Route path="products/:companyId/:productId" element={<SelectProductPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

function SelectCompanyPage() {
  const { companyId } = useParams();

  switch (companyId) {
    case 'adidas':
      return (
        <ProtectedRoute>
          <CompanyPage
            title="Adidas"
            header={<AdidasHeader />}
            content={<AdidasContent />}
            className="adidas"
          />
        </ProtectedRoute>
      );
    case 'mcdonalds':
      return (
        <ProtectedRoute>
          <CompanyPage
            title="McDonald's"
            header={<McdonaldsHeader />}
            content={<McdonaldsContent />}
            className="mcdonalds"
          />
        </ProtectedRoute>
      );
    case 'havi':
      return (
        <CompanyPage
          title="HAVI"
          header={<HaviHeader />}
          content={<HaviContent />}
          className="havi"
        />
      );
    case 'epam-systems':
      return (
        <CompanyPage
          title="EPAM Systems"
          header={<EpamSystemsHeader />}
          content={<EpamSystemsContent />}
          className="epam-systems"
        />
      );
    case 'zensupplies':
      return (
        <CompanyPage
          title="Zensupplies"
          header={<ZensuppliesHeader />}
          content={<ZensuppliesContent />}
          className="zensupplies"
        />
      );
    default:
      return <Navigate to="/" replace />;
  }
}

function SelectProductPage() {
  const { companyId, productId } = useParams();

  switch (companyId) {
    case 'havi':
      switch (productId) {
        case 'landing':
          return (
            <ProtectedRoute>
              <ProductPage>
                <HaviLanding />
              </ProductPage>
            </ProtectedRoute>
          );
        case 'supply-planning':
          return (
            <ProtectedRoute>
              <ProductPage>
                <SupplyPlanning />
              </ProductPage>
            </ProtectedRoute>
          );
        default:
          return <Navigate to="/" replace />;
      }
    case 'mcdonalds':
      switch (productId) {
        case 'event-optimizer':
          return (
            <ProtectedRoute>
              <ProductPage>
                <EventOptimizer />
              </ProductPage>
            </ProtectedRoute>
          );
        case 'design-leadership':
          return (
            <ProtectedRoute>
              <ProductPage>
                <DesignLeadership />
              </ProductPage>
            </ProtectedRoute>
          );
        default:
          return <Navigate to="/" replace />;
      }
    default:
      return <Navigate to="/" replace />;
  }
}
