import { ComponentType } from 'react';

// react
import Playground from '../features/_playground';
import CounterHook from '../features/customHook/counterHook';
import LocalStorageHook from '../features/customHook/localStorageHook';
import AsyncLoadingHook from '../features/customHook/asyncLoadingHook';
import SetStateTriggerTime from '../features/setStateTriggerTime';
import ProperUseCallback from '../features/properUseCallback';

// redux
import Counter from '../features/counter/Counter';
import MockRedux from '../features/mockRedux';

export interface RouteData {
  order: string[];
  data: {
    [propName: string]: {
      name: string;
      route: string;
      comp: ComponentType<{}>;
    };
  };
}

export const REACT_ROUTES: RouteData = {
  order: [
    'playground',
    'counterHook',
    'localStorageHook',
    'asyncLoadingHook',
    'setStateTriggerTime',
    'properUseCallback',
  ],
  data: {
    playground: {
      name: 'Playground',
      route: 'playground',
      comp: Playground,
    },
    counterHook: {
      name: 'Counter Hook',
      route: 'counter-hook',
      comp: CounterHook,
    },
    localStorageHook: {
      name: 'Local Storage Hook',
      route: 'local-storage-hook',
      comp: LocalStorageHook,
    },
    asyncLoadingHook: {
      name: 'Async Loading Hook',
      route: 'async-loading-hook',
      comp: AsyncLoadingHook,
    },
    setStateTriggerTime: {
      name: 'set State Trigger Time',
      route: 'set-state-trigger-time',
      comp: SetStateTriggerTime,
    },
    properUseCallback: {
      name: 'Proper useCallback',
      route: 'proper-use-callback',
      comp: ProperUseCallback,
    },
  },
};

export const REDUX_ROUTES: RouteData = {
  order: ['counter', 'mockRedux'],
  data: {
    counter: {
      name: 'Redux Counter',
      route: 'counter',
      comp: Counter,
    },
    mockRedux: {
      name: 'Mock Redux',
      route: 'mock-redux',
      comp: MockRedux,
    },
  },
};
