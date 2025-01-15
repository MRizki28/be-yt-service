import { Injectable } from "@nestjs/common";
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'tb_download',
})

@Injectable()
export class DownloadModel extends Model<DownloadModel> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    url: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;


}