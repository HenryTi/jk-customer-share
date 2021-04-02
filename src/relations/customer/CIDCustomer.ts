import { IDUI } from "tonva-react";
import { CID, MidIXID } from "tonva-uqui";
import { JkCustomerPageItems } from "tools";
import { JkCustomer } from "uq-app";
import { Contact, Customer } from "uq-app/uqs/JkCustomer";
import { VCustomer } from "./VCustomer";

export class CIDCustomer extends CID<Customer> {
	contacts: ContactPageItems;

	async onItemView() {
		this.openVPage(VCustomer);
	}

	showContacts = async () => {
		/*
		this.contacts = new ContactPageItems(this.midID.uq as JkCustomer.UqExt);
		this.openVPage(VContacts);
		this.contacts.first(this.item.id);
		*/
		let uq = this.midID.uq as JkCustomer.UqExt;
		//let uq = this.uqs.JkCustomer;
		let IDUI: IDUI = {
			ID: uq.Contact,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidIXID<Contact>(uq, IDUI, uq.CustomerContact, this.item.id);
		mId.listHeader = '联系人';
		mId.itemHeader = '联系人';
		let cID = new CID(mId);
		await cID.call();
	}

	showContact = (contact:Contact) => {
		alert('contact');
	}
}

class ContactPageItems extends JkCustomerPageItems<Contact> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Customer>({
			IX: this.jkCustomer.CustomerContact,
			ix: param,
			IDX: [this.jkCustomer.Contact],
			page: {
				start: pageStart,
				size: pageSize,
				end: 0,				// 这个做什么用的？
			}
		});
		return {
			$page: ret,
		};
	}
}
