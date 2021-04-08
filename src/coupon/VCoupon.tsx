import { VPage } from "tonva-react";
import { CCoupon } from "./CCoupon";

abstract class VCoupon extends VPage<CCoupon> {
	content() {
		let {coupon, maxCoupon} = this.controller;
		if (!coupon) {
			return <div className="p-3 text-danger">
				一天最多可新生成{maxCoupon}张券。一张券可以发给多个客户。
			</div>;
		}
		let {code} = this.controller.coupon;
		let s = String(100000000 + code);
		let sCode = s.substr(1, 4) + '-' + s.substr(5);
		return <div className="p-5 d-flex justify-content-center">
			<div className="rounded border bg-white p-5">
				<div className="text-center">{this.header()}</div>
				<div className="mt-3 text-primary"><b>{sCode}</b></div>
			</div>
		</div>
	}
}

export class VPointCoupon extends VCoupon {
	header() {return '积分券'}
	protected get back():'close' | 'back' | 'none' {return 'close'}
}

export class VDiscountCoupon extends VCoupon {
	header() {return '优惠券'}
	protected get back():'close' | 'back' | 'none' {return 'close'}
}
