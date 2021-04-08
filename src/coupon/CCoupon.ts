import { makeObservable } from "mobx";
import { JkCustomerPageItems } from "tools";
import { CApp, CUqBase } from "uq-app";
import { Coupon } from "uq-app/uqs/JkCustomer";
import { VActions } from "./VActions";
import { VDiscountCoupon, VPointCoupon } from "./VCoupon";
import { VCoupons } from "./VCoupons";

export class CCoupon extends CUqBase {
	couponItems: CouponPageItems;
	coupon: Coupon;
	maxCoupon = 10;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
		});
	}

	protected async internalStart() {
		this.couponItems = new CouponPageItems(this.uqs.JkCustomer);
		this.openVPage(VCoupons);
		await this.couponItems.first(undefined);
	}

	load = async() => {
		
	}

	renderActions() {
		return this.renderView(VActions);
	}

	onCoupon = (coupon: Coupon) => {
		alert(coupon.code);
	}

	showBuildPoint = async () => {
		await this.buildCoupon(1);
		this.openVPage(VPointCoupon);
	}

	showBuildDiscount = async () => {
		await this.buildCoupon(2);
		this.openVPage(VDiscountCoupon);
	}

	private async buildCoupon(couponType: 1|2) {
		let {JkCustomer} = this.uqs;
		let ret = await JkCustomer.CreateCoupon.submitReturns({couponType});
		let row = ret.ret[0];
		if (!row) {
			this.coupon = undefined;
			return;
		}
		let {id, date, coupon} = row;
		this.coupon = {id, type: couponType, date, code: coupon};
		this.couponItems.items.unshift(this.coupon);		
	}
}

class CouponPageItems extends JkCustomerPageItems<Coupon> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Coupon>({
			IX: this.jkCustomer.UserCoupon,
			ix: undefined,
			IDX: [this.jkCustomer.Coupon],
			order: 'desc',
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
