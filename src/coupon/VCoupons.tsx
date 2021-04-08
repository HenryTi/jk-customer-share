import { List, VPage } from "tonva-react";
import { Coupon } from "uq-app/uqs/JkCustomer";
import { CCoupon } from "./CCoupon";

export class VCoupons extends VPage<CCoupon> {
	header() {return '卡券'}
	content() {
		let {couponItems, onCoupon} = this.controller;
		return <div className="">
			<div className="p-2">{this.controller.renderActions()}</div>
			<List items={couponItems} item={{render: this.renderCoupon, onClick: onCoupon}}/>
		</div>;
	}

	private renderCoupon = (coupon: Coupon, index: number): JSX.Element => {
		return <div className="px-3 py-2">
			{this.controller.uqs.JkCustomer.Coupon.render(coupon)}
		</div>;
	}
}
