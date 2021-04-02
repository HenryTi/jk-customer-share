import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { Coupon } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	uCode: {
		"name": "uCode",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "UCode"
	} as FieldItemString,
	code: {
		"name": "code",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Code"
	} as FieldItemString,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.uCode, fields.code, 
];

export const ui: UI = {
	label: "Coupon",
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

export function render(item: Coupon):JSX.Element {
	let {code} = item;
	return <b>{code}</b>;
};
