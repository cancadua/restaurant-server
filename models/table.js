module.exports = mongoose => {
    return mongoose.model(
        "table",
        mongoose.Schema(
            {
                _id: Number,
                room_id: Number,
                max_seats: Number
            }
        )
    );
};