import { showIDUnitCustomer } from "relations/customer";
import { IDUI } from "tonva-react";
import { CID, MidIXID } from "tonva-uqui";
import { JkCustomer } from "uq-app";
import { Unit } from "uq-app/uqs/JkCustomer";

export class CIDUnit extends CID<Unit> {
	async onItemView() {
		let uq = this.midID.uq as JkCustomer.UqExt;
		await showIDUnitCustomer(uq, this.item.id);
		//this.openVPage(VUnit);
		/*
		let uq = this.midID.uq as JkCustomer.UqExt;
		//let uq = this.uqs.JkCustomer;
		let IDUI: IDUI = {
			ID: uq.Unit,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidIXID<Unit>(uq, IDUI, uq.UnitCustomer);
		mId.listHeader = '客户列表';
		mId.itemHeader = '客户';
		let cID = new CID(mId);
		await cID.call();
		*/
	}
}
