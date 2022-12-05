import { useState, useCallback } from 'react';

const useRefresh = () => {
  const [state, setState] = useState<object>({});

  const handleRefresh = useCallback(() => {
    setState({});
  }, []);

  return [state, handleRefresh] as const;
};

export default useRefresh;
