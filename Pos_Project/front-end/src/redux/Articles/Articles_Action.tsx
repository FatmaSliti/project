import axios from 'axios'
import {LOST_TICKET} from './Types'


export const lost_Ticket: any = () => async (dispatch) => {
  try {
    
    dispatch({type: LOST_TICKET})
  } catch (error: any) {
  }
}

