import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    isCollapsed: true,
    currentIndex: "",
    circulatingSupply: 0,
    marketCap: 0,
    marketPrice: 0,
    stakingApy: 0,
    treasuryMarketValue: 0,
  }
export interface AppData {
  readonly currentIndex?: string;
  readonly circulatingSupply: number;
  readonly marketCap: number;
  readonly marketPrice: number;
  readonly stakingApy?: number;
  readonly treasuryMarketValue?: number;
  readonly isCollapsed?: Boolean;
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleSideBar: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.isCollapsed = !state.isCollapsed;
      },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = 'idle';
    //       state.value += action.payload;
    //     });
    },
  });

  export const { toggleSideBar } = appSlice.actions;
  export default appSlice.reducer;