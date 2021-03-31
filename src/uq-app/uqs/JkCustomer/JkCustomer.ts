//=== UqApp builder created on Wed Mar 31 2021 18:48:06 GMT-0400 (GMT-04:00) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqID, UqIX } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/jk-customer-share ========
//===============================

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface $Piecewise {
	id?: number;
	name: string;
	mul: number;
	div: number;
	offset: number;
	asc: number;
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface Coupon {
	id?: number;
	uCode: string;
	code: string;
}

export interface CouponCode {
	id?: number;
	code: string;
	expireDate: any;
}

export interface UserCoupon {
	ix: number;
	id: number;
}

export interface ParamActs {
	$Piecewise?: $Piecewise[];
	$PiecewiseDetail?: $PiecewiseDetail[];
	coupon?: Coupon[];
	couponCode?: CouponCode[];
	userCoupon?: UserCoupon[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$Piecewise: UqID<any>;
	$PiecewiseDetail: UqID<any>;
	Coupon: UqID<any>;
	CouponCode: UqID<any>;
	UserCoupon: UqIX<any>;
}
