//=== UqApp builder created on Sat Apr 03 2021 23:27:11 GMT-0400 (GMT-04:00) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqID, UqIDX, UqIX } from "tonva-react";


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

export interface ParamGetContactShared {
	customer: number;
	paper: number;
}
interface ReturnGetContactSharedRet {
	id: number;
	no: string;
	name: string;
	vice: string;
	gender: number;
	mobile: string;
	email: string;
	birthday: any;
	isBirthDayAccurate: number;
	shared: number;
}
interface ResultGetContactShared {
	ret: ReturnGetContactSharedRet[];
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

export interface Customer {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface Unit {
	id?: number;
	no?: string;
	name: string;
	vice: string;
}

export interface Contact {
	id?: number;
	no?: string;
	name: string;
	vice: string;
	gender: number;
	mobile: string;
	email: string;
	birthday: any;
	isBirthDayAccurate: number;
}

export interface Paper {
	id?: number;
	date: string;
	caption: string;
	rawID: number;
}

export interface UserPaper {
	id?: number;
	user: number;
	paper: number;
}

export interface CustomerX {
	id: number;
	paper?: number;
	coupon?: number;
	$act?: number;
	$track?: number;
}

export interface ActParamCustomerX {
	id: number|IDXValue;
	paper?: number|IDXValue;
	coupon?: number|IDXValue;
	$act?: number;
	$track?: number;
}

export interface UserCoupon {
	ix: number;
	id: number;
}

export interface UnitCustomer {
	ix: number;
	id: number;
}

export interface CustomerContact {
	ix: number;
	id: number;
	sort: number;
}

export interface UserUnit {
	ix: number;
	id: number;
}

export interface UserCustomer {
	ix: number;
	id: number;
}

export interface ContactUserPaper {
	ix: number;
	id: number;
}

export interface ParamActs {
	$Piecewise?: $Piecewise[];
	$PiecewiseDetail?: $PiecewiseDetail[];
	coupon?: Coupon[];
	couponCode?: CouponCode[];
	customer?: Customer[];
	unit?: Unit[];
	contact?: Contact[];
	paper?: Paper[];
	userPaper?: UserPaper[];
	customerX?: ActParamCustomerX[];
	userCoupon?: UserCoupon[];
	unitCustomer?: UnitCustomer[];
	customerContact?: CustomerContact[];
	userUnit?: UserUnit[];
	userCustomer?: UserCustomer[];
	contactUserPaper?: ContactUserPaper[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetContactShared: UqQuery<ParamGetContactShared, ResultGetContactShared>;
	$Piecewise: UqID<any>;
	$PiecewiseDetail: UqID<any>;
	Coupon: UqID<any>;
	CouponCode: UqID<any>;
	Customer: UqID<any>;
	Unit: UqID<any>;
	Contact: UqID<any>;
	Paper: UqID<any>;
	UserPaper: UqID<any>;
	CustomerX: UqIDX<any>;
	UserCoupon: UqIX<any>;
	UnitCustomer: UqIX<any>;
	CustomerContact: UqIX<any>;
	UserUnit: UqIX<any>;
	UserCustomer: UqIX<any>;
	ContactUserPaper: UqIX<any>;
}
