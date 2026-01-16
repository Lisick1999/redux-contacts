import { createContext } from 'react';
import { ContactDto, FavoriteContactsDto, GroupContactsDto } from 'src/types/dto/ContactDto';


export interface ContactsState {
  contacts: ContactDto[];
  favorites: FavoriteContactsDto;
  groups: GroupContactsDto[];
}

export const initialState: ContactsState = {
  contacts: [],
  favorites: [],
  groups: []
};

export const contactsReducer = (state: ContactsState, action: any): ContactsState => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'SET_GROUPS':
      return { ...state, groups: action.payload };
    default:
      return state;
  }
};

export const ContactsContext = createContext<{
  state: ContactsState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => {}
});
