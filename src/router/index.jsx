import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const ServicePage = lazy(() => import('../pages/services/ServicePage'));
const PortfolioPage = lazy(() => import('../pages/portfolio/PortfolioPage'));
const AboutUsPage = lazy(() => import('../pages/aboutus/AboutUsPage'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-[#1649FF]/20 border-t-[#1649FF] rounded-full animate-spin" />
      <span className="text-xs font-mono text-zinc-500">Sumara Labs Studio</span>
    </div>
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'home',
        element: withSuspense(HomePage),
      },
      {
        path: 'service',
        element: withSuspense(ServicePage),
      },
      {
        path: 'services',
        element: withSuspense(ServicePage),
      },
      {
        path: 'pricing',
        element: <Navigate to="/service" replace />,
      },
      {
        path: 'portfolio',
        element: withSuspense(PortfolioPage),
      },
      {
        path: 'work',
        element: withSuspense(PortfolioPage),
      },
      {
        path: 'about',
        element: withSuspense(AboutUsPage),
      },
      {
        path: 'aboutus',
        element: withSuspense(AboutUsPage),
      },
      {
        path: 'contact',
        element: withSuspense(ContactPage),
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);

