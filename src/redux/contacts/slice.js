import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";


const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: false },
  extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(addContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload);
          state.loading = false;
        })
        .addCase(addContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.loading = false;
        })
        .addCase(updateContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(updateContact.fulfilled, (state, action) => {
          const updatedIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          if (updatedIndex !== -1) {
            state.items[updatedIndex] = action.payload;
          }
          state.loading = false;
        })
        .addCase(updateContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        });
    },
});


export default contactsSlice.reducer;
