import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage } from 'src/pages';
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';
import { ContactsContext, contactsReducer, initialState } from 'src/context/ContactsContext';
import { useReducer } from 'react';

export const MainApp = () => {
  const [state, dispatch] = useReducer(contactsReducer, {
    ...initialState,
    contacts: DATA_CONTACT,
    favorites: [
      DATA_CONTACT[0].id,
      DATA_CONTACT[1].id,
      DATA_CONTACT[2].id,
      DATA_CONTACT[3].id
    ],
    groups: DATA_GROUP_CONTACT
  });

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <ContactsContext.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ContactListPage />} />
              <Route path="contact">
                <Route index element={<ContactListPage />} />
                <Route path=":contactId" element={<ContactPage />} />
              </Route>
              <Route path="groups">
                <Route index element={<GroupListPage />} />
                <Route path=":groupId" element={<GroupPage />} />
              </Route>
              <Route path="favorit" element={<FavoritListPage />} />
            </Route>
          </Routes>
        </ContactsContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
