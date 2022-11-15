module.exports = mongoose => {
    return mongoose.Schema (
        {
            _id: Number,
            room_id: Number,
            max_seats: Number
        }, {_id: false})
};