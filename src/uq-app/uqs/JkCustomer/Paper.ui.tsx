import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { Paper } from "./JkCustomer";

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
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "Date"
	} as FieldItemString,
	caption: {
		"name": "caption",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Caption"
	} as FieldItemString,
	rawID: {
		"name": "rawID",
		"type": "id",
		"isKey": false,
		"label": "RawID"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.date, fields.caption, fields.rawID, 
];

export const ui: UI = {
	label: "Paper",
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

export function render(item: Paper):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
