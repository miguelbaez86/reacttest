import * as types from '../constants/types'

export const GET_LIST_START = () =>
  dispatch =>
    fetch(`https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json 
    `)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.GET_LIST_SUCCESS,
          payload: response.Brastlewark
        })
      })

export const compare = item => ({
    type: types.COMPARE_ITEM,
    item
  })
