module.exports = (sequelize, DataTypes) => {
    
    const Records = sequelize.define("Records", {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING
        },
        appt: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        record: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstTime: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        before: {
            type: DataTypes.TEXT
        },
        after: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: "Records",
        timestamps: true, 
        paranoid: true
    }
    )

    return Records;
}