import { UqExt as Uq } from './JkCustomer';
import * as $Piecewise from './$Piecewise.ui';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';
import * as Coupon from './Coupon.ui';
import * as CouponCode from './CouponCode.ui';
import * as Customer from './Customer.ui';
import * as Unit from './Unit.ui';
import * as Contact from './Contact.ui';
import * as Paper from './Paper.ui';
import * as UserPaper from './UserPaper.ui';
import * as UserCoupon from './UserCoupon.ui';
import * as UnitCustomer from './UnitCustomer.ui';
import * as CustomerContact from './CustomerContact.ui';
import * as UserUnit from './UserUnit.ui';
import * as UserCustomer from './UserCustomer.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$Piecewise, $Piecewise);
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
	Object.assign(uq.Coupon, Coupon);
	Object.assign(uq.CouponCode, CouponCode);
	Object.assign(uq.Customer, Customer);
	Object.assign(uq.Unit, Unit);
	Object.assign(uq.Contact, Contact);
	Object.assign(uq.Paper, Paper);
	Object.assign(uq.UserPaper, UserPaper);
	Object.assign(uq.UserCoupon, UserCoupon);
	Object.assign(uq.UnitCustomer, UnitCustomer);
	Object.assign(uq.CustomerContact, CustomerContact);
	Object.assign(uq.UserUnit, UserUnit);
	Object.assign(uq.UserCustomer, UserCustomer);
}
export * from './JkCustomer';
