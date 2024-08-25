import { createSlice } from '@reduxjs/toolkit';

interface ICommonState {
  isSideBarCollapsed: boolean;
  mobileMenuOpen: boolean;
  activeModal: string;
  isLoading: boolean;
  isError: boolean;
  selectedDateRange: {
    startDate: string;
    endDate: string;
  };
  showDatePicker: boolean;
  separateLoading: boolean;
  onceCallApiList: string[];
}

const initialState: ICommonState = {
  isSideBarCollapsed: true,
  mobileMenuOpen: false,
  activeModal: '',
  selectedDateRange: {
    startDate: new Date()?.toString(),
    endDate: new Date()?.toString(),
  },
  isLoading: true,
  isError: false,
  showDatePicker: false,
  separateLoading: true,
  onceCallApiList: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.isSideBarCollapsed = !state.isSideBarCollapsed;
    },
    toggleMobileMenu: state => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    toUpdateActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },

    toUpdateDateRangePicker: (state, action) => {
      const { dateRange, datePicker } = action.payload;
      state.selectedDateRange = dateRange;
      state.showDatePicker = datePicker;
    },
    toUpdateLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    toUpdateErrorState: (state, action) => {
      state.isError = action.payload;
    },
    toUpdateSeparateLoading: (state, action) => {
      state.separateLoading = action.payload;
    },
    toUpdateOnceCallApiList: (state, action) => {
      const { payload, type } = action.payload;
      switch (type) {
        case 'add': {
          state.onceCallApiList = [...state.onceCallApiList, payload];
          break;
        }
        case 'remove': {
          const filterList = state.onceCallApiList.filter(
            item => item !== payload,
          );
          state.onceCallApiList = filterList;
          break;
        }
        case 'clear': {
          state.onceCallApiList = [];
          break;
        }
        default:
          break;
      }
    },
  },
});

export const {
  toggleSideBar,
  toggleMobileMenu,
  toUpdateActiveModal,
  toUpdateDateRangePicker,
  toUpdateErrorState,
  toUpdateLoadingState,
  toUpdateSeparateLoading,
  toUpdateOnceCallApiList,
} = commonSlice.actions;

export default commonSlice.reducer;
