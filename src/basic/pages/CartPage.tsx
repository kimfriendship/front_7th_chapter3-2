import { ProductSection } from "../components/ProductSection";
import { CartItem, Coupon, ProductWithUI } from "../types";
import { CouponSection } from "../components/CouponSection";
import { CartSection } from "../components/CartSection";
import { PaymentSection } from "../components/PaymentSection";

export function CartPage({
  products,
  filteredProducts,
  debouncedSearchTerm,
  getRemainingStock,
  formatPrice,
  addToCart,
  cart,
  coupons,
  selectedCoupon,
  setSelectedCoupon,
  applyCoupon,
  totals,
  completeOrder,
  calculateItemTotal,
  removeFromCart,
  updateQuantity,
}: {
  products: ProductWithUI[];
  filteredProducts: ProductWithUI[];
  debouncedSearchTerm: string;
  getRemainingStock: (product: ProductWithUI) => number;
  formatPrice: (price: number, productId?: string) => string;
  addToCart: (product: ProductWithUI) => void;
  cart: CartItem[];
  coupons: Coupon[];
  selectedCoupon: Coupon | null;
  setSelectedCoupon: (coupon: Coupon | null) => void;
  applyCoupon: (coupon: Coupon) => void;
  totals: {
    totalBeforeDiscount: number;
    totalAfterDiscount: number;
  };
  completeOrder: () => void;
  calculateItemTotal: (item: CartItem) => number;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        {/* 상품 목록 */}
        <ProductSection
          products={products}
          filteredProducts={filteredProducts}
          debouncedSearchTerm={debouncedSearchTerm}
          formatPrice={formatPrice}
          getRemainingStock={getRemainingStock}
          addToCart={addToCart}
        />
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-4">
          <CartSection
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            calculateItemTotal={calculateItemTotal}
          />

          {cart.length > 0 && (
            <>
              <CouponSection
                coupons={coupons}
                selectedCoupon={selectedCoupon}
                setSelectedCoupon={setSelectedCoupon}
                applyCoupon={applyCoupon}
              />
              <PaymentSection totals={totals} completeOrder={completeOrder} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
