module.exports = mongoose => {
    return mongoose.model(
        "roomsReservations",
        mongoose.Schema(
            {
                table_id:{
                    type:mongoose.Schema.Types.Number,
                    ref:'room'
                },
                number_of_people: String,
                name: String,
                start_time: Date,
                hours: Number
            }
        )
    );
};