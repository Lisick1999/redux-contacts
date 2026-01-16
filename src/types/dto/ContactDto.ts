export interface ContactDto {
  id: string;
  name: string;
  address: string;
  birthday: string;
  phone: string;
  photo: string;
}

export interface FavoriteContactsDto extends Array<string> {}

export interface GroupContactsDto {
  id: string;
  name: string;
  description: string;
  photo: string;
  contactIds: string[];
}

export interface BaseDto {
  id: string;
}

export interface ContactDto extends BaseDto {
  name: string;
  address: string;
  birthday: string;
  phone: string;
  photo: string;
}

export interface GroupContactsDto extends BaseDto {
  name: string;
  description: string;
  photo: string;
  contactIds: string[];
}

export type ContactId = string;
export type GroupId = string;

export type FavoritesState = {
  favoriteContacts: FavoriteContactsDto;
};

export type GroupsState = {
  groups: GroupContactsDto[];
};

export type ContactsState = {
  contacts: ContactDto[];
};
