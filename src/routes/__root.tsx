import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { Header } from '../components/header';

export const Route = createRootRoute({
  component: Component,
});

function Component() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={'container flex flex-col min-h-screen'}>
        {pathname !== '/preview' && <Header />}
        <Outlet />
      </div>
    </>
  );
}
