import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConfigurations } from '../store/configSlice';
import { fetchConfigs } from '../api/configApi'; // Assuming you have a function to fetch configurations
import ConfigItem from './ConfigItem';
import { Config } from '../store/configSlice';

const ConfigList = () => {
    const dispatch = useDispatch();
    const configs = useSelector((state: any) => state.config.configurations);

    useEffect(() => {
        const loadConfigs = async () => {
            const data = await fetchConfigs();
            dispatch(setConfigurations(data));
        };
        loadConfigs();
    }, [dispatch]);

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 text-left text-sm text-gray-600">ID</th>
                        <th className="py-2 px-4 text-left text-sm text-gray-600">Config Name</th>
                        <th className="py-2 px-4 text-left text-sm text-gray-600">Value</th>
                        <th className="py-2 px-4 text-left text-sm text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {configs.map((config: Config) => (
                        <tr key={config.id}>
                            <td className="py-2 px-4 text-sm text-gray-700">{config.id}</td>
                            <td className="py-2 px-4 text-sm text-gray-700">
                                <input
                                    type="text"
                                    value={config.key}
                                    className="px-2 py-1 border border-gray-300 rounded"
                                />
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-700">
                                <input
                                    type="text"
                                    value={config.value}
                                    className="px-2 py-1 border border-gray-300 rounded"
                                />
                            </td>
                            <td className="py-2 px-4 text-sm text-gray-700">
                                <button className="text-blue-500 hover:underline">Save</button>
                                <button className="text-red-500 hover:underline ml-4">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConfigList;
