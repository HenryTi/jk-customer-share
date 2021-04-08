import { FA, List, VPage } from "tonva-react";
import { Paper } from "uq-app/uqs/JkCustomer";
import { CShare } from "./CShare";
import { ContactShared, CustomerWithContacts } from "./customerWithContacts";

export class VSharePaper extends VPage<CShare> {
	header() {return '分享内容'}
	content() {
		let {paper, customers} = this.controller;
		let {id, caption} = paper;
		return <div className="">
			<div className=" border-bottom">
				<div className="d-flex px-3 pt-4 pb-1">
					<h5>{caption}</h5>
				</div>
				<div className="d-flex px-3 py-1">
					<div className=" small text-muted">{id}</div>
					<small className="ml-auto align-self-end cursor-pointer" onClick={() => alert('内容')}>查看内容...</small>
				</div>
			</div>
			<List items={customers} item={{render: this.renderCustomerRow, className:"mt-3"}} />
		</div>;
	}

	private renderCustomerRow = (customer: CustomerWithContacts): JSX.Element => {
		let {name, vice, visible, contacts} = customer;

		return <div className="d-block">
			<div className="d-flex px-3 py-2 cursor-pointer border-bottom"
				onClick={() => this.controller.showCustomerContacts(customer)}>
				<div>
					<div>{name}</div>
					<div className="small text-muted">{vice}</div>
				</div>
				<FA className="ml-auto align-self-end" name={visible === true? 'angle-up': 'angle-down'} />
			</div>
			<List className={visible===true? 'd-block' : 'd-none'} 
				items={contacts}
				item={{render: (contact: ContactShared, index:number) => this.renderContactRow(customer, contact)}} />
		</div>;
	}

	private renderContactRow(customer:CustomerWithContacts, contact: ContactShared) {
		let {id, name, shared} = contact;
		return <div className="d-flex px-3 py-2 align-items-start">
			<FA name="user" className="mx-3 mt-1 text-warning" />
			<div>
				<div>
					<b>{name}</b> 
				</div>
				<div className="small text-muted">
					{
						shared===1 && 
						<small className="text-muted mr-3">
							<FA name="check-circle-o" className="text-warning mr-1" />
							分享
						</small>
					}
					{id}
				</div>
			</div>
			<button className="btn btn-sm btn-outline-info ml-auto" 
				onClick={() => this.controller.shareContact(customer, contact)}>
				<FA name="share" />
			</button>
		</div>;
	}

	private renderPaper = (paper: Paper): JSX.Element => {
		let {caption} = paper;
		return <div className="px-3 py-2">
			<h5>{caption}</h5>
		</div>;
	}
}
