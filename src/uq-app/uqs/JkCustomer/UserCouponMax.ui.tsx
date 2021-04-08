import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { UserCouponMax } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	date: {
		"name": "date",
		"isKey": false,
		"label": "Date"
	} as undefined,
	count: {
		"name": "count",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Count"
	} as FieldItemInt,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.date, fields.count, 
];

export const ui: UI = {
	label: "UserCouponMax",
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

export function render(item: UserCouponMax):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
