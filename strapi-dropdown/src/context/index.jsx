import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSiderbarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => setIsSiderbarOpen(true);
  const closeSidebar = () => setIsSiderbarOpen(false);

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
