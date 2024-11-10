import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', icon: <img src="./icons/home.svg" alt="Home" className="w-4 h-4 mr-3" />, path: '/home' },
    { name: 'Trends', icon: <img src="./icons/trends.svg" alt="Trends" className="w-4 h-4 mr-3" />, path: '/trends' },
    { name: 'Library', icon: <img src="./icons/library.svg" alt="Library" className="w-4 h-4 mr-3" />, path: '/library' },
    { name: 'Discover', icon: <img src="./icons/discover.svg" alt="Discover" className="w-4 h-4 mr-3" />, path: '/discover' },
  ];

  const settingsItems = [
    { name: 'Settings', icon: <img src="./icons/setting.svg" alt="Settings" className="w-4 h-4 mr-3" />, path: '/settings' },
    { name: 'Log Out', icon: <img src="./icons/logout.svg" alt="Log Out" className="w-4 h-4 mr-3" />, path: '/logout' },
  ];

  return (
    <div className="w-64 h-screen bg-[#0E0E0E] flex flex-col justify-start space-y-8">
      <div className="flex justify-center py-6">
      {/* <a href="/">
        <img src="./music.png" alt="Logo" className="w-49 h-50" />
        </a> */}
      </div>

      <div className="text-sm text-[#CFC5C5] uppercase pl-8 mb-2 pt-20 font-poppins">Menu</div>
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center pl-8 py-2 cursor-pointer ${
              active === item.path ? 'bg-[#1A1A1A]' : ''
            }`}
            onClick={() => setActive(item.path)}
          >
            {item.icon}
            <div className="text-lg font-medium text-[#F6F6F6] font-poppins">{item.name}</div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <div className="text-lg font-bold text-[#CFC5C5] uppercase pl-8 mb-4 font-poppins">General</div>
        <div className="space-y-4">
          {settingsItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center pl-8 py-2 cursor-pointer ${
                active === item.path ? 'bg-[#1A1A1A]' : ''
              }`}
              onClick={() => setActive(item.path)}
            >
              {item.icon}
              <div className="text-lg font-medium text-[#F6F6F6] font-poppins">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;