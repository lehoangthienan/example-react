import { useState, useEffect } from 'react';

const useObservable = observable => {
    const [state, setState] = useState();
  
    useEffect(() => {
      const sub = observable.subscribe(setState);
      return () => sub.unsubscribe();
    }, [observable]);
  
    return state;
  };

export default useObservable