import { makeObservable } from "mobx";
import { ParamActIX } from "tonva-react";
import { JkCustomerPageItems } from "tools";
import { CApp, CUqBase } from "uq-app";
import { Coupon } from "uq-app/uqs/JkCustomer";
import { VActions } from "./VActions";
import { VBuildDiscount, VBuildPoint } from "./VBuild";
import { VCoupon } from "./VCoupon";

export class CCoupon extends CUqBase {
	couponItems: CouponPageItems;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
		});
	}

	protected async internalStart() {
		this.couponItems = new CouponPageItems(this.uqs.JkCustomer);
		this.openVPage(VCoupon);
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

	showBuildPoint = () => {
		this.openVPage(VBuildPoint);
	}

	async buildPoint() {
		await this.buildCoupon();
	}

	showBuildDiscount = () => {
		this.openVPage(VBuildDiscount);
	}

	async buildDiscount() {
		await this.buildCoupon();
	}

	private async createRandomCode():Promise<string> {
		let {JkCustomer} = this.uqs;
		for (let i=0; i<10; i++) {
			let code = String(1000000 + Math.round((Math.random() * 1000000))).substr(1);
			let ret = await JkCustomer.KeyID({
				ID: JkCustomer.CouponCode,
				key: {code},		
			});
			if (ret.length === 0) {
				let expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 30);
				let sDate = expireDate.toISOString().split('T')[0];
				await JkCustomer.Acts({
					couponCode: [{code, expireDate:sDate}]
				})
				return code;
			}
		}
		return;
	}

	private async buildCoupon() {
		let {JkCustomer} = this.uqs;
		let code = await this.createRandomCode();
		let date = new Date();
		let uCode = String(date.getFullYear()).substr(2) + String(100 + date.getMonth()+1).substr(1) + String(100 + date.getDate()).substr(1) + code;
		let param: ParamActIX<Coupon> = {
			ID: JkCustomer.Coupon,
			IX: JkCustomer.UserCoupon,
			values: [
				{ix:undefined, id:{uCode, code}}
			],
		};
		let ret = await JkCustomer.ActIX(param);
		let id = ret[0];
		if (!id) return;
		this.couponItems.append({id, uCode, code}); //, $create: date, $owner: this.user.id});
	}
}

class CouponPageItems extends JkCustomerPageItems<Coupon> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.IX<Coupon>({
			IX: this.jkCustomer.UserCoupon,
			ix: undefined,
			IDX: [this.jkCustomer.Coupon],
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
