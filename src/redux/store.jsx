// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import {configureStore} from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from "./reducer";

const store = configureStore({
    reducer: {
        task: tasksReducer,
        filters: filtersReducer,
    }
})





// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);