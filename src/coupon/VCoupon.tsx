import { List, VPage } from "tonva-react";
import { Coupon } from "uq-app/uqs/JkCustomer";
import { CCoupon } from "./CCoupon";

export class VCoupon extends VPage<CCoupon> {
	header() {return '卡券'}
	content() {
		let {couponItems, onCoupon} = this.controller;
		return <div className="">
			<div className="p-2 d-flex">
				<button className="btn btn-outline-info m-2" onClick={this.controller.showBuildPoint}>积分券</button>
				<button className="btn btn-outline-success m-2" onClick={this.controller.showBuildDiscount}>优惠券</button>
			</div>
			<List items={couponItems} item={{render: this.renderCoupon, onClick: onCoupon}}/>
		</div>;
	}

	private renderCoupon = (coupon: Coupon, index: number): JSX.Element => {
		return <div className="px-3 py-2">
			{this.controller.uqs.JkCustomer.Coupon.render(coupon)}
		</div>;
	}
}
