import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateConfig } from '../store/configSlice';
import api from '../api/api';

const ConfigItem = ({ config }: { config: any }) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(config.value);
    const dispatch = useDispatch();

    const handleEdit = async () => {
        try {
            const updatedConfig = { ...config, value };
            await api.put(`/configurations/${config.id}`, updatedConfig);
            dispatch(updateConfig(updatedConfig));
            setEditing(false);
        } catch (error) {
            console.error("Error updating config", error);
        }
    };

    return (
        <div className="bg-white p-4 border rounded shadow-sm">
            <div className="flex justify-between items-center">
                <div>{config.name}</div>
                {editing ? (
                    <div>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="border p-1 rounded"
                        />
                        <button onClick={handleEdit} className="ml-2 text-blue-500">Save</button>
                    </div>
                ) : (
                    <div>{config.value}</div>
                )}
                <button onClick={() => setEditing(!editing)} className="ml-2 text-blue-500">
                    {editing ? "Cancel" : "Edit"}
                </button>
            </div>
        </div>
    );
};

export default ConfigItem;
