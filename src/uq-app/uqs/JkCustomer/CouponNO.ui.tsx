import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { CouponCode } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	code: {
		"name": "code",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "Code"
	} as FieldItemString,
	expireDate: {
		"name": "expireDate",
		"isKey": false,
		"label": "ExpireDate"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
];

export const ui: UI = {
	label: "CouponNO",
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

export function render(item: CouponCode):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
