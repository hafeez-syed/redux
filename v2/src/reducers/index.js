import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments';
import posts from './posts';

const rootReducers = combineReducers(
    {
        comments,
        posts,
        routing: routerReducer
    }
);

export default rootReducers;