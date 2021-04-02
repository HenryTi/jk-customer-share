import { IDUI } from "tonva-react";
import { CID, MidIXID } from "tonva-uqui";
import { JkCustomerPageItems } from "tools";
import { CUqBase } from "uq-app";
import { Customer, Unit } from "uq-app/uqs/JkCustomer";
import { VRelations } from "./VRelations";
import { CIDUnit } from "./unit";
import { showIDUnitCustomer, showIDUserCustomer } from "./customer";
//import { CIDCustomer } from "./customer";

export class CRelations extends CUqBase {
	unitItems: UnitPageItems;
	customerItems: CustomerPageItems;

	protected async internalStart() {
	}

	tab = () => {
		return this.renderView(VRelations);
	}

	load = async() => {
		/*
		this.customerItems = new CustomerPageItems(this.uqs.JkCustomer);
		await this.customerItems.first(undefined);
		*/
	}

	showUnits = async () => {
		/*
		this.unitItems = new UnitPageItems(this.uqs.JkCustomer);
		this.openVPage(VUnits);
		await this.unitItems.first(undefined);
		*/
		let uq = this.uqs.JkCustomer;
		let IDUI: IDUI = {
			ID: uq.Unit,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidIXID<Unit>(uq, IDUI, uq.UserUnit, undefined);
		mId.listHeader = '机构列表';
		mId.itemHeader = '机构';
		let cID = new CIDUnit(mId);
		//return cID;
		await cID.call();
	}
	
	showCostomers = async () => {
		/*
		this.customerItems = new CustomerPageItems(this.uqs.JkCustomer);
		this.openVPage(VCustomers);
		await this.customerItems.first(undefined);
		*/
		/*
		let uq = this.uqs.JkCustomer;
		let IDUI: IDUI = {
			ID: uq.Customer,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidIXID<Customer>(uq, IDUI, uq.UserCustomer);
		mId.listHeader = '客户列表';
		mId.itemHeader = '客户';
		let cID = new CIDCustomer(mId);
		//return cID;
		await cID.call();
		*/
		await showIDUserCustomer(this.uqs.JkCustomer);
	}

	showCustomer = async () => {

	}
}

class UnitPageItems extends JkCustomerPageItems<Unit> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Unit>({
			IX: this.jkCustomer.UserUnit,
			ix: undefined,
			IDX: [this.jkCustomer.Unit],
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

class CustomerPageItems extends JkCustomerPageItems<Customer> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Customer>({
			IX: this.jkCustomer.UserCustomer,
			ix: undefined,
			IDX: [this.jkCustomer.Customer],
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
