import * as api from '../api';

export const createRoom = async (roomDetails, navigate) => {
    try
    {
        const { data } = await api.createRoom(roomDetails);
        console.log(data);
        navigate(`/room/${data._id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}