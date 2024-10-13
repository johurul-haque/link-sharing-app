import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/header';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="container flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
    </>
  ),
});
