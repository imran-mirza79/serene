import RoomModel from '../models/roomModel.js'

export const createRoom = async (req, res) => {
    const { body: roomDetails } = req;
    try {
        const room = await RoomModel.create(roomDetails);
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};