import { Model, Table, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'users'
})
export default class UserModel extends Model<UserModel>{

    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    email: string;

    @Column(DataType.STRING)
    role: string;

}

export { default as UserModel } from './User';