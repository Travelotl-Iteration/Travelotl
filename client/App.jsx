import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="bg-red-100	h-screen">
      <Outlet />
    </div>
  );
};