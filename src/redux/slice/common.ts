import { IBSETickerResponseProps } from '@/src/utils/type';
import { createSlice } from '@reduxjs/toolkit';

interface ICommonState {
  
  isLoading: boolean;
  isError: boolean;
  stockListData:IBSETickerResponseProps[] | []

}

const initialState: ICommonState = {
 
  isLoading: true,
  isError: false,
  stockListData:[]

};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
  



    toUpdateLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    toUpdateErrorState: (state, action) => {
      state.isError = action.payload;
    },
    toUpdateStockListData: (state, action) => {
      state.stockListData = action.payload;
    },
    
  },
});

export const {

  toUpdateErrorState,
  toUpdateLoadingState,toUpdateStockListData
  
} = commonSlice.actions;

export default commonSlice.reducer;
