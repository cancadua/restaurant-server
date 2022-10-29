module.exports = mongoose => {
    return mongoose.model(
        "tablesReservations",
        mongoose.Schema(
            {
                table_id: Number,
                room_id:{
                    type:mongoose.Schema.Types.Number,
                    ref:'table'
                },
                number_of_people: String,
                name: String,
                start_time: Date,
                hours: Number
            }
        )
    );
};