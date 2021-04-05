import { makeObservable, observable, runInAction } from "mobx";
import { JkCustomerPageItems } from "tools";
import { Customer, Contact, ParamGetContactShared, Paper } from "uq-app/uqs/JkCustomer";

export class ContactShared implements Contact {
	id?: number;
	no?: string;
	name: string;
	vice: string;
	gender: number;
	mobile: string;
	email: string;
	birthday: any;
	isBirthDayAccurate: number;
	shared: number = 0;
	constructor(contact: Contact) {
		makeObservable(this, {
			shared: observable,
		})
		Object.assign(this, contact);
	}
}

export class CustomerWithContacts implements Customer {
	id?: number;
	no?: string;
	name: string;
	vice: string;
	contacts: Contact[] = null;
	visible: boolean = false;

	constructor(customer: Customer) {
		makeObservable(this, {
			contacts: observable.ref,
			visible: observable,
		})
		Object.assign(this, customer);
	}
}

export class CustomerPageItems extends JkCustomerPageItems<CustomerWithContacts> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Customer>({
			IX: this.jkCustomer.UserCustomer,
			ix: param,
			IDX: [this.jkCustomer.Customer],
			page: {
				start: pageStart,
				size: pageSize,
				end: 0,				// 这个做什么用的？
			}
		});
		return {
			$page: ret.map(v => new CustomerWithContacts(v)),
		};
	}

	async loadCutomerContacts(customer: CustomerWithContacts, paper: Paper) {
		customer.contacts = undefined;
		/*
		let ret = await this.jkCustomer.IX<Contact>({
			IX: this.jkCustomer.CustomerContact,
			ix: customer.id,
			IDX: [this.jkCustomer.Contact],
		});
		*/
		let param:ParamGetContactShared = {customer: customer.id, paper: paper.id};
		let ret = await this.jkCustomer.GetContactShared.query(param);
		runInAction(() => {
			customer.contacts = ret.ret.map(v => new ContactShared(v));
		});
	}
}
