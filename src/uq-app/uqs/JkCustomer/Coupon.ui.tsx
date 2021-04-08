import { EasyDate, LMR, Res, setRes, TFunc, UI } from "tonva-react";
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
	date: {
		"name": "date",
		"isKey": true,
		"label": "Date"
	} as undefined,
	code: {
		"name": "code",
		"type": "integer",
		"isKey": true,
		"widget": "string",
		"label": "Code"
	} as FieldItemInt,
	type: {
		"name": "type",
		"isKey": false,
		"label": "Type"
	} as undefined,
	$owner: {
		"name": "$owner",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "$owner"
	} as FieldItemInt,
	$create: {
		"name": "$create",
		"isKey": false,
		"label": "$create"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.date, fields.code, fields.type, fields.$owner, fields.$create, 
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
	let {type, code, $create} = item;
	let n = String(100000000 + code);
	let sCode = n.substr(1, 4) + '-' + n.substring(5);
	let left = type===1?
		<span className="text-info mr-3">积分券</span>
		:
		<span className="text-success mr-3">优惠券</span>
	let right = <small className="text-muted"><EasyDate date={$create} /></small>;
	return <LMR className="w-100" left={left} right={right}><b className="text-primary">{sCode}</b></LMR>;
};
