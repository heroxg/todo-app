import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, 
FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/rootReducers'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

// export default store
const persistor = persistStore(store)

export {store, persistor}
