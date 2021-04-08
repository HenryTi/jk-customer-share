import { FA, View } from "tonva-react";
import { CCoupon } from "./CCoupon";

export class VActions extends View<CCoupon> {
	render() {
		return <div className="d-flex">
			<button className="btn btn-outline-info m-2" onClick={this.controller.showBuildPoint}>
				<FA name="plus" className="mr-1" />
				积分券
			</button>
			<button className="btn btn-outline-success m-2" onClick={this.controller.showBuildDiscount}>
				<FA name="plus" className="mr-1" />
				优惠券
			</button>
		</div>;
	}
}
