import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import JsFileDownloader from "js-file-downloader"
// import "dotenv/config";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchFormList = createAsyncThunk(
  "formList/fetchFormList",
  async () => {
    try {
      const response = await fetch("/form");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);

export const downloadBackup = createAsyncThunk(
  "formList/downloadBackup",
  async () => {
    try {
      const response = await fetch("/backup");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const csv = await response.blob();
      console.log(csv);
      JsFileDownloader(csv, 'backup.csv')
      return response.status;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);

export const addForm = createAsyncThunk("formList/addForm", async (obj) => {
  try {
    const response = await fetch("/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj), // Passa o nome como parâmetro
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar grupo");
    }

    const data = await response.json();
    return data; // Retorna a resposta da API se necessário
  } catch (error) {
    console.error("Erro:", error.message);
    throw error;
  }
});

export const removeForm = createAsyncThunk(
  "formList/removeForm",
  async (id) => {
    try {
      const response = await fetch(`/form/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        //   body: JSON.stringify({ id: id }) // Passa o nome como parâmetro
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar grupo");
      }

      const data = await response.json();
      return data; // Retorna a resposta da API se necessário
    } catch (error) {
      console.error("Erro:", error.message);
      throw error;
    }
  }
);

export const updateForm = createAsyncThunk(
  "formList/updateForm",
  async ({ id, obj }, thunkAPI) => {
    try {
      const response = await fetch(`/form/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj), // Passa o nome como parâmetro
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar grupo");
      }

      const data = await response.json();
      return data; // Retorna a resposta da API se necessário
    } catch (error) {
      console.error("Erro:", error.message);
      throw error;
    }
  }
);

export const formListSlice = createSlice({
  name: "formList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFormList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFormList.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(downloadBackup.pending, (state) => {
        state.loading = true;
      })
      .addCase(downloadBackup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(downloadBackup.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(addForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Adiciona o novo grupo à lista de dados
      })
      .addCase(addForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          (group) => group.id !== action.payload.id
        ); // Remove o grupo da lista de dados
      })
      .addCase(removeForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((group) => {
          if (group._id === action.payload.id) {
            return { ...group, ...action.payload.data };
          }
          return group;
        });
      })
      .addCase(updateForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const formListData = (state) => state;

export default formListSlice.reducer;
