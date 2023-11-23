import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import formListSlice from './slices/formListSlice';

export default configureStore({
    reducer: {
        formList: formListSlice
    },
    middleware: [thunk],
});
