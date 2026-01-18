import { createSlice } from '@reduxjs/toolkit';
import { DATA_GROUP_CONTACT } from 'src/__data__';

const initialState = DATA_GROUP_CONTACT;

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
});

export default groupsSlice.reducer;
