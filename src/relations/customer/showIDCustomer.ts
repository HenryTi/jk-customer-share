import { IDUI, IX } from "tonva-react";
import { MidIXID } from "tonva-uqui";
import { JkCustomer } from "uq-app";
import { Customer } from "uq-app/uqs/JkCustomer";
import { CIDCustomer } from "./CIDCustomer";

export async function showIDUserCustomer(jkCustomer: JkCustomer.UqExt) {
	await showIDCustomer(jkCustomer, jkCustomer.UserCustomer);
}

export async function showIDUnitCustomer(jkCustomer: JkCustomer.UqExt, unit:number) {
	await showIDCustomer(
		jkCustomer, 
		jkCustomer.UnitCustomer, 
		unit, 
		[{IX: jkCustomer.UserCustomer, ix: undefined}]
	);
}

async function showIDCustomer(jkCustomer: JkCustomer.UqExt, IX: IX, ix?:number, IXs?:{IX:IX, ix:number}[]) {
	let IDUI: IDUI = {
		ID: jkCustomer.Customer,
		fieldCustoms: {
			//no: {hiden: true},
		},
	}
	let mId = new MidIXID<Customer>(jkCustomer, IDUI, IX, ix, IXs);
	mId.listHeader = '客户列表';
	mId.itemHeader = '客户';
	let cID = new CIDCustomer(mId);
	await cID.call();
}
