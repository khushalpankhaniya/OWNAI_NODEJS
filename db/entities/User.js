import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: { primary: true, type: "int", generated: true },
        name: { type: "varchar", length: 255 },
        email: { type: "varchar", length: 255, unique: true },
        password: { type: "varchar", length: 255 },
        role: { type: "enum", enum: ["Admin", "User"], default: "User" },
        phone: { type: "varchar", length: 20 },
        city: { type: "varchar", length: 100 },
        country: { type: "varchar", length: 100 }
    }
});
