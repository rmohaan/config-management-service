import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Config {
    id: string;
    key: string;
    value: string;
}

interface ConfigState {
    configurations: Config[];
}

const initialState: ConfigState = {
    configurations: [],
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfigurations: (state, action: PayloadAction<Config[]>) => {
            state.configurations = action.payload;
        },
        updateConfig: (state, action: PayloadAction<Config>) => {
            const index = state.configurations.findIndex(config => config.id === action.payload.id);
            if (index !== -1) {
                state.configurations[index] = action.payload;
            }
        },
    },
});

export const { setConfigurations, updateConfig } = configSlice.actions;
export default configSlice.reducer;
