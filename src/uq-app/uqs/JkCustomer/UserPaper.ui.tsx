import { Res, setRes, TFunc, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { UserPaper } from "./JkCustomer";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	user: {
		"name": "user",
		"type": "id",
		"isKey": true,
		"label": "User"
	} as FieldItemId,
	paper: {
		"name": "paper",
		"type": "id",
		"isKey": true,
		"label": "Paper"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.user, fields.paper, 
];

export const ui: UI = {
	label: "UserPaper",
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

export function render(item: UserPaper):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
