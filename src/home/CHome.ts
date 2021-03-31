import { CUqBase } from "uq-app";
import { VHome } from "./VHome";

export class CHome extends CUqBase {
	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {		
	}

	share = async () => {
		await this.cApp.cShare.start();
	}

	coupon = async () => {
		await this.cApp.cCoupon.start();
	}
}
