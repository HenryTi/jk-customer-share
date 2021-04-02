import { FA, List, LMR, PropGrid, VPage } from "tonva-react";
import { JkCustomer } from "uq-app";
import { Contact } from "uq-app/uqs/JkCustomer";
import { CIDCustomer } from "./CIDCustomer";

export class VCustomer extends VPage<CIDCustomer> {
	header() {return '客户'}
	right() {return this.controller.renderViewRight()}
	content() {
		let {item, midID} = this.controller;
		let {props, IDUI} = midID;
		return <div className="py-3">
			<PropGrid rows={props}
				values={item} />
			<LMR className="mt-1 bg-white cursor-pointer px-3 py-2"
				onClick={this.controller.showContacts}
				right={<FA name="angle-right" />}>联系人</LMR>
			<div className="mt-3 mb-1 px-3 text-muted small">客户往来详情</div>
			<div className="text-muted small bg-white px-3 py-2">[无]</div>
		</div>;	
	}

	private renderContact(contact: Contact, index: number): JSX.Element {
		return (this.controller.midID.uq as JkCustomer.UqExt).Contact.render(contact);
	}
}
