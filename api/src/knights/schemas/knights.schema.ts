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

@Schema({ toJSON: { virtuals: true } })
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

const calculateAge = (birthdayDate) => { // FIXME: levar em consideração os meses
    const birthdayYear = +birthdayDate.split('/')[2]
    const today = new Date().getFullYear()
    return today - birthdayYear
}

KnightSchema.virtual('age')
    .get(function () {
        return calculateAge(this.birthday)
    });

KnightSchema.virtual('attack')
    .get(function () {
        const equippedWeaponsMod = this.weapons
            .filter(elm => elm.equipped == true)
            .reduce((acc, cur) => acc + cur.mod, 0)
        const attibuteValue = this.attributes && this.attributes[this.keyAttribute] ? 
            +this.attributes[this.keyAttribute] : 0
        return 10 + equippedWeaponsMod + attibuteValue
    });

KnightSchema.virtual('experience')
    .get(function () {
        const age = calculateAge(this.birthday)
        if (age < 7) return 0
        return Math.floor((age - 7) * Math.pow(22, 1.45))
    });