import { ContactDto, GroupContactsDto } from "src/types/dto/ContactDto";

export function validateContact(contact: ContactDto): boolean {
  return !!contact.id && !!contact.name && !!contact.phone;
}

export function validateGroup(group: GroupContactsDto): boolean {
  return !!group.id && !!group.name && Array.isArray(group.contactIds);
}
