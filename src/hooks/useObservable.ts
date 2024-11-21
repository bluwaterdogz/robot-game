import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

interface UserObservableOptions<T> {
  initialState?: T;
  reset?: boolean;
}

export const useObservable = <T>(observable$: Observable<T>, options: UserObservableOptions<T> = {}): T | undefined => {
  const { initialState, reset } = options;
  const [state, setState] = useState<T | undefined>(initialState);

  useEffect(() => {
    const subscription = observable$.subscribe(v => {
      if (reset) {
        setState(initialState);
      }
      setTimeout(() => setState(v), 0);
    });
    return () => {
      subscription.unsubscribe();
    };
  });

  return state;
};
