
import * as actionTyes from './actionTypes';

const showPage = (pageData) => ({
    actionType: actionTyes.SHOW_PAGE,
    payload: pageData
});


export const showNewPage = (page) => (dispatch, getState) => {
    dispatch(showPage(page));

}