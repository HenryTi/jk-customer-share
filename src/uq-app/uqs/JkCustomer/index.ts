import { UqExt as Uq } from './JkCustomer';
import * as $Piecewise from './$Piecewise.ui';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';
import * as Coupon from './Coupon.ui';
import * as CouponCode from './CouponCode.ui';
import * as UserCoupon from './UserCoupon.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$Piecewise, $Piecewise);
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
	Object.assign(uq.Coupon, Coupon);
	Object.assign(uq.CouponCode, CouponCode);
	Object.assign(uq.UserCoupon, UserCoupon);
}
export * from './JkCustomer';
