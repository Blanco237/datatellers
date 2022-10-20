module.exports = (sequelize, DataTypes) => {
    
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    },
    {
        tableName: "Users",
        timestamps: true, 
        paranoid: true
    }
    )

    return Users;
}