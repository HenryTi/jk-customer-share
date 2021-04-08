import { action, makeObservable } from "mobx";
import { JkCustomerPageItems } from "tools";
import { CApp, CUqBase } from "uq-app";
import { Paper } from "uq-app/uqs/JkCustomer";
import { ContactShared, CustomerPageItems, CustomerWithContacts } from "./customerWithContacts";
import { VShare } from "./VShare";
import { VSharePaper } from "./VSharePaper";

export class CShare extends CUqBase {
	paperItems: PaperPageItems;
	paper: Paper;
	customers: CustomerPageItems;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
			showCustomerContacts: action,
		});
	}

	protected async internalStart() {
		this.paperItems = new PaperPageItems(this.uqs.JkCustomer);
		this.openVPage(VShare);
		await this.paperItems.first(undefined);
	}

	tab = () => {
		return this.renderView(VShare);
	}

	load = async() => {
		
	}

	onPaper = async(paper: Paper) => {
		this.paper = paper;
		this.customers = new CustomerPageItems(this.uqs.JkCustomer);
		this.openVPage(VSharePaper);
		this.customers.first(undefined);
	}

	async showCustomerContacts(customer: CustomerWithContacts) {
		let {contacts, visible} = customer;
		if (visible === true) {
			customer.visible = false;
		}
		else {
			customer.visible = true;
			if (!contacts) {
				await this.customers.loadCutomerContacts(customer, this.paper);
			}
		}
	}

	async shareContact(customer:CustomerWithContacts, contact: ContactShared) {
		alert(`share ${this.paper.caption} to customer ${customer.name} contact ${contact.name}`);
		let {JkCustomer} = this.uqs;
		let ret = await JkCustomer.ActIX({
			IX: JkCustomer.ContactUserPaper,
			ID: JkCustomer.UserPaper,
			values: [{ix: contact.id, xi: {user: undefined, paper:this.paper.id}}]
		});
		await JkCustomer.Acts({
			customerX: [{
				id: customer.id,
				paper: 1,
				//coupon?: number|IDXValue;
				$act: 3,						//2: paper, 3: ContactUserPaper
				$track: ret[0]
			}]
		});
		contact.shared = 1;
	}
}

class PaperPageItems extends JkCustomerPageItems<Paper> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.ID<Paper>({
			IDX: [this.jkCustomer.Paper],
			id: undefined,
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
