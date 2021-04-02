import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { Contact } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	no: {
		"name": "no",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "No"
	} as FieldItemString,
	name: {
		"name": "name",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Name"
	} as FieldItemString,
	vice: {
		"name": "vice",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Vice"
	} as FieldItemString,
	gender: {
		"name": "gender",
		"isKey": false,
		"label": "Gender"
	} as undefined,
	mobile: {
		"name": "mobile",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Mobile"
	} as FieldItemString,
	email: {
		"name": "email",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Email"
	} as FieldItemString,
	birthday: {
		"name": "birthday",
		"isKey": false,
		"label": "Birthday"
	} as undefined,
	isBirthDayAccurate: {
		"name": "isBirthDayAccurate",
		"isKey": false,
		"label": "IsBirthDayAccurate"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.no, fields.name, fields.vice, fields.gender, fields.mobile, fields.email, fields.birthday, fields.isBirthDayAccurate, 
];

export const ui: UI = {
	label: "Contact",
	fieldArr,
	fields,
};

const resRaw: Res<any> = {
	zh: {
	},
	en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: Contact):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
