import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { Customer } from "./JkCustomer";

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
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.no, fields.name, fields.vice, 
];

export const ui: UI = {
	label: "Customer",
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

export function render(item: Customer):JSX.Element {
	let {name} = item;
	return <>{name}</>;
};
