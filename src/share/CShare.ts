import { CUqBase } from "uq-app";
import { VShare } from "./VShare";

export class CShare extends CUqBase {
	protected async internalStart() {
		this.openVPage(VShare);
	}

	tab = () => {
		return this.renderView(VShare);
	}

	load = async() => {
		
	}
}