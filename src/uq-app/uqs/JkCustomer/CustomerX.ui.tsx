import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { CustomerX } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	paper: {
		"name": "paper",
		"isKey": false,
		"label": "Paper"
	} as undefined,
	coupon: {
		"name": "coupon",
		"isKey": false,
		"label": "Coupon"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.paper, fields.coupon, 
];

export const ui: UI = {
	label: "CustomerX",
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

export function render(item: CustomerX):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
