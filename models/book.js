module.exports = mongoose => {
    return mongoose.model(
        "book",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            {timestamps: true}
        )
    );
};