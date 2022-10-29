module.exports = mongoose => {
    return mongoose.model(
        "room",
        mongoose.Schema(
            {
                _id: Number,
                max_seats: Number
            }
        )
    );
};