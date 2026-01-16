import { ContactsState} from './ContactsContext';
import { ContactsAction, ContactsActionTypes } from './actions';

export const contactsReducer = (
  state: ContactsState,
  action: ContactsAction
): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case ContactsActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case ContactsActionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => 
          contact.id === action.payload.id 
            ? { ...contact, ...action.payload.updatedContact } 
            : contact
        )
      };

    case ContactsActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };

    case ContactsActionTypes.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };

    case ContactsActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case ContactsActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };

    case ContactsActionTypes.SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };

    case ContactsActionTypes.ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload]
      };

    case ContactsActionTypes.UPDATE_GROUP:
      return {
        ...state,
        groups: state.groups.map(group => 
          group.id === action.payload.id 
            ? { ...group, ...action.payload.updatedGroup } 
            : group
        )
      };

    case ContactsActionTypes.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(group => group.id !== action.payload)
      };

    case ContactsActionTypes.ADD_CONTACT_TO_GROUP:
      return {
        ...state,
        groups: state.groups.map(group => 
          group.id === action.payload.groupId 
            ? { 
                ...group, 
                contactIds: [
                  ...group.contactIds,
                  action.payload.contactId
                ]
              } 
            : group
        )
      };

    case ContactsActionTypes.REMOVE_CONTACT_FROM_GROUP:
      return {
        ...state,
        groups: state.groups.map(group => 
          group.id === action.payload.groupId 
            ? { 
                ...group, 
                contactIds: group.contactIds.filter(
                  id => id !== action.payload.contactId
                )
              } 
            : group
        )
      };

    default:
      return state;
  }
};
