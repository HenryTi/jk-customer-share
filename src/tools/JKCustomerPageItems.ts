import { PageItems } from "tonva-react";
import { JkCustomer } from "uq-app";

export abstract class JkCustomerPageItems<T> extends PageItems<T> {
	protected jkCustomer: JkCustomer.UqExt;
	constructor(jkCustomer: JkCustomer.UqExt) {
		super();
		this.jkCustomer = jkCustomer;
	}
}
