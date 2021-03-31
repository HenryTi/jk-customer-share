import { CUqBase } from "uq-app";
import { VCustomer } from "./VCustomer";

export class CCustomer extends CUqBase {
	protected async internalStart() {
	}

	tab = () => {
		return this.renderView(VCustomer);
	}

	load = async() => {
		
	}
}