import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import User from '#models/user'
import { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare task: string

  @column()
  declare status: []

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}