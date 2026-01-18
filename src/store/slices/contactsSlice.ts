import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from 'src/types/dto/ContactDto';
import { DATA_CONTACT } from 'src/__data__';

const initialState: ContactDto[] = DATA_CONTACT;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export default contactsSlice.reducer;
