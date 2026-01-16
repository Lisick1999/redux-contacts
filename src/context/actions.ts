import { ContactDto, GroupContactsDto, FavoriteContactsDto } from "src/types/dto/ContactDto";

export enum ContactsActionTypes {
  SET_CONTACTS = 'SET_CONTACTS',
  ADD_CONTACT = 'ADD_CONTACT',
  UPDATE_CONTACT = 'UPDATE_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  
  SET_FAVORITES = 'SET_FAVORITES',
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
  
  SET_GROUPS = 'SET_GROUPS',
  ADD_GROUP = 'ADD_GROUP',
  UPDATE_GROUP = 'UPDATE_GROUP',
  DELETE_GROUP = 'DELETE_GROUP',
  ADD_CONTACT_TO_GROUP = 'ADD_CONTACT_TO_GROUP',
  REMOVE_CONTACT_FROM_GROUP = 'REMOVE_CONTACT_FROM_GROUP'
}

export type SetContactsAction = {
  type: ContactsActionTypes.SET_CONTACTS;
  payload: ContactDto[];
};

export type AddContactAction = {
  type: ContactsActionTypes.ADD_CONTACT;
  payload: ContactDto;
};

export type UpdateContactAction = {
  type: ContactsActionTypes.UPDATE_CONTACT;
  payload: {
    id: string;
    updatedContact: Partial<ContactDto>;
  };
};

export type DeleteContactAction = {
  type: ContactsActionTypes.DELETE_CONTACT;
  payload: string;
};

export type SetFavoritesAction = {
  type: ContactsActionTypes.SET_FAVORITES;
  payload: FavoriteContactsDto;
};

export type AddToFavoritesAction = {
  type: ContactsActionTypes.ADD_TO_FAVORITES;
  payload: string;
};

export type RemoveFromFavoritesAction = {
  type: ContactsActionTypes.REMOVE_FROM_FAVORITES;
  payload: string;
};

export type SetGroupsAction = {
  type: ContactsActionTypes.SET_GROUPS;
  payload: GroupContactsDto[];
};

export type AddGroupAction = {
  type: ContactsActionTypes.ADD_GROUP;
  payload: GroupContactsDto;
};

export type UpdateGroupAction = {
  type: ContactsActionTypes.UPDATE_GROUP;
  payload: {
    id: string;
    updatedGroup: Partial<GroupContactsDto>;
  };
};

export type DeleteGroupAction = {
  type: ContactsActionTypes.DELETE_GROUP;
  payload: string;
};

export type AddContactToGroupAction = {
  type: ContactsActionTypes.ADD_CONTACT_TO_GROUP;
  payload: {
    groupId: string;
    contactId: string;
  };
};

export type RemoveContactFromGroupAction = {
  type: ContactsActionTypes.REMOVE_CONTACT_FROM_GROUP;
  payload: {
    groupId: string;
    contactId: string;
  };
};

export type ContactsAction =
  | SetContactsAction
  | AddContactAction
  | UpdateContactAction
  | DeleteContactAction
  | SetFavoritesAction
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
  | SetGroupsAction
  | AddGroupAction
  | UpdateGroupAction
  | DeleteGroupAction
  | AddContactToGroupAction
  | RemoveContactFromGroupAction;
