import { useState } from 'react';

import { InjectContext } from '@/doodle/contexts/Inject';

const InjectProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  const inject = (form: JSX.Element) => {
    setElements([...elements, form]);
  };

  return (
    <InjectContext.Provider value={{ inject }}>
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
      {children}
    </InjectContext.Provider>
  );
};

export default InjectProvider;
