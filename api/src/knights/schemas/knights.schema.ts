import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from 'mongoose';

@Schema()
export class Weapon {
    @Prop()
    name: string;
    @Prop()
    mod: number;
    @Prop()
    attr: string;
    @Prop()
    equipped: boolean;
}
export const WeaponSchema = SchemaFactory.createForClass(Weapon);

@Schema()
export class Attribute {
    @Prop()
    strength: number;
    @Prop()
    dexterity: number;
    @Prop()
    constitution: number;
    @Prop()
    intelligence: number;
    @Prop()
    wisdom: number;
    @Prop()
    charisma: number;
}
export const AttributeSchema = SchemaFactory.createForClass(Attribute);

@Schema()
export class Knight {
    @Prop()
    name: string;
    @Prop()
    nickname: string;
    @Prop()
    birthday: string;
    @Prop({ type: [WeaponSchema], default: [] })
    weapons: Weapon[];
    @Prop({ type: AttributeSchema })
    attributes: Attribute;
    @Prop()
    keyAttribute: string;
}

export type KnightDocument = HydratedDocument<Knight>;

export const KnightSchema = SchemaFactory.createForClass(Knight);